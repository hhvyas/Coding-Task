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
      <Route path='/register'>
          <Registration />
      </Route>
      <Route path='/dashboard'>
          <Dashboard />
      </Route>
      <Route path='/events'>
          <Events />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
