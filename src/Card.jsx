import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: #fff;
  border-radius: 6px;
  max-width: 700px;
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
`;

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

export default function Card() {
  return (
    <CardWrapper>
      <Voting>
        <VoteButton>+</VoteButton>
        <span>12</span>
        <VoteButton>-</VoteButton>
      </Voting>

      <FlexCol>
        <FlexRow justify="space-between" style={{ marginBottom: "1rem" }}>
          <FlexRow gap="1rem">
            <FlexRow gap="1rem">
              <img
                src="/images/avatars/image-amyrobson.png"
                style={{ height: "2rem", width: "2rem" }}
              />
              <TextAvatar>amyrobson</TextAvatar>
            </FlexRow>
            <TextGray>1 month ago</TextGray>
          </FlexRow>
          <FlexRow gap="0.5rem">
            <img src="/images/icon-reply.svg" />
            <TextReply>Reply</TextReply>
          </FlexRow>
        </FlexRow>

        <TextGray>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque vel
          deserunt temporibus eum veniam dolores accusamus modi aut similique
          nobis, saepe nulla error culpa expedita consequuntur assumenda?
        </TextGray>
      </FlexCol>
    </CardWrapper>
  );
}
