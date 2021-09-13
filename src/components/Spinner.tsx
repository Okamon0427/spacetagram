import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
  }),
);

const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}

export default Spinner;
