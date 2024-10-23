import { sendMessage } from '.././data/messages.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const subjectInput = document.querySelector('#subject');
  const messageInput = document.querySelector('#message');

  sendMessage(
    nameInput.value,
    emailInput.value,
    subjectInput.value,
    messageInput.value,
  );

  nameInput.value = '';
  emailInput.value = '';
  subjectInput.value = '';
  messageInput.value = '';
});
