import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap';

const ListBox = () => {

    const list = useSelector((state) => {
        return state.shippingList
    });

    return (
        <Container style={{ marginTop: 40 }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name </th>
                        <th>Weight (KGs)</th>
                        <th>Box colour </th>
                        <th>Destination Country</th>
                        <th>Shipping cost(INR)</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.recieverName}</td>
                            <td>{item.weight}</td>
                            <td>
                                <Form.Control
                                    readOnly
                                    type="color"
                                    id="exampleColorInput"
                                    defaultValue={item.color}
                                />
                            </td>
                            <td>{item.destinationCountry}</td>
                            <td>{item.calculatedCost}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Container>
    );
}

export default ListBox;