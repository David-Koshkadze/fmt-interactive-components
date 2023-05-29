import React, { useState } from "react";
import styled from "styled-components";

import { CardWrapper } from "./styles/CardStyles";

const Flex = styled.div`
  display: flex;
  align-items: space-between;
`;

const SendButton = styled.button`
  background-color: var(--Moderate-blue);
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  padding: 0.9rem 1.7rem;
  cursor: pointer;
`;

const Avatar = styled.img`
  src: ${(props) => props.src};
  width: 2.5rem;
  height: 2.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--Light-gray);
  border-radius: 8px;
  font-family: "Rubik";
  background: var(--White);
  font-size: 15px;
  outline: none;
  &:focus {
    outline: 1px solid var(--Moderate-blue);
  }
  font-family: "Rubik";
`;

export default function Comment({ currentUser, handleAddComment }) {
  const [comment, setComment] = useState("");

  function addComment() {
    handleAddComment(comment);
    setComment("");
  }

  return (
    <CardWrapper
      style={{
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Avatar src={currentUser?.image?.webp} />
      <TextArea
        placeholder="Add a comment..."
        rows="3"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></TextArea>
      <SendButton onClick={addComment}>Send</SendButton>
    </CardWrapper>
  );
}
