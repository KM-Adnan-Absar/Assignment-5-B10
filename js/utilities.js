function setActiveButton(page) {
    const donationButton = document.getElementById('btn-donation');
    const historyButton = document.getElementById('btn-history');
    
    if (page === 'donation') {
        donationButton.classList.add('active');
        historyButton.classList.add('inactive');
        historyButton.classList.remove('active');
    } else if (page === 'history') {
        historyButton.classList.add('active');
        donationButton.classList.add('inactive');
        donationButton.classList.remove('inactive');
    }
}

// Detect current page and call the function
if (window.location.href.includes('index.html')) {
    setActiveButton('donation');
} else if (window.location.href.includes('history.html')) {
    setActiveButton('history');
}

// Navigation actions
document.getElementById('btn-history').addEventListener('click', function () {
    window.location.href = 'history.html';
});

document.getElementById('btn-donation').addEventListener('click', function () {
    window.location.href = 'index.html';
});

