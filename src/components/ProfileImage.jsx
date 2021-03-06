import React from "react";
import styled, { css } from "styled-components";

export const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  background: no-repeat center/170%
    url("https://res.cloudinary.com/dfrcck8j7/image/upload/v1619212384/gridfolio-react/2_we0noz.jpg");
  border-radius: 100px;
  margin: 40px;
  ${({ mini }) =>
    mini &&
    css`
      width: 50px;
      height: 50px;
      margin: 5px;
      @media (max-width: 990px) {
        margin: 5px;
        width: 50px;
        height: 50px;
        border-radius: 50px;
      }
    `}
`;
