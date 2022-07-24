import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

// export const ImageGalleryItem = ({ img, largeImg, tags, toggleOpenModal }) => {
//   return (
//     <Item className="gallery-item" onClick={() => toggleOpenModal(largeImg)}>
//       <Image src={`${img}`} alt={`${tags}`} />
//     </Item>
//   );
// };

// ImageGalleryItem.propTypes = {
//   img: PropTypes.string.isRequired,
//   largeImg: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
//   toggleOpenModal: PropTypes.func.isRequired,
// };

export const ImageGalleryItem = ({ id, webformatURL, tags, onCklick }) => {
  return (
    <Item>
      <Image
        id={id}
        className="gallery-item"
        src={webformatURL}
        alt={tags}
        onClick={onCklick}
      />
    </Item>
  );
};

ImageGalleryItem.propType = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onCklick: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
