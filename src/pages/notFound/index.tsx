import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(2),
    },
  })
);

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant="h4">
          Page Not Found
        </Typography>
        <Link to='/'>
          <Button color="primary">
            Go to landing page
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default NotFound;