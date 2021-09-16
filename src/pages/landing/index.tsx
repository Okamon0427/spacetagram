import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SpaceImages from './SpaceImages';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import Error from '../../components/Error';
import { API } from '../../utils/constants';
import { calculatePagination } from '../../utils/functions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      '& .MuiPagination-ul': {
        justifyContent: 'center'
      }
    },
  }),
);

const Landing = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [imagesPerPage, setImagesPerPage] = useState(40);

  const [currentImages, totalPages] = calculatePagination(currentPage, imagesPerPage, images);

  const fetchData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);

      const res = await fetch(
        `${API.MARS_PHOTOS}?sol=1000&api_key=${process.env.REACT_APP_NASA_KEY}`
      );
      const data = await res.json();

      console.log(data) // delete later

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
        {!isError && images?.length > 0 ? (
          <>
            <SpaceImages images={currentImages} />
            <Pagination setCurrentPage={setCurrentPage} totalPages={totalPages} />
          </>
        ) : (
          <Error />
        )}
      </div>
    </Container>
  );
}

export default Landing;
