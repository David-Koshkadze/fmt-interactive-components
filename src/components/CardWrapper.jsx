import React from "react";
import styled from "styled-components";

import Card from "./Card";

const ReplyDiv = styled.div`
  border-left: 1px solid green;
`

export default function CardWrapper({ comment }) {
  return (
    <div>
      <Card comment={comment} />
      {comment.replies ? (
        <ReplyDiv>
          {comment.replies.map((comment) => (
            <Card key={comment.id} comment={comment} />
          ))}
        </ReplyDiv>
      ) : null}
    </div>
  );
}
