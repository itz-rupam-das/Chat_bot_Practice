import React from "react";
import ChatBox from "./ChatBox";
import ChatMessage from "./ChatMessage";

const App = () => {
  return (
    <>
      <ChatBox />
      <ChatMessage message="Hello there" sender="user" />
      <ChatMessage message="Iam a bot" sender="bot" />
      <ChatMessage message="What is the weather today?" sender="user" />
      <ChatMessage message="It's raining outside" sender="bot" />
    </>
  );
};

export default App;
