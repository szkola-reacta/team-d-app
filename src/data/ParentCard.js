import React from "react";
import styled from "styled-components";
import { FaCommentAlt, FaThumbsUp, FaRegEye } from "react-icons/fa";
import Card from "./Card";

const StyledRoot = styled.div`
  padding: 5px 12px;
`;

const StyledContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
`;

const ParentCard = (props) => {
  //   const date = new Date().toLocaleDateString();

  const onCommentClick = () => alert("You clicked comments");
  const onLikesClick = () => alert("You clicked Likes comments");
  const onViewsClick = () => alert("You clicked Views comments");

  const buttons = [
    {
      label: (
        <>
          <FaCommentAlt /> 0 Comments
        </>
      ),
      onClick: onCommentClick,
    },
    {
      label: (
        <>
          <FaThumbsUp /> 242 Likes
        </>
      ),
      onClick: onLikesClick,
    },
    {
      label: (
        <>
          <FaRegEye /> 187288 Views
        </>
      ),
      onClick: onViewsClick,
    },
  ];
  console.log("Parent ", props.title);
  console.log("url:", process.env.PUBLIC_URL);
  return (
    <StyledRoot>
      <StyledContainer>
        <Card
          title={props.title}
          //   date={date}
          description={props.description}
          imgurl={props.imgurl}
          actions={buttons}
        />
      </StyledContainer>
    </StyledRoot>
  );
};

export default ParentCard;
