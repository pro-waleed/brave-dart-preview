const products = [
  {
    name: "دفتر نور",
    description: "غلاف دافئ ولمسة برتقالية تمنح المذاكرة حضوراً ألطف وحماساً أكبر.",
    price: "48 ر.س",
    tag: "طاقة يومية",
    colorA: "#f18a5e",
    colorB: "#da6535",
  },
  {
    name: "دفتر أثر",
    description: "تصميم هادئ بألوان فاتحة مناسب للتخطيط اليومي والدراسة المنتظمة.",
    price: "42 ر.س",
    tag: "عملي يومياً",
    colorA: "#f2efe6",
    colorB: "#d6d0c3",
  },
  {
    name: "دفتر سكون",
    description: "لون أخضر مزرق مستوحى من الهوية، يمنح المكتب طابعاً هادئاً ومرتباً.",
    price: "45 ر.س",
    tag: "للتنظيم",
    colorA: "#79a7a0",
    colorB: "#356d70",
  },
  {
    name: "دفتر هدية",
    description: "نسخة أنيقة للهدايا والطلبات الخاصة مع مساحة لعبارة قصيرة أو بطاقة.",
    price: "55 ر.س",
    tag: "مناسب للهدايا",
    colorA: "#ebc29a",
    colorB: "#d98a5a",
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
