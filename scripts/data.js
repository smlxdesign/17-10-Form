export const messages = loadFromStorage() || [];

export function sendMessage(fullName, email, subject, message) {
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

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('messages', JSON.stringify(messages));
}

function loadFromStorage() {
  return JSON.parse(localStorage.getItem('messages'));
}
