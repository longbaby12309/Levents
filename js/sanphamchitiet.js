let quantity = 1;

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    document.getElementById('quantity-display').textContent = quantity;
  }
}

function increaseQuantity() {
  quantity++;
  document.getElementById('quantity-display').textContent = quantity;
}