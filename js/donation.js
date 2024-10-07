let availableAmount = 5500;
const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || []; // Load existing history

function handleDonation(inputId, amountId, campaignName) {
    const donationInput = document.getElementById(inputId);
    const inputAmount = parseFloat(donationInput.value);
    const addAmount = document.getElementById(amountId);
    const totalAmount = parseFloat(addAmount.textContent.replace(' BDT', ''));

    // Validate input
    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert('Please enter a valid donation amount.');
        return; 
    }

    // Check if donation exceeds available amount
    if (inputAmount > availableAmount) {
        alert('Donation amount exceeds available funds.');
        return;
    }

    // Update total donation amount
    addAmount.textContent = `${totalAmount + inputAmount} BDT`;
    donationInput.value = '';

    // Update available amount
    availableAmount -= inputAmount;

    // Ensure available amount doesn't go negative
    if (availableAmount < 0) {
        availableAmount = 0;
    }

    document.getElementById('available-donation').textContent = `${availableAmount} BDT`;

    // Log donation history
    donationHistory.push({ campaign: campaignName, amount: inputAmount });
    localStorage.setItem('donationHistory', JSON.stringify(donationHistory));

    // Show modal (if you have one)
    const modal = document.getElementById('donation-modal');
    if (modal) {
        modal.classList.add('modal-open'); 
        modal.classList.remove('hidden'); 
    }
}

// Add event listeners for donation buttons
document.getElementById('btn-donation-noakali').addEventListener('click', function() {
    handleDonation('donation-amount', 'add-amount-noakali', 'Flood Relief at Noakhali');
});

document.getElementById('donate-btn-feni').addEventListener('click', function() {
    handleDonation('feni-donation-amount', 'add-amount-feni', 'Flood Relief in Feni');
});

document.getElementById('quota-donate-btn').addEventListener('click', function() {
    handleDonation('quota-donation-amount', 'add-amount-quota', 'Aid for Injured in Quota Movement');
});

// Handle modal close button
document.getElementById('close-modal').addEventListener('click', function() {
    const modal = document.getElementById('donation-modal');
    modal.classList.remove('modal-open'); 
    modal.classList.add('hidden'); 
});

// Navigate to history page
document.getElementById('btn-history').addEventListener('click', function() {
    window.location.href = 'history.html';
});
