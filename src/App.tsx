import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
