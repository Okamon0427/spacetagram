import { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SpaceImages from './SpaceImages';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing(2),
    },
  }),
);

const Landing = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${process.env.REACT_APP_NASA_KEY}`
      );
      const data = await res.json();

      setIsLoading(false);
      setImages(data.photos);
  
      console.log(data.photos); // delete later
    } catch (err) {
      // Write some codes
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <SpaceImages images={images} />
        </Grid>
      </div>
    </Container>
  );
}

export default Landing;
