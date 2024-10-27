import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import avatar1 from '../../assets/images/user/avatar-1.jpg';

const Profile = ({onChangePage}) => {
    const location = useLocation();
    const initialEmployeeId = location.state?.employee_id;

    const employeeIDRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const birthdayRef = useRef(null);
    const Gender = useRef(null);
    const MaritalStatus = useRef(null);
    const NoOfDependents = useRef(null);
    const Address = useRef(null);
    const ContactNumber = useRef(null);
    const EfirstName = useRef(null);
    const ElastName = useRef(null);
    const EAddress = useRef(null);
    const EContactNumber = useRef(null);
    const JobTitle = useRef(null);
    const BusinessEmail = useRef(null);
    const Department = useRef(null);
    const Branch = useRef(null);
    const SupervisorID = useRef(null);
    const AnnualLeave = useRef(null);
    const CasualLeave = useRef(null);
    const NoPayLeave = useRef(null);
    const MaternityLeave = useRef(null);


    const [edit, setEdit] = useState(false);  // Changed from 'false' to false

    const [employee_id, setEmployeeId] = useState(initialEmployeeId);

    console.log("Employee ID:", employee_id);

    const changepage = (value) =>{
        setEdit(value);
    }

    const savechanges = (value) => {
        setEdit(value);
        console.log(firstNameRef.current.value);
        
    }

    let profile = {
        employee_id: employee_id,
        first_name : firstNameRef.current?.value || '',
        last_name: lastNameRef.current?.value || '',
        birthday: birthdayRef.current?.value || '',
        gender: Gender.current?.value || '',
        marital_status: MaritalStatus.current?.value || '',
        number_of_dependents: NoOfDependents.current?.value || '',
        address: Address.current?.value || '',
        contact_number: ContactNumber.current?.value || '',
        business_email: BusinessEmail.current?.value || '',
        job_title: JobTitle.current?.value || '',
        department_name: Department.current?.value || '',
        branch_name: Branch.current?.value || '',
        emergency_contact_name: EfirstName.current?.value || '',
        emergency_contact_address: EAddress.current?.value || '',
        emergency_contact_number: EContactNumber.current?.value || '',
    }

    const [employeeProfile, setEmployeeProfile] = useState(profile);

    const fetchProfile = async () => {
        try {
            let response = await fetch(`http://127.0.0.1:8000/employee_/${employee_id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        });
            if (response.ok) {
                const data = await response.json();
                console.log("Employee data received:", data);
                setEmployeeProfile(data);
            } else {
                console.log("Error fetching employee data");
            }
            
        }catch (error) {
            console.error("Error fetching employee data:", error);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, [employee_id]);

    return (
        <>
            {edit ? (
                <div className="auth-wrapper d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="auth-content justify-content-center align-items-center" style={{ width: '100%' }}>
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>

                    <Card className="mx-auto shadow-lg" lg={6} md={8} style={{ width: '85%', margin: '30px' }}>
                        <Card.Header>Employee Profile</Card.Header>
                        <Row>
                            <Col>
                                <img className="rounded-circle" style={{ width: '400px', height: '400px', margin: '80px', marginLeft: '120px' }} src={avatar1} alt="activity-user" />
                            </Col>

                            <Col lg={6} md={8}>
                                <Card.Body id='card-1' style={{ margin: '30px' }}>
                                    <Form>
                                        <Form.Group as={Row} className="mb-3" controlId="employeeID">
                                            <Form.Label column sm={4}>Employee ID</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control type="text" defaultValue="001A" ref={employeeIDRef} value={employeeProfile.employee_id}/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="first_name">
                                            <Form.Label column sm={4}>First Name</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control type="text" defaultValue="Mary" ref={firstNameRef} value={employeeProfile.first_name}/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="last_name">
                                            <Form.Label column sm={4}>Last Name</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control type="text" defaultValue="Stevens" ref={lastNameRef} value={employeeProfile.last_name}/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="birthday">
                                            <Form.Label column sm={4}>Birthday</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control type="date" defaultValue="2000-01-01" ref={birthdayRef} value={employeeProfile.birthday}/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="gender">
                                            <Form.Label column sm={4}>Gender</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control type="text" defaultValue="Female" ref={Gender} value={employeeProfile.gender}/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="marital_status">
                                            <Form.Label column sm={4}>Marital Status</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control type="text" defaultValue="Married" ref={MaritalStatus} value={employeeProfile.marital_status}/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="no_of_dependents">
                                            <Form.Label column sm={4}>No. of Dependents</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control type="decimal" defaultValue="2" ref={NoOfDependents} value={employeeProfile.number_of_dependents}/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="address">
                                            <Form.Label column sm={4}>Address</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control type="text" defaultValue="No. 123, Bandaranayaka Mw., Katubedda" ref={Address} value={employeeProfile.address}/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="contact_number">
                                            <Form.Label column sm={4}>Contact Number</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control type="text" defaultValue="0123456789" ref={ContactNumber} value={employeeProfile.contact_number}/>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="mx-auto shadow-lg" lg={6} md={8} style={{ width: '85%', margin: '30px' }}>
                        <Card.Header>Emergency Contact Details</Card.Header>
                        <Card.Body id='card-1' style={{ margin: '30px' }}>
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="first_name">
                                    <Form.Label column sm={4}>First Name</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text" defaultValue="Mary" ref={EfirstName} value={employeeProfile.emergency_contact_name}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="address">
                                    <Form.Label column sm={4}>Address</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text" defaultValue="No. 123, Bandaranayaka Mw., Katubedda" ref={EAddress} value={employeeProfile.emergency_address}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="contact_number">
                                    <Form.Label column sm={4}>Contact Number</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text" defaultValue="0123456789" ref={EContactNumber} value={employeeProfile.emergency_contact_number}/>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Card className="mx-auto shadow-lg" lg={6} md={8} style={{ width: '85%', margin: '30px' }}>
                        <Card.Header>Job Details</Card.Header>
                        <Card.Body id='card-1' style={{ margin: '30px' }}>
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="job_title">
                                    <Form.Label column sm={4}>Job Title</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text" defaultValue="Software Engineer" ref={JobTitle} value={employeeProfile.job_title}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="business_email">
                                    <Form.Label column sm={4}>Business Email</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text" defaultValue="abc@jupiter.com" ref={BusinessEmail} value={employeeProfile.business_email}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="department">
                                    <Form.Label column sm={4}>Department</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text" defaultValue="Technical Department" ref={Department} value={employeeProfile.department_name}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="branch">
                                    <Form.Label column sm={4}>Branch</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text" defaultValue="Colombo" ref={Branch} value={employeeProfile.branch_name}/>
                                    </Col>
                                </Form.Group>

                            </Form>
                        </Card.Body>
                    </Card>

                    <Card className="mx-auto shadow-lg" lg={6} md={8} style={{ width: '85%', margin: '30px' }}>
                        <Card.Header>Remaining Leave Count</Card.Header>
                        <Card.Body id='card-1' style={{ margin: '30px' }}>
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="annual_leave">
                                    <Form.Label column sm={4}>Annual Leaves</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="decimal" defaultValue="20" ref={AnnualLeave} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="casual_leave">
                                    <Form.Label column sm={4}>Casual Leaves</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="decimal" defaultValue="15" ref={CasualLeave}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="nopay_leave">
                                    <Form.Label column sm={4}>No-pay Leaves</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="decimal" defaultValue="50" ref={NoPayLeave} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="maternity_leave">
                                    <Form.Label column sm={4}>Maternity Leaves</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="decimal" defaultValue="90" ref={MaternityLeave}/>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card className="mx-auto shadow-lg" lg={6} md={8} style={{ width: '85%', margin: '30px' }}>
                        <Card.Header>Save Details</Card.Header>
                        <Card.Body id='card-1' style={{ margin: '30px' }}>
                            <Button variant="primary" size="sm" className="w-100" onClick={() => savechanges('false')}>
                                Save
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            ) : (
                <div className="auth-wrapper d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="auth-content justify-content-center align-items-center" style={{ width: '100%' }}>
                        <div className="auth-bg">
                            <span className="r" />
                            <span className="r s" />
                            <span className="r s" />
                            <span className="r" />
                        </div>

                        <Card className="mx-auto shadow-lg" lg={6} md={8} style={{ width: '85%', margin: '30px' }}>
                            <Card.Header>Employee Profile</Card.Header>
                            <Row>
                                <Col>
                                    <img className="rounded-circle" style={{ width: '400px', height: '400px', margin: '80px', marginLeft: '120px' }} src={avatar1} alt="activity-user" />
                                </Col>

                                <Col lg={6} md={8}>
                                    <Card.Body id='card-1' style={{ margin: '30px' }}>
                                        <Form>
                                            <Form.Group as={Row} className="mb-3" controlId="employeeID">
                                                <Form.Label column sm={4}>Employee ID</Form.Label>
                                                <Col sm={8}>
                                                    <Form.Control type="text" defaultValue="001A" readOnly />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="first_name">
                                                <Form.Label column sm={4}>First Name</Form.Label>
                                                <Col sm={8}>
                                                    <Form.Control type="text" defaultValue="Mary" readOnly />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="last_name">
                                                <Form.Label column sm={4}>Last Name</Form.Label>
                                                <Col sm={8}>
                                                    <Form.Control type="text" defaultValue="Stevens" readOnly />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="birthday">
                                                <Form.Label column sm={4}>Birthday</Form.Label>
                                                <Col sm={8}>
                                                    <Form.Control type="date" defaultValue="2000-01-01" readOnly />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="gender">
                                                <Form.Label column sm={4}>Gender</Form.Label>
                                                <Col sm={8}>
                                                    <Form.Control type="text" defaultValue="Female" readOnly />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="marital_status">
                                                <Form.Label column sm={4}>Marital Status</Form.Label>
                                                <Col sm={8}>
                                                    <Form.Control type="text" defaultValue="Married" readOnly />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="no_of_dependents">
                                                <Form.Label column sm={4}>No. of Dependents</Form.Label>
                                                <Col sm={8}>
                                                    <Form.Control type="decimal" defaultValue="2" readOnly />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="address">
                                                <Form.Label column sm={4}>Address</Form.Label>
                                                <Col sm={8}>
                                                    <Form.Control type="text" defaultValue="No. 123, Bandaranayaka Mw., Katubedda" readOnly />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="contact_number">
                                                <Form.Label column sm={4}>Contact Number</Form.Label>
                                                <Col sm={8}>
                                                    <Form.Control type="text" defaultValue="0123456789" readOnly />
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>

                        <Card className="mx-auto shadow-lg" lg={6} md={8} style={{ width: '85%', margin: '30px' }}>
                            <Card.Header>Emergency Contact Details</Card.Header>
                            <Card.Body id='card-1' style={{ margin: '30px' }}>
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="first_name">
                                        <Form.Label column sm={4}>First Name</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" defaultValue="Mary" readOnly />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="last_name">
                                        <Form.Label column sm={4}>Last Name</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" defaultValue="Stevens" readOnly />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="address">
                                        <Form.Label column sm={4}>Address</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" defaultValue="No. 123, Bandaranayaka Mw., Katubedda" readOnly />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="contact_number">
                                        <Form.Label column sm={4}>Contact Number</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" defaultValue="0123456789" readOnly />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className="mx-auto shadow-lg" lg={6} md={8} style={{ width: '85%', margin: '30px' }}>
                            <Card.Header>Employee Details</Card.Header>
                            <Card.Body id='card-1' style={{ margin: '30px' }}>
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="job_title">
                                        <Form.Label column sm={4}>Job Title</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" defaultValue="Software Engineer" readOnly />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="business_email">
                                        <Form.Label column sm={4}>Business Email</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" defaultValue="abc@jupiter.com" readOnly />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="department">
                                        <Form.Label column sm={4}>Department</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" defaultValue="Technical Department" readOnly />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="branch">
                                        <Form.Label column sm={4}>Branch</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" defaultValue="Colombo" readOnly />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="supervisor_id">
                                        <Form.Label column sm={4}>Supervisor ID</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" defaultValue="002B" readOnly />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className="mx-auto shadow-lg" lg={6} md={8} style={{ width: '85%', margin: '30px' }}>
                            <Card.Header>Remaining Leave Count</Card.Header>
                            <Card.Body id='card-1' style={{ margin: '30px' }}>
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="annual_leave">
                                        <Form.Label column sm={4}>Annual Leaves</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="decimal" defaultValue="20" readOnly />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="casual_leave">
                                        <Form.Label column sm={4}>Casual Leaves</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="decimal" defaultValue="15" readOnly />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="nopay_leave">
                                        <Form.Label column sm={4}>No-pay Leaves</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="decimal" defaultValue="50" readOnly />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="maternity_leave">
                                        <Form.Label column sm={4}>Maternity Leaves</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="decimal" defaultValue="90" readOnly />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card className="mx-auto shadow-lg" lg={6} md={8} style={{ width: '85%', margin: '30px' }}>
                            <Card.Header>Change Details</Card.Header>
                            <Card.Body id='card-1' style={{ margin: '30px' }}>
                                <Button variant="primary" size="sm" className="w-100" onClick={() => changepage('true')}>
                                    Edit
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
