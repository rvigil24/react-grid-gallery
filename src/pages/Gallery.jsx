import { useLocation, Link, useRouteMatch } from "react-router-dom";
import styled, { css } from "styled-components";

//data
import { IMAGES } from "../data";

//components
import { UserGrid } from "../components/UserGrid";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  grid-auto-rows: 305px;
  gap: 15px;
  ${({ cascade }) =>
    cascade &&
    css`
      grid-auto-rows: 200px;
      grid-gap: 5px;
    `}
  @media (max-width: 990px) {
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(33vw);
  }
`;

const LinkGridStyled = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const TabLinkStyled = styled(Link)`
  text-decoration: none;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 3px;
  ${({ selected }) => selected && "color: black"}
`;

const ImageLink = styled(Link)`
  background: no-repeat center/150% url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  :hover {
    opacity: 0.7;
  }
  ${({ cascade }) =>
    cascade &&
    css`
      &:nth-of-type(2n) {
        grid-row-start: span 2;
      }
    `}
`;

const Gallery = () => {
  const location = useLocation();
  const { url } = useRouteMatch();

  const galleryCascade = location.search === "?type=cascade";

  return (
    <div>
      <UserGrid />
      <LinkGridStyled>
        <TabLinkStyled selected={!galleryCascade} to={`${url}`}>
          square
        </TabLinkStyled>
        <TabLinkStyled
          selected={galleryCascade}
          to={{ pathname: `${url}`, search: "?type=cascade" }}
        >
          cascade
        </TabLinkStyled>
      </LinkGridStyled>
      <PhotoGrid cascade={galleryCascade}>
        {IMAGES.map((i) => (
          <>
            <ImageLink
              cascade={galleryCascade}
              key={i.id}
              to={{
                pathname: `/img/${i.id}`,
                state: { background: location },
              }}
              imgUrl={i.url}
            />
          </>
        ))}
      </PhotoGrid>
    </div>
  );
};

export default Gallery;
