import React, { useState, Textarea } from "react";
import "./AIBar.scss";

import {
  Plus,
  SendHorizontal
} from "lucide-react";

export default function AIBar() {
    

  
  const [message, setMessage] = useState("");

  const handleSend = async () => {

    if (!message.trim()) return;

    console.log("MESSAGE:", message);
    try {
      const response = await fetch("http://localhost:8080/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      });
      const data = await response.json();
      console.log("AI RESPONSE:", data);
    } catch (error) {
      console.error("Error communicating with AI:", error);
    }


    // future AI logic here
    setMessage("");
  };

  return (
    <div className="ai-bar-wrapper">
         {/* <div className={`ai-bar-wrapper ${sidebarOpen ? "shrink" : ""}`}>  */}
      {/* PLUS BUTTON */}
      <button className="icon-btn">
        <Plus size={20} />
      </button>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Ask AI anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />

      {/* SEND BUTTON */}
      <button
        className="send-btn"
        onClick={handleSend}
      >
        <SendHorizontal size={18} />
      </button>

    </div>
  );
}
