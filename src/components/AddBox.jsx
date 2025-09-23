
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
// import { setItemToLocalStorage } from '../utils';
import axios from 'axios';
import LoadingIndicator from './LoadingIndicator';
import { useDispatch } from 'react-redux'
import { onAddBox } from '../slices/shippingboxSlice';
import { Alert } from 'react-bootstrap';
const mockCountry = [
    { key: "Sweden", value: "7.35" },
    { key: "China", value: "11.53" },
    { key: "Brazil", value: "15.63" },
    { key: "Australia", value: "50.09" }];

const initalBoxDetails = {
    recieverName: '',
    weight: 0,
    color: '',
    destinationCountry: ''
}
const initalValidationStatus = {
    recieverName: false,
    weight: false,
    color: false,
    destinationCountry: false
}

const AddBox = () => {
    const calculatedCostRef = React.useRef(null);
    const dispatch = useDispatch();

    const [boxDetails, setBoxDetails] = React.useState(initalBoxDetails);
    const [isWeightNegative, setIsWeightNegative] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(initalValidationStatus);
    const [showSuccess, toggleSuccess] = React.useState(false);


    // useEffect(() => { // used to fetch data from api
    // mock api call
    // using axios to fetch data from mock api 
    // using async await to fetch data
    // const fetchUserList = async () => {
    //     const response = await axios.get('https://my-json-server.typicode.com/ibrahim-t/shipping-box');
    //     const data = await response.json();
    //     console.log(data);
    // }
    // fetchUserList();  
    // }, []);

    const isFormValid = () => {
        return Boolean(boxDetails.recieverName && boxDetails.weight > 0 && boxDetails.color && boxDetails.destinationCountry);
    }
    const onSubmit = () => {
        if (isFormValid()) {
            console.log(boxDetails);
            console.log(calculatedCostRef.current.value);

            // Saving to local storage
            // simualte a delay in storing data instead of calling api 
            const storeData = new Promise((resolve, reject) => {

                setTimeout(() => {
                    boxDetails.calculatedCost = calculatedCostRef.current.value;
                    dispatch(onAddBox(boxDetails));
                    resolve('Data stored successfully');
                    // setItemToLocalStorage('boxDetails', boxDetails);
                }, 2000);
            });
            try {
                setLoading(true);
                storeData.then((msg) => {
                    console.log(msg);
                    toggleSuccess(true);
                    setTimeout(() => {
                        toggleSuccess(false);
                    }, 3000); // hide success message after 3 seconds
                    setBoxDetails(initalBoxDetails);
                    setIsError(initalValidationStatus);
                    setLoading(false);
                });
            } catch (er) {
                setLoading(false);
                console.error("Error storing data", er);
            }

        } else {
            setIsError({
                recieverName: !boxDetails.recieverName,
                weight: !(boxDetails.weight > 0),
                color: !boxDetails.color,
                destinationCountry: !boxDetails.destinationCountry
            });
        }
    }

    const getCalcualtedCost = () => {
        if (boxDetails.weight > 0 && boxDetails.destinationCountry) {
            const country = mockCountry.find(c => c.key === boxDetails.destinationCountry);
            if (country) {
                return (Number(country.value) * Number(boxDetails.weight)).toFixed(2);
            }
        }
        return 0;
    }

    const onFieldChange = (field, value) => {
        if (value) {
            if (field === 'weight') {
                if (Number(value) >= 0) {
                    isError[field] && setIsError({ ...isError, [field]: false });
                    isWeightNegative && setIsWeightNegative(false);
                } else {
                    (!isWeightNegative) && setIsWeightNegative(true);
                    (!isError[field]) && setIsError({ ...isError, [field]: true });
                }
            } else {
                isError[field] && setIsError({ ...isError, [field]: false });
            }
        } else {
            setIsError({ ...isError, [field]: true });
        }

        setBoxDetails({ ...boxDetails, [field]: value });
    }
    return (
        <Container>
            <Row className="justify-content-md-center" >
                <Col style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }} md="10" xl="6" sm="12">
                    {showSuccess && <Alert key={"success"} dismissible variant={"success"}>
                        Box added successfully!
                    </Alert>}
                    <Form>
                        <Form.Group className="mb-3" controlId="addBoxForm.ControlInput1">
                            <Form.Label>Reciever Name</Form.Label>
                            <Form.Control required
                                value={boxDetails.recieverName}
                                onChange={e => onFieldChange('recieverName', e.target.value)}
                                type="text" placeholder="name@example.com"
                                isInvalid={isError.recieverName}
                            />

                            <Form.Control.Feedback type="invalid">
                                Please enter Reciever Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="addBoxForm.ControlTextarea1">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control required
                                value={boxDetails.weight}
                                // onChange={e => setBoxDetails({ ...boxDetails, weight: e.target.value })}
                                onChange={e => onFieldChange('weight', e.target.value)}
                                isInvalid={isError.weight}

                                type="number" placeholder="Weight" />
                            <Form.Control.Feedback type="invalid">
                                {isWeightNegative ? "Please enter positive value " : "Please enter proper weight."}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="addBoxForm.ControlTextarea1">

                            <Form.Label htmlFor="exampleColorInput3">Box Color</Form.Label>
                            <Form.Control required
                                value={boxDetails.color}
                                onChange={e => onFieldChange('color', e.target.value)}
                                isInvalid={isError.color}
                                type="color"
                                title="Box Color"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Select color.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="addBoxForm.ControlTextarea1">
                            <Form.Label htmlFor="exampleColorInput3">Destination Country</Form.Label>

                            <Form.Select required value={boxDetails.destinationCountry}
                                onChange={e => onFieldChange('destinationCountry', e.target.value)}
                                isInvalid={isError.destinationCountry}
                                aria-label="Default select example">
                                <option></option>
                                {mockCountry.map((country) => (
                                    <option key={country.key} value={country.key}>{country.key}</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please select a country.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>₹</InputGroup.Text>
                            <Form.Control ref={calculatedCostRef} disabled readOnly aria-label="Amount (to the nearest dollar)" value={getCalcualtedCost()} />
                        </InputGroup>
                        <Button onClick={onSubmit} variant="primary">Submit</Button>
                        {loading && <LoadingIndicator />}
                    </Form>
                </Col>
            </Row>
        </Container >

    );
}

export default AddBox;