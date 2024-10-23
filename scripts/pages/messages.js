import { messages } from '../data.js';

function renderTable() {
  const table = document.querySelector('#messages-table');

  let tableHtml = `
    <li class="grid grid-cols-5 gap-2">
      <div class="font-bold">Date</div>
      <div class="font-bold">From</div>
      <div class="font-bold">Subject</div>
      <div class="font-bold">Message</div>
    </li>
  `;

  messages.forEach((e) => {
    let formattedDate = new Date(e.date);
    formattedDate = formattedDate.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
    });

    tableHtml += `
      <li class="grid grid-cols-5 gap-2">
        <div class="text-sm truncate ">${formattedDate}</div>
        <div class="text-sm truncate">${e.fullName} (${e.email})</div>
        <div class="text-sm truncate">${e.subject}</div>
        <div class="text-sm truncate">${e.message}</div>
        <a href="./message-details.html?id=${e.id}"><i class="ph ph-arrow-right text-sm"></i></a>
      </li>
    `;
  });

  table.innerHTML = tableHtml;
}

renderTable();

const refreshButton = document.querySelector('#refresh-button');

refreshButton.addEventListener('click', () => {
  location.reload();
});
