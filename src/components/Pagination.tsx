import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

interface Props {
  setCurrentPage: (value: number) => void;
  totalPages: number;
}

const BasicPagination = ({ setCurrentPage, totalPages }: Props) => {  
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scroll(0, 0);
  };

  return (
    <div className={classes.root}>
      <Pagination count={totalPages} color="primary" onChange={handleChange} />
    </div>
  );
}

export default BasicPagination;
