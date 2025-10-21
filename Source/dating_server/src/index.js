//

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const userRoutes = require("./api/routes/UserRoute");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("🔌 Một client đã kết nối:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Client ngắt kết nối:", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`)
);
