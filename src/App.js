import Login from "./Components/Authentication/Login";
import Homepage from "./Pages/HomePage";
import Home from "./Pages/HomePage";
import Auth from "./Pages/Authentication";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import SignUp from "./Components/Authentication/SignUp";
function App() {
  return (
    
      <Router>
        <div>
          <Home></Home>
        </div>
      </Router>

    // </div>
  );
}

export default App;
