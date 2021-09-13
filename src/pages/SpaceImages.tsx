import { Grid } from '@material-ui/core';
import SpaceImage from './SpaceImage';

interface Props {
  images: any
}

const SpaceImages = ({ images }: Props ) => {
  return (
    images.map((image: any, index: number) => {
      return (
        <Grid key={index} item xs={6} sm={3}>
          <SpaceImage image={image} />
        </Grid>
      );
    })
  )
}

export default SpaceImages;