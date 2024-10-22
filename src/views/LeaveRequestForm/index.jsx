import React from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';

const LeaveRequestForm = (props) => {
  const approveRequest = (props) => {
    props.status = 'Approved';
  }

  return (
    <React.Fragment>
      <div className="auth-wrapper d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="auth-content d-flex justify-content-center align-items-center" style={{width:'200%'}}>
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
      <Card className='d-flex justify-content-center align-items-justify min-vh-100' style={{width:'80%'}}>
        <Card.Header className='d-flex justify-content-center align-items-center'>Leave Request Details</Card.Header>
        <Card.Body style={{marginLeft:'80px', marginRight:'80px'}}>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="requestId">
              <Form.Label column sm={4}>Request ID</Form.Label>
              <Col sm={8}>
                <Form.Control type="text" defaultValue="001LA" readOnly />
              </Col>
            </Form.Group>
 
            <Form.Group as={Row} className="mb-3" controlId="employeeId">
              <Form.Label column sm={4}>Employee ID</Form.Label>
              <Col sm={8}>
                <Form.Control type="text" defaultValue="001A" readOnly />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="requestDate">
              <Form.Label column sm={4}>Request Date</Form.Label>
              <Col sm={8}>
                <Form.Control type="date" defaultValue="2024-09-21" readOnly />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="leaveStartDate">
              <Form.Label column sm={4}>Leave Start Date</Form.Label>
              <Col sm={8}>
                <Form.Control type="date" defaultValue="2024-09-22" readOnly />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="periodOfAbsence">
              <Form.Label column sm={4}>Period of Absence</Form.Label>
              <Col sm={8}>
                <Form.Control type="number" defaultValue="2" readOnly />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="reason">
              <Form.Label column sm={4}>Reason</Form.Label>
              <Col sm={8}>
                <Form.Control type="text" defaultValue="Sick Leave" readOnly />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="typeOfLeave">
              <Form.Label column sm={4}>Type of Leave</Form.Label>
              <Col sm={8}>
                <Form.Control type="text" defaultValue="Casual Leave" readOnly />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="status">
              <Form.Label column sm={4}>Request Status</Form.Label>
              <Col sm={8}>
                <Form.Control type="text" defaultValue="Pending" readOnly>{props.status}</Form.Control>
              </Col>
            </Form.Group>

            <Row className="mt-4">
              <Col>
                <Button variant="primary" size="md" className="d-flex justify-content-center align-items-center w-50" style={{margin:'100px'}}>Approve</Button>
              </Col>
              <Col>
                <Button variant="danger" size="md" className="d-flex justify-content-center align-items-center w-50" style={{background: '#b861ff', margin:'100px'}}>Reject</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
    </div>
    </React.Fragment>
  );
};

export default LeaveRequestForm;
