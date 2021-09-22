import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { CurrentCompanyCSV } from "./pages/CurrentCompanyCSV";

import { AuthProvider } from "./hooks/auth";
import { StateProvider } from "./hooks/state";
import { CurrentCompanyXML } from "./pages/CurrentCompanyXML";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route exact path="/" component={Login} />
        <StateProvider>
          <Route path="/pages/home" component={Home} />
          <Route path="/pages/currentCompanyCSV" component={CurrentCompanyCSV} />
          <Route path="/pages/currentCompanyXML" component={CurrentCompanyXML} />
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
