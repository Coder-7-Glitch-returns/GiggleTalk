import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UserHeader from "./../header/UserHeader";

const mockUsers = [
  {
    id: 1,
    userName: "Muhammad Ahad",
    isActive: "1",
    profileImage: "/profile1.jpeg",
  },
  {
    id: 2,
    userName: "Shahbaz Junior",
    isActive: "0",
    profileImage: "",
  },
  {
    id: 3,
    userName: "John Doe",
    isActive: "1",
    profileImage: "/profile1.jpeg",
  },
  {
    id: 4,
    userName: "Faheem Shafique",
    isActive: "0",
    profileImage: "",
  },
];

function ChatWindow() {
  const { id } = useParams();
  const user = mockUsers.find((u) => u.id === Number(id));

  const [messages, setMessages] = useState([
    { id: 1, sender: "me", text: "Hey! How are you?" },
    { id: 2, sender: "user", text: "I'm good, thanks! How about you?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "me", text: input }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* ----- Header with user info ----- */}
      <UserHeader user={user} />

      {/* ----- Messages Area ----- */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-slate-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm shadow-sm ${
                msg.sender === "me"
                  ? "bg-slate-800 text-white rounded-br-none"
                  : "bg-white border border-slate-200 text-slate-700 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* ----- Input Bar ----- */}
      <form
        onSubmit={handleSend}
        className="flex items-center gap-2 p-3 border-t border-slate-200 bg-white"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;
