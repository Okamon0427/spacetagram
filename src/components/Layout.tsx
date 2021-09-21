import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import NavBar from './NavBar';
import { NAVBAR_HEIGHT, COLOR } from '../utils/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: COLOR.BACKGROUND
    },
    belowNavBar: {
      marginTop: NAVBAR_HEIGHT.MOBILE,
      "@media (min-width: 600px)": {
        marginTop: NAVBAR_HEIGHT.PC
      }
    }
  }),
);

interface Props {
  children: JSX.Element,
};

const Layout = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.belowNavBar}>
        {children}
      </div>
    </div>
  );
}

export default Layout;