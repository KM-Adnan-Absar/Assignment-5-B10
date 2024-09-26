document.getElementById('btn-donation').addEventListener('click', function() {
    console.log("Donate");

    // Get the input value
    const donationInput = document.getElementById('donation-amount');
    const inputAmount = parseFloat(donationInput.value); 
    console.log(inputAmount);

    // Get the current amount from the BDT display
    const addAmount = document.getElementById('add-amount-noakali');
    const addAmountText = addAmount.textContent;

    // Extract the numeric value from the text content
    const totalAmount = parseFloat(addAmountText.replace(' BDT', ''));


    // Check if input is valid (NaN or <= 0)
    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert('Please enter a valid donation amount.');
    } 
    
    else {
        // Output the value (you can process it further as needed)
        alert(`Thank you for donating ${inputAmount} BDT!`);
        console.log(`Donation amount: ${inputAmount}`);

        // Calculate the new total donation amount
        const newDonationAmount = totalAmount + inputAmount;

        // Update the text content with the new donation amount
        addAmount.textContent = `${newDonationAmount} BDT`;

        // Clear the input field after submission
        donationInput.value = '';  
    }
});

