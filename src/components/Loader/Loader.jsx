import { Grid } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export function Loader() {
  return (
    <Wrapper>
      <Grid height="320" width="320" color="#3f51b5" ariaLabel="loading" />
    </Wrapper>
  );
}
