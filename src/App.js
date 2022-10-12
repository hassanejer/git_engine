import './App.css';
import Users from './components/users/Users';
import Navbar from './components/partials/Navbar';
import UserItem from './components/users/UserItem';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  

  return (

    <BrowserRouter>

      <div className="App">
        <Navbar />
        <div className="container mt-2">
          <Routes>
            <Route exact   path="/" element={<Users/>} ></Route>
            <Route    path="users/:login" element={<UserItem />} ></Route>
            <Route exact   path="/" element={<Users/>} ></Route>
            
          </Routes>
          
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
