import React from "react";
import styled from "styled-components";

import Card from "./Card";

const ReplyDiv = styled.div`
  border-left: 2px solid hsl(223, 17%, 79%);
  margin-left: 2rem;
  padding-left: 2rem;
`;

export default function CardWrapper({ comment, handleVote }) {
  return (
    <div>
      <Card comment={comment} handleVote={handleVote} />
      {comment.replies ? (
        <ReplyDiv>
          {comment.replies.map((comment) => (
            <Card key={comment.id} comment={comment} handleVote={handleVote} />
          ))}
        </ReplyDiv>
      ) : null}
    </div>
  );
}
