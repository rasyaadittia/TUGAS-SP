const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("Client terhubung:", socket.id);

  socket.on("chat-message", (data) => {
    io.emit("chat-message", {
      username: data.username,
      message: data.message,
      time: new Date().toLocaleTimeString("id-ID"),
    });
  });

  socket.on("disconnect", () => {
    console.log("Client terputus:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
