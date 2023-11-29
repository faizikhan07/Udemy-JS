'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Opening Modal Window when clicking any button 'Show modal 1', 'Show modal 2' and 'Show modal 3'.
for (let i = 0; i < btnsOpenModal.length; i++) 
    btnsOpenModal[i].addEventListener('click', openModal);

// closing Modal Window when clicking on cross symbol on Modal.
btnCloseModal.addEventListener('click', closeModal);
// closing Modal Window when clicking on anywhere apart from Modal.
overlay.addEventListener('click', closeModal);

// Closing Modal Window when clicking 'Esc' button from keyboard.
document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

/**
 * -------------------------------------------
 * WORKING WITH CLASSES
 * -------------------------------------------
 */

