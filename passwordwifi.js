const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const status = document.getElementById("status");
const progressBar = document.getElementById("progress");
const progressBarInner = progressBar.querySelector("i");
const ocrTextEl = document.getElementById("ocrText");
const resultOk = document.getElementById("resultOk");
const resultNo = document.getElementById("resultNo");

// كلمات البحث
const followPatterns = [
  /متاب(عة|ع)/iu, // متابعة - متابع
  /تابع/iu,
  /فولو/iu,
  /\bfollow(ing|ed)?\b/iu,
];

const negationPatterns = [
  /لا\s*تابع/i,
  /لا\s*أتابع/i,
  /لاتابع/i,
  /\bnot\s*follow/i,
];

const { createWorker } = Tesseract;
const worker = createWorker({
  logger: (m) => {
    if (
      m.status === "recognizing text" ||
      m.status === "loading tesseract core"
    ) {
      progressBar.style.display = "block";
      const p = Math.round((m.progress || 0) * 100);
      progressBarInner.style.width = p + "%";
      status.textContent = `جاري المعالجة: ${m.status} ${p}%`;
    } else if (m.status) {
      status.textContent = "الحالة: " + m.status;
    }
  },
});

function normalizeText(text) {
  if (!text) return "";
  let t = text.replace(/[\u064B-\u0652]/g, "");
  t = t.replace(/[^\p{L}\s]/gu, " ");
  t = t.replace(/\s+/g, " ").trim();
  return t.toLowerCase();
}

imageInput.addEventListener("change", async (e) => {
  resetUI();
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  preview.src = url;
  preview.style.display = "block";
  status.textContent = "تحميل صورة...";

  try {
    await worker.load();
    await worker.loadLanguage("ara+eng");
    await worker.initialize("ara+eng");

    status.textContent = "بدء التعرف على النص...";
    const { data } = await worker.recognize(file);
    const rawText = data && data.text ? data.text : "";
    const norm = normalizeText(rawText);

    ocrTextEl.style.display = "block";
    ocrTextEl.textContent = rawText.trim() || "(لم يتم العثور على نص واضح)";

    const hasNeg = negationPatterns.some((rx) => rx.test(norm));
    const hasFollow = followPatterns.some((rx) => rx.test(norm));

    if (hasFollow && !hasNeg) {
      resultOk.style.display = "block";
      status.textContent = "✅ تم العثور على كلمة متابعة/فولو.";
    } else {
      resultNo.style.display = "block";
      status.textContent = "❌ لم يتم العثور على متابعة.";
    }
  } catch (err) {
    console.error(err);
    status.textContent = "حصل خطأ أثناء المعالجة.";
  } finally {
    progressBar.style.display = "none";
  }
});

function resetUI() {
  status.textContent = "جارٍ التحضير...";
  ocrTextEl.style.display = "none";
  ocrTextEl.textContent = "";
  resultOk.style.display = "none";
  resultNo.style.display = "none";
  progressBarInner.style.width = "0%";
}
