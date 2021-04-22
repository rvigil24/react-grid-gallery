import { useParams } from "react-router-dom";
import LazyLoad from "react-lazyload";

//data
import { IMAGES } from "../data";

//components
import Image from "../components/Image";

const ImageView = () => {
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10) - 1];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <LazyLoad>
        <Image index={image.id} />
      </LazyLoad>
    </div>
  );
};

export default ImageView;
