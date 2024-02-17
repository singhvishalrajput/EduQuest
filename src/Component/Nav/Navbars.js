
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './Nav.css'
// import logoo from '../../Assets/logoo.png'
import { Link } from 'react-router-dom';
const Navbars = () => {
    return (
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand className='logo' >
        {/* <img src={ logoo } title='logo' alt='logo'/> */}
        <h2>EduQuest 📃 </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/"className='/'>Home</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="http://localhost:3000/summarize">Summmarize Notes</NavDropdown.Item> 
                <NavDropdown.Item href="#action/3.1">Generate Questions</NavDropdown.Item> 
                <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item> 

              </NavDropdown>
           <Nav.Link href="#home">Information</Nav.Link>
            <Nav.Link>
              <Link to="/login">
              <button className='contact'>Sign In/Up</button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
      
}
 
export default Navbars;