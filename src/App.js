import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Registration from './Components/Registration'
import Dashboard from './Components/Dashboard'
import Signin from './Components/Signin';
import Events from './Components/Events';
function App() {
  return (
    <Router>
      <Route path='/register'>
          <Registration />
      </Route>
      <Route path='/dashboard'>
          <Dashboard />
      </Route>
    </Router>
  );
}

export default App;
