import React from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

const LeaveRequestForm = (props) => {
  return (
    <React.Fragment>
    <div className="auth-wrapper d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
    <Row>
        {/* <Col>
            <Card>
                <Card.Header>Employee</Card.Header>
                <Card.Body>
                <img className="rounded-circle" style={{ width: '200px' }} src={avatar1} alt="activity-user" />
                </Card.Body>
            </Card>
        </Col> */}

        <Col>
        <Card className="borderless text-center" lg={6} md={12} style={{width:'200%'}}>
        <Card.Header>Employee Profile</Card.Header>
        <Row>
            <Col lg={6} md={12}>
                <Card.Body id='card-1'>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="employeeID">
                        <Form.Label column sm={4}>Employee ID</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" defaultValue="001A" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="first_name">
                        <Form.Label column sm={4}>First Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" defaultValue="Mary" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="last_name">
                        <Form.Label column sm={4}>Last Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" defaultValue="Stevens" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="birthday">
                        <Form.Label column sm={4}>Birthday</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="date" defaultValue="2000-01-01" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>

                    </Form>
                </Card.Body>
            </Col>
            <Col lg={6} md={12}>
                <Card.Body id='card-2'>
                    <Form style={{width: '80%', height: 'auto'}}>
                        <Form.Group as={Row} className="mb-3" controlId="gender">
                        <Form.Label column sm={4}>Gender</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" defaultValue="Female" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="marital_status">
                        <Form.Label column sm={4}>Marital Status</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" defaultValue="Married" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="no_of_dependents">
                        <Form.Label column sm={4}>No. of Dependents</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="decimal" defaultValue="2" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="address">
                        <Form.Label column sm={4}>Address</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" defaultValue="No. 123, Bandaranayaka Mw., Katubedda" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>

                    </Form>
                </Card.Body>


            </Col>
        </Row>
      </Card>

      <Card className="borderless text-center" lg={6} md={12} style={{width:'200%'}}>
        <Card.Header>Emergency Contact Details</Card.Header>
        <Row>
            <Col lg={6} md={12}>
                <Card.Body id='card-1'>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="first_name">
                        <Form.Label column sm={4}>First Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" defaultValue="Mary" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="last_name">
                        <Form.Label column sm={4}>Last Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" defaultValue="Stevens" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>


                    </Form>
                </Card.Body>
            </Col>
            <Col lg={6} md={12}>
                <Card.Body id='card-2'>
                    <Form style={{width: '80%', height: 'auto'}}>
                        <Form.Group as={Row} className="mb-3" controlId="gender">
                        <Form.Label column sm={4}>Gender</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" defaultValue="Female" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="address">
                        <Form.Label column sm={4}>Address</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" defaultValue="No. 123, Bandaranayaka Mw., Katubedda" readOnly />
                            <Button variant="primary" size="sm" className="w-100">Edit</Button>
                        </Col>
                        </Form.Group>

                    </Form>
                </Card.Body>

            </Col>
        </Row>
      </Card>
        </Col>
    </Row>
    

      </div>
    </div>
    </React.Fragment>
  );
};

export default LeaveRequestForm;
