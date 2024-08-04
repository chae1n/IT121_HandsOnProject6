// scripts.js
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    clearErrors();
    
    // Get values from form fields
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    
    // Validation flags
    let isValid = true;
    
    // Validate card number
    if (!validateCardNumber(cardNumber)) {
        document.getElementById('card-number-error').textContent = 'Invalid credit card number.';
        isValid = false;
    }
    
    // Validate expiration date
    if (!validateExpiryDate(expiryDate)) {
        document.getElementById('expiry-date-error').textContent = 'Invalid expiration date.';
        isValid = false;
    }
    
    // Validate CVV
    if (!validateCVV(cvv)) {
        document.getElementById('cvv-error').textContent = 'Invalid CVV.';
        isValid = false;
    }
    
    // If all validations pass, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // Form submission logic here
    }
});

function clearErrors() {
    document.getElementById('card-number-error').textContent = '';
    document.getElementById('expiry-date-error').textContent = '';
    document.getElementById('cvv-error').textContent = '';
}

function validateCardNumber(number) {
    const regex = /^\d{4} \d{4} \d{4} \d{4}$/; // Matches format 1234 5678 9123 4567
    return regex.test(number);
}

function validateExpiryDate(date) {
    const regex = /^(0[1-9]|1[0-2])\/(\d{2})$/; // Matches format MM/YY
    return regex.test(date);
}

function validateCVV(cvv) {
    const regex = /^\d{3}$/; // Matches 3-digit CVV
    return regex.test(cvv);
}
