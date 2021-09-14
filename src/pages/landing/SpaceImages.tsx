import { Grid } from '@material-ui/core';
import SpaceImage from './SpaceImage';

interface Props {
  images: any
}

const SpaceImages = ({ images }: Props ) => {
  return (
    <Grid container spacing={3}>
      {images.map((image: any, index: number) => {
        return (
          <Grid key={index} item xs={6} sm={3}>
            <SpaceImage image={image} />
          </Grid>
        );
      })}
    </Grid>
  )
}

export default SpaceImages;