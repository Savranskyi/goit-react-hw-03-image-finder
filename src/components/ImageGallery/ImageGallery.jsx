import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ imgArr, onClick }) => {
  return (
    <List>
      {imgArr.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          onCklick={onClick}
          key={id}
        />
      ))}
    </List>
  );
};

ImageGallery.protoType = {
  imgArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
