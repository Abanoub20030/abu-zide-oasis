// video
const videos = document.querySelectorAll ('.video-slide');
let current = 0;
function showVideo (index) {
  videos.forEach ((video, i) => {
    video.style.display = i === index ? 'block' : 'none';
  });
}
showVideo (current);
setInterval (() => {
  current = (current + 1) % videos.length;
  showVideo (current);
}, 6000);

// slide
function toggleSidebar () {
  const slider = document.getElementById ('slider');
  if (slider.style.right === '0px') {
    slider.style.right = '-300px';
  } else {
    slider.style.right = '0px';
  }
}
document.getElementById ('search').addEventListener ('submit', function (e) {
  e.preventDefault ();
  let query = this.querySelector ('input').value.toLowerCase ();
  alert ('انت بتدور على: ' + query);
});
// navbar  مع الاسكرول تغير لون ال
window.addEventListener ('scroll', function () {
  const navbar = document.getElementById ('navbar');

  if (window.scrollY > 700) {
    navbar.classList.add ('scrolled');
  } else {
    navbar.classList.remove ('scrolled');
  }
});
const navbar = document.querySelector ('.navbar');
const hidePoint = 600;

window.addEventListener ('scroll', () => {
  if (window.scrollY > hidePoint) {
    navbar.style.top = '-200px';
  } else {
    navbar.style.top = '0';
  }
});

//فتح صفحة الفيس بوك من لينك المنيو
function likeAndOpenMenu () {
  window.open (
    'https://www.facebook.com/profile.php?id=61560734332926&locale=ar_AR',
    'LikePage',
    'width=600,height=400'
  );
  setTimeout (function () {
    window.location.href = 'oasismenu.html';
  }, 20000);
}
function startRedirect () {
  const message = document.getElementById ('message');
  const arrow = document.getElementById ('arrow');

  message.style.display = 'block';
  arrow.style.display = 'block'; // إظهار السهم مع الرسالة
  setTimeout (function () {
    window.location.href = 'oasismenu.html';
  }, 20000);
}
//فتح صفحة الفيس بوك من لينك الواى فاى//////////////
function likeAndOpenMenu () {
  window.open (
    'https://www.facebook.com/profile.php?id=61560734332926&locale=ar_AR',
    'LikePage',
    'width=600,height=400'
  );
  setTimeout (function () {
    window.location.href = 'passwordwifi.html';
  }, 20000);
}
function startRedirect1 () {
  const message = document.getElementById ('message1');
  const arrow = document.getElementById ('arrow');
  message.style.display = 'block';
  arrow.style.display = 'block'; // إظهار السهم مع الرسالة
  setTimeout (function () {
    window.location.href = 'passwordwifi.html';
  }, 20000);
}

// نحدد العناصر
const leftBtn = document.querySelector ('.sdk');
const rightBtn = document.querySelector ('.sdk2');

const observer = new IntersectionObserver (
  entries => {
    entries.forEach (entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains ('sdk')) {
          entry.target.classList.add ('show-left');
        }
        if (entry.target.classList.contains ('sdk2')) {
          entry.target.classList.add ('show-right');
        }
      } else {
        // لو خرج من الشاشة يشيل الانيميشن علشان يشتغل تاني
        entry.target.classList.remove ('show-left', 'show-right');
      }
    });
  },
  {threshold: 0.2}
); // يظهر لما يكون 20% من العنصر باين

observer.observe (leftBtn);
observer.observe (rightBtn);
// **************************cubs follow*******************************
const zone = document.getElementById ('zone');
const addCubeBtn = document.getElementById ('addCube');

const item = {
  name: '',
  price: ' ',
  images: [''],
};

function makeCube (product) {
  const stage = document.createElement ('div');
  stage.className = 'stage';

  // 🌟 العنصر الأبوي للأنيميشن
  const wrapper = document.createElement ('div');
  wrapper.className = 'block-wrapper';
  wrapper.style.animation = 'dropIn 0.8s ease forwards';

  // المكعب
  const block = document.createElement ('div');
  block.className = 'block';

  const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
  faces.forEach (face => {
    const div = document.createElement ('div');
    div.className = 'side ' + face;

    // إنشاء الزر
    const fbBtn = document.createElement ('button');
    const likefacebook = document.createElement ('button');
    // زر Like
    likefacebook.className = 'likefacebook';
    likefacebook.innerHTML = `<i class="bi bi-hand-thumbs-up-fill"></i> Please like the page`;

    fbBtn.className = 'btnnn-facebook';
    fbBtn.innerHTML = `<i class="bi bi-facebook"></i>  Follow page`;

    // الاتنين يفتحوا نفس الرابط
    [fbBtn, likefacebook].forEach (btn => {
      btn.addEventListener ('click', () => {
        window.open ('https://www.facebook.com/61560734332926', '_blank');
      });
    });

    const btnsWrapper = document.createElement ('div');
    btnsWrapper.className = 'btns-wrapper';
    btnsWrapper.appendChild (fbBtn);
    btnsWrapper.appendChild (likefacebook);

    div.appendChild (btnsWrapper);
    block.appendChild (div);

    // CSS
    const style = document.createElement ('style');
    style.textContent = `
  .btns-wrapper {
    display: flex;
    flex-direction: column-reverse; /* فوق بعض */
    align-items: center;
    gap: 15px; /* مسافة بينهم */
    width: 50%;
    height: 100%;
    justify-content: center; /* يتوسطن جوه الوجهة */
  }
  .btnnn-facebook, .likefacebook {
    background-color: #1877f2;
    color: white !important;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: 0.3s;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
    
  }
  .btn-facebook i, .likefacebook i {
    font-size: 20px;
  }
  .btnnn-facebook:hover, .likefacebook:hover {
    background-color: #145dbf;
    transform: scale(1.1);
  }
`;
    document.head.appendChild (style);

    div.appendChild (fbBtn);

    block.appendChild (div);
  });

  wrapper.appendChild (block); // 🌟 block جوه wrapper
  stage.appendChild (wrapper); // 🌟 wrapper جوه stage
  zone.appendChild (stage); // 🌟 stage جوه zone
  // 🌟 نعيد تهيئة الـ SDK بعد إضافة العنصر الجديد
  if (window.FB) FB.XFBML.parse (wrapper);
  // 🌀 التحكم في الدوران
  let dragging = false;
  let startX = 0, startY = 0;
  let rotX = -10, rotY = 0;
  const sens = 0.4;

  function update () {
    block.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }

  stage.addEventListener ('pointerdown', e => {
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    stage.classList.add ('dragging');
  });

  document.addEventListener ('pointerup', () => {
    dragging = false;
    stage.classList.remove ('dragging');
  });

  document.addEventListener ('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    startX = e.clientX;
    startY = e.clientY;
    rotY += dx * sens;
    rotX -= dy * sens;
    rotX = Math.max (-80, Math.min (80, rotX)); // حدود X
    update ();
  });

  update ();
}

addCubeBtn.addEventListener ('click', () => {
  makeCube (item);
});
// update ();

// offers
// **********************تحريك عد العروض ***************************//
const container = document.getElementById ('slides-container');
const repeatCount = 5; // عدد التكرارات

// خزن العناصر الأصلية في مصفوفة
const slides = Array.from (container.children);

for (let i = 0; i < repeatCount; i++) {
  slides.forEach (slide => {
    const clone = slide.cloneNode (true); // عمل نسخة من العنصر
    container.appendChild (clone); // أضف النسخة في النهاية
  });
}
//******************** التقيييم ********** ************************///
// إيقاف الماركيه أثناء التقييم إذا موجود
document.querySelectorAll ('.rating').forEach (ratingEl => {
  const marquee = ratingEl.closest ('marquee');
  if (!marquee) return; // لو مفيش marquee، نتجاهل

  ratingEl.addEventListener ('mouseover', () => {
    marquee.stop ();
  });
  ratingEl.addEventListener ('mouseout', () => {
    marquee.start ();
  });
});

const LS_KEY = 'slider_ratings_v1';
const storedRatings = JSON.parse (localStorage.getItem (LS_KEY) || '{}');

function updateRatingInfo (container, productName) {
  const ratingData = storedRatings[productName] || {sum: 0, count: 0};
  const avg = ratingData.count ? ratingData.sum / ratingData.count : 0;
  const avgRound = Math.round (avg * 10) / 10;
  container.textContent = `${avgRound} من 5 • ${ratingData.count} تقييم`;
}

function setSelectedStars (stars, value) {
  stars.forEach ((s, i) => {
    s.classList.toggle ('selected', i < value);
    s.classList.remove ('hover');
  });
}

// إضافة الأحداث لكل تقييم
document.querySelectorAll ('.rating').forEach (ratingEl => {
  const productName = ratingEl.dataset.product;
  const stars = ratingEl.querySelectorAll ('.star');
  const infoEl = ratingEl.nextElementSibling;

  // تحديث النص إذا كان فيه تقييم محفوظ
  updateRatingInfo (infoEl, productName);
  if (storedRatings[productName] && storedRatings[productName].last) {
    setSelectedStars (stars, storedRatings[productName].last);
  }

  stars.forEach ((star, idx) => {
    const i = idx;

    star.addEventListener ('mouseover', () => {
      stars.forEach ((s, j) => s.classList.toggle ('hover', j <= i));
    });

    star.addEventListener ('mouseout', () => {
      stars.forEach (s => s.classList.remove ('hover'));
    });

    star.addEventListener ('click', () => {
      const value = i + 1;
      const data = storedRatings[productName] || {sum: 0, count: 0};

      data.sum += value;
      data.count += 1;
      data.last = value;

      storedRatings[productName] = data;
      localStorage.setItem (LS_KEY, JSON.stringify (storedRatings));

      setSelectedStars (stars, value);
      updateRatingInfo (infoEl, productName);

      infoEl.textContent = `تم التقييم ${value} ★ — شكراً لك (${data.count} تقييم)`;
      setTimeout (() => updateRatingInfo (infoEl, productName), 2000);
    });

    // دعم الكيبورد
    star.addEventListener ('keydown', ev => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault ();
        star.click ();
      }
    });
  });
});
// ***************** zoom-in/offers ************************************//

document.addEventListener ('DOMContentLoaded', () => {
  const items = document.querySelectorAll ('#offers .zoom-item');

  const observer = new IntersectionObserver (
    entries => {
      entries.forEach (entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add ('zoom-in'); // يظهر
        } else {
          entry.target.classList.remove ('zoom-in'); // يختفي تاني لما يخرج من الشاشة
        }
      });
    },
    {threshold: 0.2}
  );

  items.forEach (item => observer.observe (item));
});

// brithday
function calculatebirthdayTotal () {
  let num = document.getElementById ('numberInput').value;
  let total = num * 60;
  document.getElementById ('result').innerHTML = `
  <div style="line-height:1.8; font-size:18px; color:#fff;">
    <div><strong>Includes:</strong> for each person (1) can + service + birthday song</div>
    <div><strong>شامل:</strong> لكل فرد (1) الكانز + السرفيس + اغنية عيد ميلاد</div>
    <div style="margin-top:10px; font-weight:bold; color:red;  font-size: 18px;">
      الإجمالي = ${total}
    </div>
  </div>
`;
}

// // trips //
// // دوال التحديث لكل انبوت حسب النظام
function setupSystem (sysId, price1, price2) {
  document
    .getElementById ('input1_' + sysId)
    .addEventListener ('input', function () {
      let value1 = parseFloat (this.value) || 0;
      let total1 = value1 * price1;
      document.getElementById ('result1_' + sysId).textContent =
        'الناتج الأول: ' + total1;
    });

  document
    .getElementById ('input2_' + sysId)
    .addEventListener ('input', function () {
      let value2 = parseFloat (this.value) || 0;
      let total2 = value2 * price2;
      document.getElementById ('result2_' + sysId).textContent =
        'الناتج الثاني: ' + total2;
    });
}

// دالة لحساب الإجمالي
function calculateTotal (sysId) {
  let value1 =
    parseFloat (document.getElementById ('input1_' + sysId).value) || 0;
  let value2 =
    parseFloat (document.getElementById ('input2_' + sysId).value) || 0;

  let total1, total2;

  // كل نظام له حساب مختلف
  if (sysId === '1') {
    total1 = value1 * 30;
    total2 = value2 * 80;
  } else if (sysId === '2') {
    total1 = value1 * 25;
    total2 = value2 * 70;
  } else if (sysId === '3') {
    total1 = value1 * 20;
    total2 = value2 * 60;
  } else if (sysId === '4') {
    total1 = value1 * 15;
    total2 = value2 * 50;
  }

  let final = total1 + total2;
  document.getElementById ('finalResult_' + sysId).textContent =
    'الإجمالي: ' + final;
}

// تفعيل الأنظمة
setupSystem ('1', 30, 80);
setupSystem ('2', 25, 70);
setupSystem ('3', 20, 60);
setupSystem ('4', 15, 50);

// ****************** button whatsab*********************************//
// offers
const links = document.querySelectorAll ('.order-btn');
links.forEach (link => {
  const phone = link.dataset.phone;
  const message = link.dataset.message;
  const encodedMessage = encodeURIComponent (message);
  link.href = `https://wa.me/${phone}?text=${encodedMessage}`;
});
// brithday
const btn = document.querySelectorAll ('.btn-happy');
btn.forEach (link => {
  const phone = link.dataset.phone;
  const message = link.dataset.message;
  const encodedMessage = encodeURIComponent (message);
  link.href = `https://wa.me/${phone}?text=${encodedMessage}`;
});
// trips
const btntrips = document.querySelectorAll ('.btn-happy-trips');
btntrips.forEach (link => {
  const phone = link.dataset.phone;
  const message = link.dataset.message;
  const encodedMessage = encodeURIComponent (message);
  link.href = `https://wa.me/${phone}?text=${encodedMessage}`;
});
// footer
const btnwhatsap = document.querySelectorAll ('.btn-whatsap');
btnwhatsap.forEach (link => {
  const phone = link.dataset.phone;
  const message = link.dataset.message;
  const encodedMessage = encodeURIComponent (message);
  link.href = `https://wa.me/${phone}?text=${encodedMessage}`;
});
// section6
const scrollBtn = document.getElementById ('scrollTopBtn');
// إظهار / إخفاء الزر حسب الاسكرول
window.addEventListener ('scroll', () => {
  if (window.scrollY > 200) {
    // يظهر بعد 200 بكسل نزول
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  }
});
// عند الضغط يرجع لأعلى
scrollBtn.addEventListener ('click', () => {
  window.scrollTo ({
    top: 0,
    behavior: 'smooth', // صعود ناعم
  });
});
