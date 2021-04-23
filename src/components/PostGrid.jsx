import React from "react";
import styled from "styled-components";

export const PostGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 990px){
    grid-template-columns: 1fr;
  }
`;

export const InfoGridStyled = styled.div`
  padding: 5px;
  display: grid;
  grid-template-rows: 90px auto 40px;
`;

