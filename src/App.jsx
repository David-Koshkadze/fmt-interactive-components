import { useState, useEffect } from "react";
import Comment from "./Comment";
import styled, { createGlobalStyle } from "styled-components";
import CardWrapper from "./components/CardWrapper";

const GlobalStyles = createGlobalStyle`
  :root {
    --Moderate-blue: hsl(238, 40%, 52%);
    --Soft-Red: hsl(358, 79%, 66%);
    --Light-grayish-blue: hsl(239, 57%, 85%);
    --Pale-red: hsl(357, 100%, 86%);
    --Dark-blue: hsl(212, 24%, 26%);
    --Grayish-Blue: hsl(211, 10%, 45%);
    --Light-gray: hsl(223, 19%, 93%);
    --Very-light-gray: hsl(228, 33%, 97%);
    --White: hsl(0, 0%, 100%);
  }
`;

const AppContainer = styled.div`
  background: var(--Light-gray);
  padding-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  border: 1px solid blue;
  max-width: 700px;
`;

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.currentUser);
        setComments(data.comments);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleAddComment(comment) {
    const newComment = {
      id: Date.now(),
      content: comment,
      createdAt: "1 month ago",
      score: 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
      replies: [],
    };

    setComments((prevComments) => [...prevComments, newComment]);
  }

  function handleVote(commentId, vote) {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        if (vote === "upvote") {
          return { ...comment, score: comment.score + 1 };
        } else if (vote === "downvote") {
          return { ...comment, score: comment.score - 1 };
        }
      }
      return comment;
    });

    setComments(updatedComments);
  }

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <CardContainer>
          {comments.map((comment) => (
            <CardWrapper
              key={comment.id}
              comment={comment}
              handleVote={handleVote}
            />
          ))}

          <Comment
            currentUser={currentUser}
            handleAddComment={handleAddComment}
          />
        </CardContainer>
      </AppContainer>
    </>
  );
}

export default App;
