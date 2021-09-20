
import {BrowserRouter, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { CurrentCompany } from './pages/CurrentCompany';  


import { AuthProvider } from "./hooks/auth";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Route exact path='/' component={Login} />
    <Route  path='/pages/home' component={Home} />
    <Route  path='/pages/currentCompany' component={CurrentCompany} />
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
