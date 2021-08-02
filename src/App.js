import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Registration from './Components/Registration'
import Dashboard from './Components/Dashboard'
import Signin from './Components/Signin';
import Events from './Components/Events';
function App() {
  return (
    <Router>
    <Switch>
      <Route path='/login'>
          <Signin />
      </Route>
      <Route path='/dashboard'>
          <Dashboard />
      </Route>
      <Route path='/events'>
        <Events />
      </Route>
      <Route path='/register'>
          <Registration />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
