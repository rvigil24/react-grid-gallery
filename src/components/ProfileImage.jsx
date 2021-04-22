import React from "react";
import styled, {css} from "styled-components";

export const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  background: no-repeat center/170% url(/img/2.jpg);
  border-radius: 100px;
  margin:40px;
  ${({mini}) => mini && css`
    width: 50px;
    height: 50px;
    margin: 5px;
  `}
`;
