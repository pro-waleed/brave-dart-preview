const whatsappNumber = "967775106937";

const products = [
  {
    name: "دفتر تزيين يومي",
    description:
      "دفتر مرتب وأنيق يساعد على تنظيم المذاكرة اليومية ويمنح الحصص والواجبات شكلاً أجمل.",
    price: "1000 ريال يمني",
    tag: "الأكثر طلباً",
    visual: "linear-gradient(180deg, #f7fbfb 0%, #cde3df 100%)",
    accent: "مناسب للواجبات اليومية",
  },
  {
    name: "دفتر الطفل المتألق",
    description:
      "تصميم تحفيزي موجه للأطفال يشجعهم على الدراسة ويجعل الدفتر جزءاً محبباً من يومهم.",
    price: "1500 ريال يمني",
    tag: "للأطفال",
    visual: "linear-gradient(180deg, #ffd2bf 0%, #ef7b4d 100%)",
    accent: "يعزز ارتباط الطفل بالدفتر",
  },
  {
    name: "دفتر متابعة المذاكرة",
    description:
      "نسخة عملية لتنظيم المواد والمراجعة والمتابعة المنزلية بأسلوب هادئ وأنيق.",
    price: "1800 ريال يمني",
    tag: "للتنظيم",
    visual: "linear-gradient(180deg, #8fc0bb 0%, #1c6668 100%)",
    accent: "مثالي للمتابعة الأسبوعية",
  },
  {
    name: "دفتر هدية أنيق",
    description:
      "دفتر بتفاصيل أنيقة مناسب للهدايا والطلبات الخاصة مع إمكانية إضافة عبارة قصيرة حسب المناسبة.",
    price: "2200 ريال يمني",
    tag: "للهدايا",
    visual: "linear-gradient(180deg, #f3e7dc 0%, #d9b28e 100%)",
    accent: "أنسب خيار للهدايا",
  },
];

const productGrid = document.querySelector("#product-grid");
const productSelect = document.querySelector("#product-select");
const orderForm = document.querySelector("#order-form");

if (productGrid) {
  productGrid.innerHTML = products
    .map((product) => {
      const whatsappText = encodeURIComponent(
        `مرحباً، أريد طلب ${product.name} بسعر ${product.price} من Brave D Art`
      );

      return `
        <article class="product-card reveal">
          <div class="product-visual" style="background: ${product.visual};">
            <div class="product-overlay">
              <span>${product.tag}</span>
              <strong>${product.accent}</strong>
            </div>
          </div>
          <div class="product-content">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
          <div class="product-meta">
            <span class="price">${product.price}</span>
            <span class="tag">${product.tag}</span>
          </div>
          <a class="order-btn" href="https://wa.me/${whatsappNumber}?text=${whatsappText}" target="_blank" rel="noreferrer">اطلب هذا المنتج</a>
        </article>
      `;
    })
    .join("");
}

if (productSelect) {
  productSelect.innerHTML = products
    .map(
      (product, index) =>
        `<option value="${index}">${product.name} - ${product.price}</option>`
    )
    .join("");
}

if (orderForm) {
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const customerName = document.querySelector("#customer-name").value.trim();
    const selectedIndex = Number(document.querySelector("#product-select").value);
    const quantity = document.querySelector("#quantity").value.trim();
    const notes = document.querySelector("#notes").value.trim();
    const paymentMethod = document.querySelector("#payment-method").value;
    const product = products[selectedIndex];

    const message = [
      "مرحباً Brave D Art",
      `الاسم: ${customerName}`,
      `المنتج: ${product.name}`,
      `السعر: ${product.price}`,
      `الكمية: ${quantity}`,
      `طريقة الدفع: ${paymentMethod}`,
      `ملاحظات: ${notes || "لا توجد"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));
