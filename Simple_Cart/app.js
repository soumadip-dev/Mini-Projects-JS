// Select DOM elements for cart items and total bill
const totalBillElement = document.getElementById('cart-total');
const cartItemsContainer = document.getElementById('cart-items');

// Initialize cart items array
let cartItems = [];

// Adds an item to the cart or updates its quantity if it already exists.

function addItemToCart(itemName, itemPrice) {
  let existingItem = cartItems.find(item => item.name === itemName);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
  }
  updateCartDisplay();
}

// Updates the cart display in the DOM.

function updateCartDisplay() {
  cartItemsContainer.innerHTML = '';

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML =
      '<div class="empty-cart">Cart is empty</div>';
  } else {
    cartItems.forEach(item => {
      let cartItemElement = document.createElement('div');
      cartItemElement.classList.add('cart-item');
      cartItemElement.innerHTML = `
                <p>${item.name}</p>
                <div class="quantity-controls">
                    <button class="decrease">➖</button>
                    <p>${item.quantity}</p>
                    <button class="increase">➕</button>
                    <p>$${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="remove">❌</button>
                </div>
            `;
      cartItemsContainer.appendChild(cartItemElement);

      // Attach event listeners to buttons
      cartItemElement
        .querySelector('.decrease')
        .addEventListener('click', () => updateItemQuantity(item.name, -1));
      cartItemElement
        .querySelector('.increase')
        .addEventListener('click', () => updateItemQuantity(item.name, 1));
      cartItemElement
        .querySelector('.remove')
        .addEventListener('click', () => removeItemFromCart(item.name));
    });
  }
  calculateTotalBill();
}

// Updates the quantity of an item in the cart.

function updateItemQuantity(itemName, change) {
  let item = cartItems.find(item => item.name === itemName);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeItemFromCart(itemName);
    } else {
      updateCartDisplay();
    }
  }
}

// Removes an item from the cart.

function removeItemFromCart(itemName) {
  cartItems = cartItems.filter(item => item.name !== itemName);
  updateCartDisplay();
}

// Calculates and updates the total bill.

function calculateTotalBill() {
  let totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  totalBillElement.innerHTML = `<h3>Total: $${totalAmount.toFixed(2)}</h3>`;
}
