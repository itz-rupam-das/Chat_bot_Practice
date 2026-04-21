import React from "react";
import ChatBox from "./ChatBox";
import ChatMessage from "./ChatMessage";

const App = () => {
  const chatMessages = [
    {
      message: "Hello there",
      sender: "user",
    },
    {
      message: "I am a bot",
      sender: "bot",
    },
    {
      message: "What is the weather today?",
      sender: "user",
    },
    {
      message: "It's raining outside",
      sender: "bot",
    },
  ];

  return (
    <>
      <ChatBox />
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
          />
        );
      })}
    </>
  );
};

export default App;
