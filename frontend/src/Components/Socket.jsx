import { io } from "socket.io-client";

let socket;

export const connectSocket = () => {
  const token = localStorage.getItem("token");
  if (token) {
    socket = io(`${import.meta.env.VITE_BASE_URL}`);
    socket.emit("setSocketId", { token: token });
  }
};

connectSocket()

export default socket;
