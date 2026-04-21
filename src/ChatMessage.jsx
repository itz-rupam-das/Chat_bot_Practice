import React from "react";

const ChatMessage = ({ message, sender }) => {
  return (
    <div>
      {sender === "bot" && (
        <img
          src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?semt=ais_hybrid&w=740&q=80"
          width={80}
        />
      )}
      {message}
      {sender === "user" && (
        <img
          src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
          width={80}
        />
      )}
    </div>
  );
};

export default ChatMessage;
