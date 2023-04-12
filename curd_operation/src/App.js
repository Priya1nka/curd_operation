
import './App.css';
import { BrowserRouter as Router, Route,Link, Routes } from "react-router-dom";
import RegistrationForm from './components/RegistrationForm';
import TableData from './components/TableData';
import EditUser from './components/EditUser';
//import TableData from './components/TableData';

function App() {
  return (
    <>
    <Router>
     <ul className='bg-dark  mt-3'>
      <li>
        <Link to="/">Curd Application</Link>
      </li>
      <li>
        <Link to="/registrationform">AddUser</Link>
      </li>
      <li>
        <Link to="/alluser">AllUser</Link>
      </li>
     </ul>
    <Routes>
    <Route exact path='/registrationform' element={<RegistrationForm/>}></Route>
    <Route exact path='/alluser' element={<TableData/>}></Route>
    <Route exact path='/edit/:id' element={<EditUser/>}></Route>

   </Routes>
    

    </Router>
          
    </>
  );
}

export default App;
