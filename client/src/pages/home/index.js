import { io } from 'socket.io-client';
import { useEffect, useState } from 'react'

const socket = io.connect("http://localhost:8000");

function App() {
  const [ message, setMessage] = useState("");
  const [ messageReceived, setMessageReceived ] = useState("");
  const sendMessage = () => {
     socket.emit("chat message", {message});
   };

   useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
   }, [socket]);

  return (
    <div className="App">
      <input placeholder="Message..." onChange={(e) => {
        setMessage(e.target.value);
      }} />
      <button onClick={sendMessage} className=" bg-red-600">Send Message</button>
      <h1 className="text-white">Message: {messageReceived}</h1>
    </div>
  )
}

export default App