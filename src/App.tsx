
import {BrowserRouter, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Route exact path='/' component={Login} />
    <Route exact path='/pages/Home' component={Home} />
    </BrowserRouter>
  );
}

export default App;
