const buyBtns = document.querySelectorAll('.js-buy-btn');
const modal = document.querySelector('.js-modal');
const close = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

function showBuyTickets() {
    if (modal) {
        modal.classList.add('open');
    } else {
        console.error('Modal element not found');
    }
}

function hideBuyTickets() {
    if (modal) {
        modal.classList.remove('open');
    } else {
        console.error('Modal element not found');
    }
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

if (close) {
    close.addEventListener('click', hideBuyTickets);
    modal.addEventListener('click', hideBuyTickets);
} else {
    console.error('Close button not found');
}

if (modalContainer) {
    modalContainer.addEventListener('click', function(event){
        event.stopPropagation()
    })
} else {
    console.error('Close button not found');
}