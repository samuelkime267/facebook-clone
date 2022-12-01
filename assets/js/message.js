'use strict';
const messageContainerModal = document.querySelector('.message-container');
const usersHolderContainer = document.querySelector('.users-holder-container');
const btnCloseMessageModal = document.querySelector('#close-message-modal');

usersHolderContainer.addEventListener('click', e => {
  if (!e.target.closest('a') && e.target.closest('.user')) {
    messageContainerModal.classList.remove('one-k-display-none');
  }
});
btnCloseMessageModal.addEventListener('click', () => {
  messageContainerModal.classList.add('one-k-display-none');
});
