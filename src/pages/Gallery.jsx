import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

//data
import { IMAGES } from "../data";

//components
import Image from "../components/Image";

const PhotoGrid = styled.div`
  display:grid;
  grid-template-columns: repeate(3, 305px);
`;

const Gallery = () => {
  let location = useLocation();

  return (
    <PhotoGrid>
      {IMAGES.map((i) => (
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            // This is the trick! This link sets
            // the `background` in location state.
            state: { background: location },
          }}
        >
          <LazyLoad>
            <Image index={i.id} />
          </LazyLoad>

        </Link>
      ))}
    </PhotoGrid>
  );
};

export default Gallery;
