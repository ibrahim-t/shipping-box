import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export const NavbarWidget = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Shipping Box App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link type='' onClick={e => { e.preventDefault(); navigate("/shipping-box") }}  >

              <Button variant=''>
                Home
              </Button>
            </Nav.Link>
            <Nav.Link onClick={e => { e.preventDefault(); navigate("/shipping-box/addBox") }} >
              <Button variant=''>
                Add Box
              </Button>
            </Nav.Link>
            <Nav.Link onClick={e => { e.preventDefault(); navigate("/shipping-box/listbox") }} >
              <Button variant=''>
                View Boxes
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}







// export const Navbar = () => {
//     return (
//         <nav>   
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/addBox">Add Box</Link>
//                 </li>
//                 <li>
//                     <Link to="/listbox">View Boxes</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }