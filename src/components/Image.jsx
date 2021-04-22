import styled from "styled-components";

const Image = styled.div`
  width: 400px;
  height: 400px;
  background: no-repeat center/150% url(/img/${({ index }) => index}.jpg);
`;

export default Image;
