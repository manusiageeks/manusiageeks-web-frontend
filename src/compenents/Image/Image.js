import { Image } from 'react-bootstrap';
import { IMAGE_TYPES } from '../../constants/images';

const Picture = ({ value, type }) => {
  const imageProps = { src: value };
  const style = IMAGE_TYPES[type];
  if (!style) throw new Error(`Invalid image type: ${type}`);

  imageProps[style] = true;
  return <Image fluid {...imageProps} />;
};

export default Picture;
