import React from "react";
import styled from "styled-components";

import { ProfileImage } from "./ProfileImage";

const UserStyledGrid = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  display: grid;
  justify-content: center;
  grid-template-areas:
    "photo name"
    "photo label"
    "photo description";
`;

const Photo = styled.div`
  grid-area: photo;
`;
const Name = styled.div`
  grid-area: name;
  font-size: 35px;
`;
const Label = styled.div`
  grid-area: label;
`;
const Description = styled.div`
  grid-area: description;
  max-width: 400px;
`;

export const UserGrid = () => {
  return (
    <UserStyledGrid>
      <Photo>
        <ProfileImage />
      </Photo>
      <Name>React GridGallery</Name>
      <Label>
        <strong>500</strong> Followers
      </Label>
      <Description>
        My name is Ruben Vigil, I'm a developer and welcome to React GridGallery. This is a gallery made with React, React-Router and styled components. 💻👨
      </Description>
    </UserStyledGrid>
  );
};

export const MiniUserGrid = styled.div`
  display: grid;
  justify-content: left;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 10px;
`;