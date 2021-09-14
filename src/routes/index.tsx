import Landing from '../pages/landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/notFound';
import { URL } from '../constants';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={URL.LANDING} component={Landing} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
