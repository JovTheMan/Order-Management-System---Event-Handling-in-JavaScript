// Task 2 + 3: Selecting HTML Elements
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

// Function to update total price based on selected product and quantity
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Event listeners for changes in product selection and quantity
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

// Task 4: Handle Order Submission and Display Order Summary
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;

    // Validate quantity input
    if (quantity < 1) {
        orderSummary.textContent = "Please enter a valid quantity.";
        return;
    }

    // Display order summary
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});



