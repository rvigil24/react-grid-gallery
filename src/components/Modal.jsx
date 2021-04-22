import { useHistory, useParams } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

//data
import { IMAGES } from "../data";

//components
import Image from "./Image";
import { PostGridStyled, InfoGridStyled } from "./PostGrid";
import { MiniUserGrid } from "./UserGrid";
import { ProfileImage } from "./ProfileImage";

//styled components
const OverFlowHidden = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const ModalStyled = styled.div`
  position: absolute;
  background: #fff;
  top: ${({ top }) => {
    console.log(top);
    return top;
  }}px;
  left: 25%;
  right: 25%;
  border: 2px solid #444;
`;

const Modal = () => {
  let history = useHistory();
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10) - 1];

  if (!image) return null;

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: "5000px",
        background: "rgba(0, 0, 0, 0.75)",
      }}
    >
      <ModalStyled top={window.scrollY + window.innerHeight / 2 - 250}>
        <PostGridStyled>
          <Image inModal index={image.id} />
          <InfoGridStyled>
            <MiniUserGrid>
              <ProfileImage mini />
              <h4>Grid Gallery</h4>
            </MiniUserGrid>
            <h3>{image.title}</h3>
            <div>Comments</div>
            <div>45 Likes</div>
          </InfoGridStyled>
          <OverFlowHidden />
        </PostGridStyled>
      </ModalStyled>
    </div>
  );
};

export default Modal;
