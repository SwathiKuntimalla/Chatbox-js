const chatContainer = document.getElementById('chat');
const userInput = document.getElementById('input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', handleUserInput);

function handleUserInput() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  appendMessage('user', userMessage);
  setTimeout(computerResponse,30000);
}

function computerResponse() {
  const responses = [
    "Hello! How can I help you?",
    "What's on your mind?",
    "Nice to meet you!",
    "I'm a chatbot. Ask me anything!",
    "How can I assist you today?",
    "Sorry, I didn't understand that.",
    "Good Morning",
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  const computerMessage = responses[randomIndex];
  appendMessage('computer', computerMessage);
}

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender === 'user' ? 'user-message' : 'computer-message');
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
  userInput.value = ''; 
  userInput.focus(); 
}
