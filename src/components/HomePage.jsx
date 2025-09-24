
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <Container  style={{marginTop:100}}>
            <Row className="justify-content-md-center "  style={{border: '1px solid #ccc',paddingTop:30, borderRadius: '5px',backgroundColor:"#f8f9fa"}} >
                <Col md={"6"} sm={"12"} lg={"3"}  style={{textAlign:"center",marginBottom:50}} >
                    <Button size='lg'  color='' style={{padding:60,backgroundColor:"#007bff"}}  variant='primary' onClick={e=>{e.preventDefault();navigate("/shipping-box/addBox") }} >
                        Add Box
                    </Button>
                </Col>
                <Col  md={"6"} sm={"12"} lg={"3"}  style={{textAlign:"center", marginBottom:30}}>
                <Button style={{padding:60,backgroundColor:"#6c757d"}} color=''  variant='primary' onClick={e=>{e.preventDefault();navigate("/shipping-box/listbox") }} >
                        View  Boxes
                    </Button></Col>
            </Row>
        </Container>

    );
}

export default HomePage;