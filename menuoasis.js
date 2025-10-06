  // نجوم متحركة للخلفية
  window.addEventListener ('DOMContentLoaded', () => {
    const starsContainer = document.getElementById ('stars');
    for (let i = 0; i < 200; i++) {
      const star = document.createElement ('div');
      star.className = 'star';
      star.style.top = Math.random () * 100 + '%';
      star.style.left = Math.random () * 100 + '%';
      star.style.animationDuration = Math.random () * 8 + 3 + 's';
      starsContainer.appendChild (star);
    }
  });
  const container = document.getElementById ('cubes-container');
  const buttons = document.querySelectorAll ('.buttons button');
  // كل فئة فيها منتجات متعددة
  const categories = {
    HotDrinks: [
      {
        name: 'شاى',
        price: '30 ج.م',
        images: ['https://i.ibb.co/Y7378JHQ/tea-962Z.png'],
      },
      {
        name: ' قهوة تركى ',
        price: '40 ج.م',
        images: ['https://i.ibb.co/0p4KGcKh/Turkish-coffee-G.jpg'],
      },

      {
        name: 'قهوة تركى دبل',
        price: '40 ج.م',
        images: ['https://i.ibb.co/mrGZDFzF/Double-Turkish-coffee.jpg'],
      },
      {
        name: 'امريكان',
        price: '60 ج.م',
        images: ['https://i.ibb.co/NnLK3KBD/amricana-coffee.jpg'],
      },
      {
        name: 'براد شاى بدوى 2فرد',
        price: '70 ج.م',
        images: ['https://i.ibb.co/YFR00DSt/Bedouin-tea-pot-2-153-Z.png'],
      },
      {
        name: 'كابتشينو',
        price: '55 ج.م',
        images: ['https://i.ibb.co/hPC0g16/cappuccino.jpg'],
      },
      {
        name: 'كابتشينو كراميل',
        price: '65 ج.م',
        images: ['https://i.ibb.co/r20VRHBm/Caramel-Cappuccino-401-Z.png'],
      },
      {
        name: 'قهوة كراميل',
        price: '65 ج.م',
        images: ['https://i.ibb.co/HTxK1dqZ/Caramel-coffee.jpg'],
      },
      {
        name: 'قهوة شوكلاتة',
        price: '55 ج.م',
        images: ['Hot drinks/Chocolate coffee.jpg'],
      },
      {
        name: 'دبل اسبرسو',
        price: '60 ج.م',
        images: ['https://i.ibb.co/GftbhyRn/double-espresso.jpg'],
      },
      {
        name: 'اسبرسو سنجل',
        price: '40 ج.م',
        images: ['https://i.ibb.co/Lzp59krN/espresso.jpg'],
      },
      {
        name: 'كابتشينو بندق',
        price: '65 ج.م',
        images: ['https://i.ibb.co/WNY4rCLT/Hazelnut-Cappuccino-796-Z.png'],
      },
      {
        name: 'قهوة بندق ',
        price: '50 ج.م',
        images: ['https://i.ibb.co/mCPCppb9/hazelnut-coffee-with-milk-000-Z.png'],
      },
      {
        name: 'لاتيه كراميل ',
        price: '70 ج.م',
        images: ['https://i.ibb.co/Cp7fMy2P/Hot-caramel-latte.jpg'],
      },
      {
        name: 'هوت شوكلت ',
        price: '65 ج.م',
        images: ['https://i.ibb.co/XZmXSnbM/hot-chocolate-drink.jpg'],
      },
      {
        name: 'هوت روشية',
        price: '85 ج.م',
        images: ['https://i.ibb.co/3yqZCSVZ/Hot-chocolate-rocher-853-Z.png'],
      },
      {
        name: 'اعشاب',
        price: '35 ج.م',
        images: ['https://i.ibb.co/q3FNFwhp/Hot-mint.jpg'],
      },
      {
        name: 'الاتية بندق',
        price: '70 ج.م',
        images: [
          'https://i.ibb.co/4gRw871R/Hot-hazelnut-latte-with-hazelnuts.jpg',
        ],
      },
      {
        name: 'كركرية سخن',
        price: '35 ج.م',
        images: ['https://i.ibb.co/LdF8yQbF/Hot-hibiscus.jpg'],
      },

      {
        name: 'هوت لوتس',
        price: '85 ج.م',
        images: ['https://i.ibb.co/fd0s7mLP/Hot-Lotus-Drink-466-Z.png'],
      },
      {
        name: 'ميكاتو',
        price: '45 ج.م',
        images: ['https://i.ibb.co/TxVc6DHc/Hot-macchiato.jpg'],
      },
      {
        name: 'موكا',
        price: '75 ج.م',
        images: ['https://i.ibb.co/Q3LTFT9J/Hot-mocha.jpg'],
      },
      {
        name: 'هوت شوكلت فسندق',
        price: '85 ج.م',
        images: ['https://i.ibb.co/rKnN6qMf/Hot-pistachio-drink.jpg'],
      },
      {
        name: 'لاتية فسدق',
        price: '70 ج.م',
        images: ['https://i.ibb.co/Xf6gnnK0/Hot-pistachio-latte-070-Z.png'],
      },
      {
        name: 'لاتية فانليا',
        price: '70 ج.م',
        images: ['https://i.ibb.co/xS7gZjxY/Hot-vanilla-latte-164-Z.png'],
      },
      {
        name: 'لاتية',
        price: '60 ج.م',
        images: ['https://i.ibb.co/FbnRNqhq/Latte-585-Z.png'],
      },
      {
        name: 'نسكافية بلاك ',
        price: '45 ج.م',
        images: ['https://i.ibb.co/cX6nWVp4/Nescafe-Black.jpg'],
      },
      {
        name: 'نسكافية فانليا',
        price: '65 ج.م',
        images: ['https://i.ibb.co/tVyVX6J/Nescafe-Flavor-Vanilla-842-Z.png'],
      },
      {
        name: 'نسكافية بندق',
        price: '65 ج.م',
        images: ['https://i.ibb.co/ymRSBQVD/Nescafe-hazelnut-flavor1-857-Z.png'],
      },
      {
        name: 'نسكافية بالبن',
        price: '40 ج.م',
        images: ['https://i.ibb.co/Qv0jfY2M/Nescafe-with-milk.jpg'],
      },
      {
        name: 'قهوة فرنساوى',
        price: '50 ج.م',
        images: ['https://i.ibb.co/JZqKVF0/Picture-of-milk-tea.jpg'],
      },
      {
        name: 'شاى بالبن',
        price: '35 ج.م',
        images: ['https://i.ibb.co/JZqKVF0/Picture-of-milk-tea.jpg'],
      },
    ],
    Juices: [
      {
        name: 'افوكادو عسل',
        price: '110 ج.م',
        images: ['Juices/Avocado juice honey.529Z.png'],
      },
      {
        name: ' افوكادو عسل مكسرات',
        price: '140 ج.م',
        images: ['Juices/Avocado juice, honey, and nuts.104Z.png'],
      },
      {
        name: ' افوكادو مانجو',
        price: '125 ج.م',
        images: ['Juices/Avocado mango.199Z.png'],
      },
      {
        name: ' موز بالبن',
        price: '60 ج.م',
        images: ['Juices/Banana milk juice.221Z.png'],
      },
      {
        name: ' جوافة بالبن',
        price: '65 ج.م',
        images: ['Juices/Guava juice milk.168Z.png'],
      },
      {
        name: ' جوافة نعناع',
        price: '65 ج.م',
        images: ['Juices/Guava mint juic.132Z.png'],
      },
      {
        name: ' جوافة ',
        price: '60 ج.م',
        images: ['Juices/guava.png'],
      },
      {
        name: ' كيوى مانجو ',
        price: '80 ج.م',
        images: ['Juices/Kiwi mango.289Z.png'],
      },
      {
        name: ' كيوى  ',
        price: '80 ج.م',
        images: ['Juices/kiwi.png'],
      },
      {
        name: ' ليمون نعناع  ',
        price: '45 ج.م',
        images: ['Juices/lemon mint.png'],
      },
      {
        name: '  مانجو  ',
        price: '70 ج.م',
        images: ['Juices/mango.png'],
      },
      {
        name: '  اناناس  ',
        price: '85 ج.م',
        images: ['Juices/pineapple juice.344Z.png'],
      },
      {
        name: '  فراولة بالبن ',
        price: '65 ج.م',
        images: ['Juices/strawberry milk.352Z.png'],
      },
      {
        name: ' فراولة   ',
        price: '60 ج.م',
        images: ['Juices/strawberry.png'],
      },
      {
        name: '  بطيخ  ',
        price: '60 ج.م',
        images: ['Juices/watermelon.png'],
      },
    ],
    Cocktails: [
      {
        name: 'كوكتيل فلوريدا ' + '(مانجو-جوافة-فراولة)',
        price: '80 ج.م',
        images: ['cocktail/Florida cocktail.jpg'],
      },
      {
        name: ' كوكتيل ابو زيد ',
        price: '90 ج.م',
        images: ['cocktail/Abu Zaid cocktail.jpg'],
      },
    ],
    Casta: [
      {
        name: 'كاساتا',
        price: '50 ج.م',
        images: ['Cassata/Cassata.jpg'],
      },
    ],
    Smoothies: [
      {
        name: ' سموزى بلوبيرى ',
        price: '60 ج.م',
        images: ['Smoothie/Blueberry smoothie.jpg'],
      },
      {
        name: ' سموزى كيوى ',
        price: '60 ج.م',
        images: ['Smoothie/kiwi.jpg'],
      },
      {
        name: 'سموزى جيلة كولا ',
        price: '60 ج.م',
        images: ['Smoothie/Jelly Cola Smoothie.jpg'],
      },
      {
        name: 'سموزى ليمون نعناع ',
        price: '50 ج.م',
        images: ['Smoothie/Lemon mint smoothie.jpg'],
      },
      {
        name: 'سموزى ليمون ',
        price: '50 ج.م',
        images: ['Smoothie/Lemon smoothie.jpg'],
      },
      {
        name: 'سموزى مانجو ',
        price: '75 ج.م',
        images: ['Smoothie/Mango smoothie.jpg'],
      },
      {
        name: 'سموزى ميكس بيرى ',
        price: '50 ج.م',
        images: ['Smoothie/Mixed Berry Smoothie.jpg'],
      },
      {
        name: 'سموزى فراولة ',
        price: '60 ج.م',
        images: ['Smoothie/Strawberry smoothie.jpg'],
      },
      {
        name: 'سموزى بينا كولادا ',
        price: '60 ج.م',
        images: ['Smoothie/Pina Colada Smoothie.jpg'],
      },
      {
        name: 'سموزى راس بيرى ',
        price: '60 ج.م',
        images: ['Smoothie/Raspberry smoothie.jpg'],
      },
      {
        name: 'سموزى بطيخ ',
        price: '60 ج.م',
        images: ['Smoothie/Watermelon smoothie.jpg'],
      },
      {
        name: 'سموزى اناناس ',
        price: '75 ج.م',
        images: ['Smoothie/Pineapple smoothie.jpg'],
      },
    ],
    Soda: [
      {
        name: ' بلوبيرى ',
        price: '55 ج.م',
        images: ['Soda/Blueberry soda.237Z.png'],
      },
      {
        name: 'موخيتو ',
        price: '60 ج.م',
        images: ['Soda/Mojito soda.png'],
      },
      {
        name: 'بينا كولادا ',
        price: '65 ج.م',
        images: ['soda/Pina Colada Soda.515Z.png'],
      },
      {
        name: 'اناناس ',
        price: '60 ج.م',
        images: ['soda/Pineapple soda.jpg'],
      },
      {
        name: ' جيلى كولا',
        price: '55 ج.م',
        images: ['soda/Soda jelly cola.jpg'],
      },
      {
        name: ' كولا فانليا',
        price: ' ج.م',
        images: ['soda/vanilla cola soda.417Z.png'],
      },
    ],
    Milkshakes: [
      {
        name: ' ميلك تشك بلوبيرى',
        price: '60 ج.م',
        images: ['milkshake/Blueberry milkshake.459Z.png'],
      },
      {
        name: ' ميلك تشك كراميل',
        price: '65 ج.م',
        images: ['milkshake/Caramel milkshake.jpg'],
      },
      {
        name: ' ميلك تشك شوكولاتة',
        price: '70 ج.م',
        images: ['milkshake/chocolate milkshake.324Z.png'],
      },
      {
        name: ' ميلك تشك دارك شوكلت',
        price: '70 ج.م',
        images: ['milkshake/Dark chocolate milkshake.jpg'],
      },
      {
        name: ' ميلك تشك لوتس',
        price: '90 ج.م',
        images: ['milkshake/Lotus milkshake.578Z.png'],
      },
      {
        name: ' ميلك تشك مانجو',
        price: '80 ج.م',
        images: ['milkshake/Mango milkshake.618Z.png'],
      },
      {
        name: ' ميلك تشك نوتيلا',
        price: '90 ج.م',
        images: ['milkshake/Nutella milkshake.jpg'],
      },
      {
        name: ' ميلك تشك اوريو',
        price: '70 ج.م',
        images: ['milkshake/Oreo milkshake.117Z.png'],
      },
      {
        name: ' ميلك تشك فراولة',
        price: '70 ج.م',
        images: ['milkshake/strawberry milkshake.307Z.png'],
      },
      {
        name: ' ميلك تشك فانليا',
        price: '65 ج.م',
        images: ['milkshake/Vanilla milkshake.928Z.png'],
      },
    ],
    FizzyDrinks: [
      {
        name: ' بريل',
        price: '40 ج.م',
        images: ['canz/51VTVRGHZpL._UF894,1000_QL80_.jpg'],
      },
      {
        name: ' ريدبول',
        price: '75 ج.م',
        images: ['canz/6190n9McwVL._UF350,350_QL80_.jpg'],
      },
      {
        name: ' كولا',
        price: '35 ج.م',
        images: ['canz/Cans Cola.jpg'],
      },
      {
        name: ' سبرايت',
        price: '35 ج.م',
        images: ['canz/Cans of Sprite.jpg'],
      },
      {
        name: 'شويبس يوسفى',
        price: '35 ج.م',
        images: ['canz/images (1).jpg'],
      },
      {
        name: ' شويبس تفاح',
        price: '35 ج.م',
        images: ['canz/images (3).jpg'],
      },
      {
        name: ' شويبس رمان',
        price: '75 ج.م',
        images: ['canz/images.jpg'],
      },
      {
        name: ' شويبس اناناس',
        price: '75 ج.م',
        images: ['canz/Pineapple canz.jpg'],
      },
      {
        name: ' شويبس خوخ',
        price: '35 ج.م',
        images: ['canz/scheppes2.png'],
      },
      {
        name: ' شويبس لمون نعناع',
        price: '35 ج.م',
        images: ['canz/Schweppes Lemon Mint Cans.png'],
      },
      {
        name: ' مياة صغيرة ',
        price: '10 ج.م',
        images: ['canz/2016_8_12_15_46_51_170.jpg'],
      },
    ],
    Yogurt: [{}],
    IcedCoffee: [
      {
        name: 'ايس كوفى ',
        price: '60 ج.م',
        images: ['ice coffe/Ice coffee.jpg'],
      },
      {
        name: ' ايس كابتشينو',
        price: '65 ج.م',
        images: ['ice coffe/iced cappuccino.jpg'],
      },
      {
        name: 'ايس كراميل ',
        price: '70 ج.م',
        images: ['ice coffe/iced caramel.jpg'],
      },
      {
        name: ' ايس موكا لاتية',
        price: '70 ج.م',
        images: ['ice coffe/iced mocha latte.jpg'],
      },
      {
        name: ' ميكاتو ',
        price: '70 ج.م',
        images: ['Hot drinks/Hot macchiato.jpg'],
      },
    ],
    Desserts: [
      {
        name: ' وافل نوتيلا',
        price: '110 ج.م',
        images: ['candies/Nutella-Waffles-Square.jpg'],
      },
      {
        name: ' تشيز كيك فراولة',
        price: '85 ج.م',
        images: ['candies/pexels-amine-1285347-13020801.jpg'],
      },
      {
        name: ' مينى بان كيك   ',
        price: '100 ج.م',
        images: ['candies/pexels-gamzenurcolakerol-11198927.jpg'],
      },
      {
        name: 'مينى سيبشيال بان كيك  ',
        price: '115 ج.م',
        images: ['candies/pexels-gabby-k-7144900.jpg'],
      },
      {
        name: ' تشيز كيك فسدق',
        price: '95 ج.م',
        images: ['candies/pexels-damla-selen-demir-429137893-27569550.jpg'],
      },
      {
        name: ' تشيز كيك شوكولاتة',
        price: '85 ج.م',
        images: ['candies/pexels-masudriguez-17190039.jpg'],
      },
      {
        name: '   مولتن كيك ',
        price: '130 ج.م',
        images: ['candies/pexels-gustavoraton-9500600.jpg'],
      },
      {
        name: ' تشيز كيك كراميل',
        price: '85 ج.م',
        images: ['candies/pexels-sena-124841843-10964782.jpg'],
      },
      {
        name: ' تشيز كيك بلوبيرى',
        price: '85 ج.م',
        images: ['candies/pexels-nadin-sh-78971847-19048375.jpg'],
      },
      {
        name: ' تشيز كيك نوتيلا',
        price: '80 ج.م',
        images: ['candies/pexels-efnanyll-17779122.jpg'],
      },
      {
        name: 'مولتن كيك ايس',
        price: '80 ج.م',
        images: ['candies/pexels-fawzi-3456038-5163948.jpg'],
      },
    ],
    WinterDrinks: [
      {
        name: ' سحلب',
        price: '75 ج.م',
        images: ['Winter drinks/615.jpeg'],
      },
      {
        name: ' سحلب نوتيلا',
        price: '90 ج.م',
        images: ['Winter drinks/images (3).jpg'],
      },
      {
        name: '  بليلة',
        price: '70 ج.م',
        images: ['Winter drinks/45790-طريقة-عمل-البليلة.jpg'],
      },
      {
        name: '  حمص الشام',
        price: '75 ج.م',
        images: ['Winter drinks/2511779_0.jpg'],
      },
    ],
  };

  // إنشاء مكعب لمنتج معين
  function createCube (product) {
    const scene = document.createElement ('div');
    scene.className = 'scene';
    const cube = document.createElement ('div');
    cube.className = 'cube';
    // صور المنتج (لو أكتر من 6 ناخد عشوائي 6)
    let imgs = [...product.images];
    if (imgs.length > 6) {
      imgs = imgs.sort (() => 0.5 - Math.random ()).slice (0, 6);
    }
    const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
    faces.forEach (face => {
      const div = document.createElement ('div');
      div.className = 'face ' + face;
      const img = document.createElement ('img');
      if (product.images[0]) img.src = product.images[0]; // 🌟 صورة واحدة لكل الوجوه
      img.alt = product.name;
      img.classList.add ('zoomable');
      img.loading = 'lazy'; // 🌟 تحميل تدريجي
      div.appendChild (img);
      cube.appendChild (div);
    });
    scene.appendChild (cube);
    // بيانات المنتج
    const info = document.createElement ('div');
    info.className = 'product-info';
    info.innerHTML = `<div>${product.name}</div><div class="price">${product.price}</div>`;
    // 🔹 العداد
    const quantityWrapper = document.createElement ('div');
    quantityWrapper.className = 'quantity-wrapper';

    const minusBtn = document.createElement ('buttons');
    minusBtn.textContent = '➖';
    minusBtn.className = 'qty-btn-minas';

    const qtyDisplay = document.createElement ('span');
    qtyDisplay.textContent = '1'; // يبدأ من 1
    qtyDisplay.className = 'qty-display';

    const plusBtn = document.createElement ('buttons');
    plusBtn.textContent = '➕';
    plusBtn.className = 'qty-btn-plus';

    quantityWrapper.appendChild (minusBtn);
    quantityWrapper.appendChild (qtyDisplay);
    quantityWrapper.appendChild (plusBtn);

    const addBtn = document.createElement ('button');
    addBtn.className = 'order-btns';
    addBtn.textContent = '➕ أضف للسلة';
    addBtn.addEventListener ('click', () => addToCart (product, quantity));
    // زر الطلب المباشر
    const orderBtn = document.createElement ('a');
    orderBtn.href = '#';
    orderBtn.className = 'order-btn direct-order';
    orderBtn.textContent = '📲 اطلب الآن';
    orderBtn.addEventListener ('click', e => {
      e.preventDefault ();

      const phone = '201283122800'; // رقمك بصيغة دولية
      const quantity = qtyDisplay.textContent; // 👈 خد العدد من span
      const message = `عايز اطلب ${quantity} × ${product.name} بسعر ${product.price}`;
      const webLink = `https://wa.me/${phone}?text=${encodeURIComponent (message)}`;
      window.open (webLink, '_blank');
      if (isMobile) {
        let fallbackTimer = null;
        let handled = false;
        const handleVisibility = () => {
          // لو الصفحة اتحولت لغير مرئية غالباً التطبيق اتفتح => نلغي الفالباك
          if (document.hidden) {
            handled = true;
            clearTimeout (fallbackTimer);
            document.removeEventListener ('visibilitychange', handleVisibility);
          }
        };
        document.addEventListener ('visibilitychange', handleVisibility);
        // لو بعد 1200ms مفيش تغيير في الرؤية نفتح wa.me (fallback)
        fallbackTimer = setTimeout (() => {
          if (!handled) {
            window.open (webLink, '_blank');
            document.removeEventListener ('visibilitychange', handleVisibility);
          }
        }, 1200);

        // حاول تفتح التطبيق مباشرة
        window.location.href = appLink;
      } else {
        // على الديسكتوب نفتح واتساب ويب مباشرة
        window.open (webLink, '_blank');
      }
    });
    // ------------------ التحكم في الكمية ------------------
    let quantity = 1;
    plusBtn.addEventListener ('click', () => {
      quantity++;
      qtyDisplay.textContent = quantity;
    });
    minusBtn.addEventListener ('click', () => {
      if (quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
      }
    });
    const wrapper = document.createElement ('div');
    wrapper.appendChild (scene);
    wrapper.appendChild (info);
    wrapper.appendChild (addBtn); // ⬅️ زر إضافة للسلة
    wrapper.appendChild (quantityWrapper); // ✅ العداد يظهر قبل الزر
    wrapper.appendChild (orderBtn);
    container.appendChild (wrapper);
    initZoom (); // ⭐ عشان يربط الصور الجديدة بالمودال
    // التحكم في لف المكعب
    let isDragging = false, startX, startY, currentX = -20, currentY = 20;

    scene.addEventListener ('mousedown', e => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
    });
    document.addEventListener ('mousemove', e => {
      if (!isDragging) return;
      let dx = e.clientX - startX;
      let dy = e.clientY - startY;
      startX = e.clientX;
      startY = e.clientY;
      currentY += dx * 0.5;
      currentX -= dy * 0.5;
      cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
    });
    document.addEventListener ('mouseup', () => {
      isDragging = false;
    });

    // للموبايل
    scene.addEventListener ('touchstart', e => {
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    });
    scene.addEventListener ('touchmove', e => {
      if (!isDragging) return;
      let dx = e.touches[0].clientX - startX;
      let dy = e.touches[0].clientY - startY;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      currentY += dx * 0.5;
      currentX -= dy * 0.5;
      cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
    });
    scene.addEventListener ('touchend', () => {
      isDragging = false;
    });
  }
  function initZoom () {
    const zoomableImages = document.querySelectorAll ('.zoomable');
    zoomableImages.forEach (img => {
      img.onclick = () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        captionText.textContent = img.alt;
      };
    });
  }

  // متغير لتتبع المؤشر لكل فئة
  const categoryIndexes = {
    HotDrinks: 0,
    Juices: 0,
    Cocktails: 0,
    Casta: 0,
    Smoothies: 0,
    Soda: 0,
    Milkshakes: 0,
    FizzyDrinks: 0,
    Yogurt: 0,
    IcedCoffee: 0,
    Desserts: 0,
    WinterDrinks: 0,
  };

  buttons.forEach (btn => {
    btn.addEventListener ('click', () => {
      const category = btn.dataset.category;
      const products = categories[category];
      //***************************************** */ 
      // const howMany = 1; 
      // عدد المكعبات لكل ضغطة

      // let start = categoryIndexes[category];
      // let end = start + howMany;

      // لو وصلنا للنهاية، نرجع للبداية
      // if (end > products.length) end = products.length;

      // إنشاء المكعبات حسب الترتيب
      // products.slice (start, end).forEach (product => createCube (product));

      // تحديث المؤشر للفئة
      // categoryIndexes[category] = end >= products.length ? 0 : end;
      // ****************************************************************
          container.innerHTML = "";

      // ننزل كل المنتجات مرة واحدة
      products.forEach (product => createCube(product));
    });
  });

  // البداية: نعرض أول منتج من كل فئة
  // Object.keys(categories).forEach(cat => {
  //   createCube(categories[cat][0]);
  // });
  // //////////////////////////////////////////////////////////
  // جافاسكربت للفتح والإغلاق
  const modal = document.getElementById ('modal');
  const modalImg = document.getElementById ('modal-img');
  const captionText = document.getElementById ('caption');
  const zoomableImages = document.querySelectorAll ('.zoomable');
  const closeBtn = document.querySelector ('.close');

  zoomableImages.forEach (img => {
    img.addEventListener ('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      captionText.textContent = img.alt;
    });
  });

  closeBtn.addEventListener ('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener ('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
  zoomableImages.forEach (img => {
    const openModal = () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      captionText.textContent = img.alt;
    };
    img.addEventListener ('click', openModal);
    img.addEventListener ('touchstart', openModal); // دعم للموبايل
  });

  const selectBox = document.getElementById ('product-select');

  // توليد الخيارات أوتوماتيك من الكاتيجوريز
  function populateSelect () {
    selectBox.innerHTML = '<option value="">-- اختر منتج --</option>'; // أول اختيار فاضي

    for (const category in categories) {
      categories[category].forEach (product => {
        const option = document.createElement ('option');
        option.value = product.name; // نخزن الاسم
        option.textContent = product.name; // اللي يبان للعميل
        selectBox.appendChild (option);
      });
    }
  }

  // استدعاء الوظيفة أول ما الصفحة تفتح
  populateSelect ();

  // لما يختار من السيلكت
  selectBox.addEventListener ('change', () => {
    const value = selectBox.value;
    if (!value) return;

    let selectedProduct = null;

    // نبحث بالاسم في الكاتيجوريز
    for (const category in categories) {
      selectedProduct = categories[category].find (p => p.name === value);
      if (selectedProduct) break;
    }

    if (!selectedProduct) return;

    // تنظيف الحاوية قبل عرض الجديد
    container.innerHTML = '';

    // عرض المنتج
    createCube (selectedProduct);
  });

  // السلة
  const cart = document.getElementById ('cart');
  const cartItems = document.getElementById ('cart-items');
  const cartTotal = document.getElementById ('cart-total');
  const orderWhatsapp = document.getElementById ('order-whatsapp');

  let items = [];
  let total = 0;

  function addToCart (product, quantity) {
    // ندور هل المنتج موجود أصلاً
    const existing = items.find (p => p.name === product.name);

    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push ({
        name: product.name,
        price: parseInt (product.price),
        quantity: quantity,
      });
    }

    total += parseInt (product.price) * quantity;
    updateCart ();
  }
  function updateCart () {
    cartItems.innerHTML = '';
    items.forEach ((p, index) => {
      const li = document.createElement ('li');

      // اسم المنتج + السعر
      const text = document.createElement ('span');
      // text.textContent = `${p.name} - ${p.price}`;
      text.textContent = `${p.name} ×${p.quantity} - ${p.price * p.quantity} ج.م`;

      // زر الحذف ❌
      const removeBtn = document.createElement ('button');
      removeBtn.textContent = '❌';
      removeBtn.style.marginLeft = '8px';
      removeBtn.style.cursor = 'pointer';
      removeBtn.style.background = 'transparent';
      removeBtn.style.border = 'none';
      removeBtn.style.color = 'red';
      removeBtn.title = 'حذف المنتج';

      removeBtn.addEventListener ('click', () => {
        total -= p.price * p.quantity;
        items.splice (index, 1); // نشيل المنتج من الأراي
        updateCart (); // نحدّث السلة
      });

      li.appendChild (text);
      li.appendChild (removeBtn);
      cartItems.appendChild (li);
    });

    cartTotal.textContent = `الإجمالي: ${total} ج.م`;
  }

  // زر واتساب
  // orderWhatsapp.addEventListener("click", () => {
  //   if (!items.length) return alert("السلة فاضية!");
  //   const phone = "201283122800"; // رقمك
  //   let message = "عايز أطلب:\n";
  //   items.forEach(p => message += `- ${p.name} بسعر ${p.price}\n`);
  //   message += `\nالإجمالي: ${total} ج.م`;

  //   const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  //   window.open(link, "_blank");
  // });
  orderWhatsapp.addEventListener ('click', () => {
    if (!items.length) return alert ('السلة فاضية!');
    const phone = '201283122800';
    let message = 'عايز أطلب:\n';

    items.forEach (p => {
      message += `- ${p.quantity} × ${p.name} بسعر ${p.price} للواحدة = ${p.price * p.quantity} ج.م\n`;
    });

    message += `\nالإجمالي: ${total} ج.م`;

    const link = `https://wa.me/${phone}?text=${encodeURIComponent (message)}`;
    window.open (link, '_blank');
  });

  // 🟢 Drag للسلة
  // let isDraggingCart = false, offsetX, offsetY;
  // cart.addEventListener("mousedown", e => {
  //   isDraggingCart = true;
  //   offsetX = e.clientX - cart.offsetLeft;
  //   offsetY = e.clientY - cart.offsetTop;
  // });
  // document.addEventListener("mousemove", e => {
  //   if (!isDraggingCart) return;
  //   cart.style.left = (e.clientX - offsetX) + "px";
  //   cart.style.top = (e.clientY - offsetY) + "px";
  //   cart.style.right = "auto"; // نخليها تتحرك يمين وشمال
  //   cart.style.bottom = "auto";
  // });
  // document.addEventListener("mouseup", () => isDraggingCart = false);
  // 🟢 Drag & Touch للسلة
  let isDraggingCart = false, offsetX, offsetY;

  // الماوس
  cart.addEventListener ('mousedown', e => {
    isDraggingCart = true;
    offsetX = e.clientX - cart.offsetLeft;
    offsetY = e.clientY - cart.offsetTop;
  });
  document.addEventListener ('mousemove', e => {
    if (!isDraggingCart) return;
    cart.style.left = e.clientX - offsetX + 'px';
    cart.style.top = e.clientY - offsetY + 'px';
    cart.style.right = 'auto';
    cart.style.bottom = 'auto';
  });
  document.addEventListener ('mouseup', () => (isDraggingCart = false));

  // التاتش (موبايل)
  cart.addEventListener (
    'touchstart',
    e => {
      isDraggingCart = true;
      const touch = e.touches[0];
      offsetX = touch.clientX - cart.offsetLeft;
      offsetY = touch.clientY - cart.offsetTop;
    },
    {passive: false}
  );

  cart.addEventListener (
    'touchmove',
    e => {
      if (!isDraggingCart) return;
      const touch = e.touches[0];
      cart.style.left = touch.clientX - offsetX + 'px';
      cart.style.top = touch.clientY - offsetY + 'px';
      cart.style.right = 'auto';
      cart.style.bottom = 'auto';
    },
    {passive: false}
  );

  cart.addEventListener ('touchend', () => {
    isDraggingCart = false;
  });
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