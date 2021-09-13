import { CircularProgress, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    center: {
      display: 'flex',
      alignItems: 'center',
      height: 'calc(100vh - 64px)'
    },
    spinner: {
      textAlign: 'center'
    }
  }),
);

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <Grid container>
        <Grid item xs={12} className={classes.spinner}>
          <CircularProgress />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" align="center">
            Loading...
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Loading;
