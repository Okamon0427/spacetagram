import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

interface Props {
  image: any;
}

const SpaceImage = ({ image }: Props) => {
  const classes = useStyles();
  const [isLiked, toggleIsLiked] = useState(false);

  const handleFavorite = (): void => {
    toggleIsLiked(!isLiked);
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image.hdurl}
        title={image.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {image.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {image.date}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {image.explanation}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={handleFavorite}
          color={isLiked ? 'secondary' : 'default'}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default SpaceImage;