import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo192.png';
import{Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Home} from './components/Home';
import {Calender} from './components/Calender';
import {Notes} from './components/Notes';
//import {DailyCheckins} from './components/DailyCheckins';
import {Reminder} from './components/Reminder';
import {Habits} from './components/Habits';
import {Login} from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar bg="bkcolor" variant="dark"
    sticky="top" expand="lg">
      <Container>
      <Navbar.Brand >
        <img src={logo} width="40px" height="40px" />{''}
        Clockwise
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav className="me-auto">
        <Nav.Link as={Link} to ="/Home">Home</Nav.Link>
        <Nav.Link as={Link} to ="/Calender">Calender</Nav.Link>
        <Nav.Link as={Link} to ="/Notes">Notes</Nav.Link>
       
        <Nav.Link as={Link} to ="/Reminder">Reminder</Nav.Link>
        <Nav.Link as={Link} to ="/Habits">Habits</Nav.Link>
        <Nav.Link as={Link} to ="/Login">Login</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Calender" element={<Calender/>}/>
        <Route path="/Notes" element={<Notes/>}/>
        
        <Route path="/Reminder" element={<Reminder/>}/>
        <Route path="/Habits" element={<Habits/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
