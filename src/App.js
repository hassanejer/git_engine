import './App.css';
import Users from './components/users/Users';
import Navbar from './components/partials/Navbar';
import UserItem from './components/users/UserItem';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

    <Router>

      <div className="App">
        <Navbar />
        <div className="container mt-2">
          <Routes>
            <Route exact   path="/users" element={<Users/>} ></Route>
            <Route exact   path="/users/:login" element={<UserItem/>} ></Route>
            <Route exact   path="/" element={<Users/>} ></Route>
            
          </Routes>
          
        </div>
        
      </div>
    </Router>
  );
}

export default App;
