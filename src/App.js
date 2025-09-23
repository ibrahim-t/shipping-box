
import './App.css';

import { Route, Routes } from "react-router";
import { NavbarWidget } from './components/Navbar';
import AddBox from './components/AddBox';
import ListBox from './components/ListBox';
import HomePage from './components/HomePage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (<>
    <Container>
      <Row>
        <NavbarWidget />
      </Row>
      <Row>
        <Routes >
          <Route  path="/shipping-box/" element={<HomePage/>} />
          <Route path="shipping-box/addBox" element={<AddBox />} />
          <Route path="shipping-box/listbox" element={<ListBox />} />
        </Routes>
      </Row>
    </Container>
  </>

  );
}

export default App;
