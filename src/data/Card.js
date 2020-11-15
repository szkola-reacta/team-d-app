import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: ${(props) => `1px solid `};
  padding: 25px 12px 18px 12px;
  background: ${(props) => `linear-gradient(
    45deg, #000, #caffee
  )`};
`;

const Title = styled.h2`
  color: #fff;
  padding : 100px
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

// const Date = styled.div`
//   color: #ccc;
//   font-weight: 300;
//   margin: 6px 0;
//   @media (max-width: 500px) {
//     font-size: 0.8rem;
//   }
// `;

const Description = styled.p`
  color: #fff;
  padding: 20px;
  margin: auto;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

// const Actions = styled.div`
//   color: #333;
//   display: flex;
//   align-items: center;
//   svg {
//     transform: translateY(2px);
//     margin-right: 5px;
//   }
//   @media (max-width: 500px) {
//     flex-direction: column;
//     & button {
//       width: 100%;
//       margin-bottom: 4px;
//       font-size: 0.65rem;
//     }
//   }
// `;

// const Action = styled.button`
//   margin: 0 5px;
//   padding: 8px 14px;
//   background: rgba(155, 155, 155, 0.2);
//   color: #fff;
//   cursor: pointer;
//   border: 1px solid #fff;
//   outline: 0;
//   font-weight: 300;
//   :hover {
//     opacity: 0.8;
//   }
// `;

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: ${(props) => `1px solid #333`};
`;

const Card = ({ title, description, imgurl }) => (
  <StyledContainer>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <StyledPhoto src={imgurl} />
  </StyledContainer>
);

export default Card;
