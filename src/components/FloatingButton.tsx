import Fab from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    floatButton: {
      position: 'fixed',
      bottom: '40px',
      right: '40px'
    },
  }),
);

interface Props {
  handleScroll: () => void;
}

const FloatingButton= ({ handleScroll }: Props) => {
  const classes = useStyles();

  return (
    <Fab color="primary" aria-label="Scroll to top" onClick={handleScroll} className={classes.floatButton}>
      <ArrowUpwardIcon />
    </Fab>
  );
}

export default FloatingButton;
