import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <>
      <LoadMoreButton onClick={onClick}>Load more</LoadMoreButton>;
    </>
  );
};

Button.propType = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
