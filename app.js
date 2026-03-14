const products = [
  {
    name: "دفتر Soft Bloom",
    description: "غلاف وردي هادئ مناسب للهدايا واليوميات الشخصية.",
    price: "48 ر.س",
    tag: "الأكثر أناقة",
    colorA: "#dca8ae",
    colorB: "#b46c74",
  },
  {
    name: "دفتر Daily Muse",
    description: "تصميم رملي أنيق للتخطيط اليومي والدراسة والعمل.",
    price: "42 ر.س",
    tag: "عملي يومياً",
    colorA: "#ead9c7",
    colorB: "#cdaa84",
  },
  {
    name: "دفتر Quiet Plan",
    description: "لون زيتي مطفأ يمنح المكتب مظهراً هادئاً وراقياً.",
    price: "45 ر.س",
    tag: "للتنظيم",
    colorA: "#b9c0a0",
    colorB: "#88926d",
  },
  {
    name: "دفتر Golden Notes",
    description: "تفاصيل ذهبية ناعمة تناسب المناسبات والطلبات الخاصة.",
    price: "55 ر.س",
    tag: "مناسب للهدايا",
    colorA: "#e8cfaa",
    colorB: "#c79c63",
  },
];

const productGrid = document.querySelector("#product-grid");

if (productGrid) {
  productGrid.innerHTML = products
    .map((product) => {
      const whatsappText = encodeURIComponent(
        `مرحباً، أريد طلب ${product.name} من متجر Brave D Art`
      );

      return `
        <article class="product-card">
          <div class="product-visual" style="background: linear-gradient(180deg, ${product.colorA}, ${product.colorB});">
            <div class="product-book" style="background: linear-gradient(180deg, ${product.colorA}, ${product.colorB});"></div>
          </div>
          <div class="product-content">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
          <div class="product-meta">
            <span class="price">${product.price}</span>
            <span class="tag">${product.tag}</span>
          </div>
          <a class="order-btn" href="https://wa.me/966500000000?text=${whatsappText}" target="_blank" rel="noreferrer">اطلب الآن</a>
        </article>
      `;
    })
    .join("");
}
