import { messages } from './data.js';

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
});

function sendMessage(fullName, email, subject, message) {
  const id = self.crypto.randomUUID();
  let date = new Date();
  date = date.toISOString();

  messages.push({
    id,
    date,
    fullName,
    email,
    subject,
    message,
  });
  console.log(messages);
}
