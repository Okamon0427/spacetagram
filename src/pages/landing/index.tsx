import { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SpaceImages from './SpaceImages';
import Loading from '../../components/Loading';
import { API } from '../../constants';

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
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);

      const res = await fetch(
        `${API.MARS_PHOTOS}?sol=1000&page=1&api_key=${process.env.REACT_APP_NASA_KEY}`
      );
      const data = await res.json();

      setImages(data.photos);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <div className={classes.root}>
        {isError ? (
          <Typography variant="h5" component="h2">
            Something went wrong. Please try again.
          </Typography>
        ) : (
          <SpaceImages images={images} />
        )}
      </div>
    </Container>
  );
}

export default Landing;
