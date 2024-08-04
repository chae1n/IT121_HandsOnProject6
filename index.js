document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productSelect');
    const quantityInput = document.getElementById('quantityInput');
    const calculateButton = document.getElementById('calculateButton');
    const totalCostDisplay = document.getElementById('totalCost');

    calculateButton.addEventListener('click', function() {
        const selectedOption = productSelect.options[productSelect.selectedIndex];
        const price = parseFloat(selectedOption.getAttribute('data-price'));
        const quantity = parseInt(quantityInput.value, 10);
        
        if (isNaN(price) || isNaN(quantity) || quantity <= 0) {
            totalCostDisplay.textContent = 'Total Cost: Invalid input';
            return;
        }

        const totalCost = price * quantity;
        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    });
});
