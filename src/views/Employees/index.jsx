import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import Profile from 'views/Profile';

//

const dashSalesData = [
  { title: 'On Leave', icon: 'icon-arrow-up text-c-green', value: 13, class: 'progress-c-theme' },
  { title: 'Working Format : Full Time', icon: 'icon-arrow-down text-c-red', value: 85, class: 'progress-c-theme2' },
  { title: 'Working Format : Part Time', icon: 'icon-arrow-up text-c-green', value: 15, color: 'progress-c-theme' }
];

//Array of employee details
const employeeDetails = [
  { employee_id: '001A', name: 'Niduni', avatar: avatar1 },
  { employee_id: '002A', name: 'Isurumuni', avatar: avatar2 },
  { employee_id: '003A', name: 'Bhanuka', avatar: avatar2 },
  { employee_id: '004A', name: 'Umesha', avatar: avatar2 },
  { employee_id: '005A', name: 'Dewmina', avatar: avatar2 },
];

const Employees = () => {
  const tabContent = (
    <React.Fragment>
      <div className="d-flex friendlist-box align-items-center justify-content-center m-b-20">
        <div className="m-r-10 photo-table flex-shrink-0">
          <Link to="#">
            <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
          </Link>
        </div>
        <div className="flex-grow-1 ms-3">
          <h6 className="m-0 d-inline">Isurumuni</h6>
          <span className="float-end d-flex  align-items-center">
            <i className="fa fa-caret-up f-22 m-r-10 text-c-green" />
            HR
          </span>
        </div>
      </div>
      <div className="d-flex friendlist-box align-items-center justify-content-center m-b-20">
        <div className="m-r-10 photo-table flex-shrink-0">
          <Link to="#">
            <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
          </Link>
        </div>
        <div className="flex-grow-1 ms-3">
          <h6 className="m-0 d-inline">Bhanuka</h6>
          <span className="float-end d-flex  align-items-center">
            <i className="fa fa-caret-up f-22 m-r-10 text-c-green" />
            QA
          </span>
        </div>
      </div>
      <div className="d-flex friendlist-box align-items-center justify-content-center m-b-20">
        <div className="m-r-10 photo-table flex-shrink-0">
          <Link to="#">
            <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
          </Link>
        </div>
        <div className="flex-grow-1 ms-3">
          <h6 className="m-0 d-inline">Dewmina</h6>
          <span className="float-end d-flex  align-items-center">
            <i className="fa fa-caret-down f-22 m-r-10 text-c-red" />
            QA
          </span>
        </div>
      </div>
      <div className="d-flex friendlist-box align-items-center justify-content-center m-b-20">
        <div className="m-r-10 photo-table flex-shrink-0">
          <Link to="#">
            <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
          </Link>
        </div>
        <div className="flex-grow-1 ms-3">
          <h6 className="m-0 d-inline">Umesha</h6>
          <span className="float-end d-flex  align-items-center">
            <i className="fa fa-caret-down f-22 m-r-10 text-c-red" />
            SE
          </span>
        </div>
      </div>
      <div className="d-flex friendlist-box align-items-center justify-content-center m-b-20">
        <div className="m-r-10 photo-table flex-shrink-0">
          <Link to="#">
            <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" />
          </Link>
        </div>
        <div className="flex-grow-1 ms-3">
          <h6 className="m-0 d-inline">Niduni</h6>
          <span className="float-end d-flex  align-items-center">
            <i className="fa fa-caret-up f-22 m-r-10 text-c-green" />
            SE
          </span>
        </div>
      </div>
      
    </React.Fragment>
  );

  const navigate = useNavigate();
  // Function to view employee details
  const viewEmployee = () => {
    console.log("Viewed employee");
    navigate('/profile');
  };

  return (
    <React.Fragment>
      <Row >
        {dashSalesData.map((data, index) => {
          return (
            <Col key={index} xl={6} xxl={4}>
              <Card>
                <Card.Body>
                  <h6 className="mb-4">{data.title}</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      </h3>
                    </div>
                    <div className="col-3 text-end">
                      <p className="m-b-0">{data.value}%</p>
                    </div>
                  </div>
                  <div className="progress m-t-30" style={{ height: '7px' }}>
                    <div
                      className={`progress-bar ${data.class}`}
                      role="progressbar"
                      style={{ width: `${data.value}%` }}
                      aria-valuenow={data.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}

          <Row>
            <Col key={0} xl={8}>
              <Card className="Recent-Users widget-focus-lg">
                <Card.Header>
                  <Card.Title as="h5">Employees Under Supervision</Card.Title>
                </Card.Header>

                {/* Need to update using the data from the database */}
                <Card.Body className="px-0 py-2">
                  <Table responsive hover className="recent-users">
                    <tbody>
                      {employeeDetails.map((data, index) => {
                        
                        const { employee_id, name, avatar } = data;
                        return(
                          <tr className="unread">
                          <td>
                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar} alt="activity-user" />
                          </td>
                          <td>
                            <h6 className="mb-1" style={{marginLeft: '200px'}}>{employee_id}</h6>
                          </td>
                          <td>
                            <h6 className="mb-1">{name}</h6>
                          </td>
                          <td>
                            <Button variant="primary" size="sm" style={{marginLeft: '50px'}} onClick={viewEmployee}>View</Button>
                          </td>
                          </tr>
                        )
                      }
                        
                    )}

                    </tbody>
                  </Table>
                </Card.Body>
                
              </Card>
            </Col>

            <Col key={1} xl={4} className="user-activity">
              <Card>
              <Tabs defaultActiveKey="celebrations" id="uncontrolled-tab-example">
                <Tab eventKey="celebrations" title="Celebrations">
                  {tabContent}
                </Tab>
                <Tab eventKey="achievements" title="Achievements">
                  {tabContent}
                </Tab>
                <Tab eventKey="all" title="All">
                  {tabContent}
                </Tab>
              </Tabs>
            </Card>
            </Col>
          </Row>
        
      </Row>
    </React.Fragment>
  );
};

export default Employees;
