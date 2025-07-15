document.addEventListener("DOMContentLoaded", function () {
  const FREE_SHIPPING_THRESHOLD = 150; // valor mínimo em reais para frete grátis
  const target = document.querySelector(".js-ajax-cart-total");

  if (!target) return;

  const topbarRightCol = document.querySelector(
    ".js-topbar .col.text-right.d-none.d-md-block"
  );

  if (!topbarRightCol) return;

  // Cria o elemento da mensagem de frete
  const shippingMessage = document.createElement("div");
  shippingMessage.className = "shipping-message";
  shippingMessage.style.cssText = `
      text-align: left;
      color: white;
      font-weight: bold;
      font-size: 14px;
      border-radius: 20px;
    `;

  topbarRightCol.appendChild(shippingMessage);

  function updateShippingMessage() {
    const rawValue = parseFloat(target.getAttribute("data-priceraw") || "0");
    const total = rawValue / 100;

    if (total >= FREE_SHIPPING_THRESHOLD) {
      shippingMessage.textContent = "🎉 Você ganhou frete grátis!";
    } else {
      const remaining = (FREE_SHIPPING_THRESHOLD - total)
        .toFixed(2)
        .replace(".", ",");
      shippingMessage.textContent = `🛒 Faltam R$ ${remaining} para frete grátis`;
    }
  }

  // Atualiza com o valor atual
  updateShippingMessage();

  // Observa mudanças no atributo
  const observer = new MutationObserver(() => {
    updateShippingMessage();
  });

  observer.observe(target, {
    attributes: true,
    attributeFilter: ["data-priceraw"],
  });

  // Fallback: atualiza a cada 3s
  setInterval(updateShippingMessage, 3000);
});
