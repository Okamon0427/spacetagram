import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
