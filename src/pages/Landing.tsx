import { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from './Image';

const initialImages = [
  {
    title: 'Hello',
    explanation: 'I am good',
    hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg'
  },
  {
    title: 'Good Afternoon',
    explanation: 'I am so-so',
    hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg'
  },
  {
    title: 'Good Evening',
    explanation: 'I am exited',
    hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg'
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: 16
    },
  }),
);

function Landing() {
  const classes = useStyles();
  const [images, setImages] = useState(initialImages);

  useEffect(() => {
    
  }, []);

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {images.map((image, index) => {
            return (
              <Grid key={index} item xs={6} sm={3}>
                <Image image={image} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default Landing;
