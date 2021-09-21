import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { COLOR } from '../utils/constants';

const theme = createTheme({
  palette: {
    primary: {
      main: COLOR.PRIMARY,
    },
    secondary: {
      main: COLOR.SECONDARY,
    },
  },
});

interface Props {
  children: JSX.Element,
};

const Color = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default Color