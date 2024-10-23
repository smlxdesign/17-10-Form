import { getMessageById } from '../data.js';

const params = new URLSearchParams(document.location.search);
const id = params.get('id');

const message = getMessageById(id);
if (message) {
  renderMessage();
} else {
  document.location.href = 'messages.html';
}

function renderMessage() {
  const page = document.querySelector('main');

  let formattedDate = new Date(message.date);
  formattedDate = formattedDate.toLocaleDateString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    day: 'numeric',
    month: 'short',
  });

  let newHtml = '';

  newHtml += `
    <h1 class="text-2xl font-bold text-gray-950">${message.subject}</h1>
    <span class="text-gray-800">${formattedDate} · ${message.fullName} [${message.email}]</span>
    <p class="mt-2 text-gray-800">${message.message}</p>
    <a href="mailto:?subject=Re%3A%20${message.subject}" class="button primary">Respond via email</a>
  `;

  page.innerHTML = newHtml;
  document.title = `Message: ${message.subject}`;
}
