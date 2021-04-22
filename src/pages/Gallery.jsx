import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

//data
import { IMAGES } from "../data";

//components
import Image from "../components/Image";
import { UserGrid } from "../components/UserGrid";

const PhotoGrid = styled.div`
  width: 950px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 305px);
  gap: 20px;
`;

const Gallery = () => {
  let location = useLocation();

  return (
    <div>
      <UserGrid />
      <PhotoGrid>
        {IMAGES.map((i) => (
          <Link
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              state: { background: location },
            }}
          >
            <LazyLoad height={305}>
              <Image index={i.id} />
            </LazyLoad>
          </Link>
        ))}
      </PhotoGrid>
    </div>
  );
};

export default Gallery;
