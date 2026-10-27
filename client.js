const socket = io();

const form = document.getElementById("chatForm");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");

socket.on("connect", () => {
  console.log("Terhubung ke server!");
});

socket.on("chat-message", (data) => {
  const item = document.createElement("p");
  item.textContent = `[${data.time}] ${data.username}: ${data.message}`;

  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim() || "Pengguna";
  const message = messageInput.value.trim();

  if (message === "") return;

  socket.emit("chat-message", {
    username: username,
    message: message,
  });

  messageInput.value = "";
});
