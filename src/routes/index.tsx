import Landing from '../pages/landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/notFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
