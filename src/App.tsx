
import {BrowserRouter, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';


import { AuthProvider } from "./hooks/auth";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Route exact path='/' component={Login} />
    <Route exact path='/pages/home' component={Home} />
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
