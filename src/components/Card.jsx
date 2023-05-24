import React from "react";
import styled from "styled-components";

import { CardWrapper } from "../styles/CardStyles";

const Voting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.6rem;
  background-color: var(--Light-gray);
  border-radius: 8px;
  font-weight: 500;
  gap: 0.7rem;
  color: var(--Moderate-blue);
  height: max-content;
  width: 3.5rem;
`;

const VoteButton = styled.div`
  background: transparent;
  color: var(--Light-grayish-blue);
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || ""};
  gap: ${(props) => props.gap || "0"};
`;

const TextReply = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: var(--Moderate-blue);
`;

const TextAvatar = styled(TextReply)`
  color: var(--Dark-blue);
`;

const TextGray = styled.p`
  color: var(--Grayish-Blue);
  line-height: 1.4rem;
`;

export default function Card({ comment }) {
  return (
    <CardWrapper>
      <Voting>
        <VoteButton>+</VoteButton>
        <span>{comment.score}</span>
        <VoteButton>-</VoteButton>
      </Voting>

      <FlexCol>
        <FlexRow justify="space-between" style={{ marginBottom: "0.8rem" }}>
          <FlexRow gap="1rem">
            <FlexRow gap="1rem">
              <img
                src={comment.user.image.png}
                style={{ height: "2rem", width: "2rem" }}
              />
              <TextAvatar>{comment.user.username}</TextAvatar>
            </FlexRow>
            <TextGray>{comment.createdAt}</TextGray>
          </FlexRow>
          <FlexRow gap="0.5rem">
            <img src="/images/icon-reply.svg" />
            <TextReply>Reply</TextReply>
          </FlexRow>
        </FlexRow>

        <TextGray>{comment.content}</TextGray>
      </FlexCol>
    </CardWrapper>
  );
}
