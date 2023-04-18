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
  padding: 0.4rem 0.7rem;
  background-color: var(--Light-gray);
  border-radius: 8px;
  font-weight: 500;
  gap: 0.4rem;
  color: var(--Moderate-blue);
`;

const VoteButton = styled.div`
  background: transparent;
  color: var(--Light-grayish-blue);
  font-weight: 700;
  font-size: 17px;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
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
        <FlexRow justify="between">
          <FlexRow>
            <div>Avatar</div>
            <span>1 month ago</span>
          </FlexRow>
          <div>Reply</div>
        </FlexRow>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque vel
          deserunt temporibus eum veniam dolores accusamus modi aut similique
          nobis, saepe nulla error culpa expedita consequuntur assumenda?
        </p>
      </FlexCol>
    </CardWrapper>
  );
}
