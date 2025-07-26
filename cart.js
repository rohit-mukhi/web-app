function updateQty(button, change) {
  const input = button.parentElement.querySelector('input');
  let current = parseInt(input.value);
  current += change;
  if (current < 1) current = 1;
  input.value = current;
}

// Optional: Remove item from cart
document.querySelectorAll(".remove-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".cart-item").remove();
  });
});