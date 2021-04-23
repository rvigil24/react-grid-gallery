import styled, { css } from "styled-components";

const Image = styled.div`
  width: 305px;
  height: 305px;
  background: no-repeat center/150% url(/img/${({ index }) => index}.jpg);
  ${({ inModal }) =>
    !inModal &&
    css`
      :hover {
        opacity: 0.7;
      }
    `}
  @media (max-width: 990px){
    background: no-repeat center url(/img/${({ index }) => index}.jpg);
    background-size: contain;
    width: 100%;
  }
`;

export default Image;
