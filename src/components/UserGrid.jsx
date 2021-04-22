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
      <Name>Name</Name>
      <Label>
        <strong>500</strong> Followers
      </Label>
      <Description>
        Drinking vinegar woke trust fund, occupy 8-bit kogi taxidermy pop-up
        helvetica photo booth. Polaroid health goth lomo af, tumblr hexagon
        small batch hammock fashion axe bespoke keytar skateboard schlitz.
      </Description>
    </UserStyledGrid>
  );
};
