import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import LeaveRequestForm from 'views/LeaveRequestForm';

//

const dashSalesData = [
  { title: 'On Leave', icon: 'icon-arrow-up text-c-green', value: 13, class: 'progress-c-theme' },
  { title: 'Working Format : Full Time', icon: 'icon-arrow-down text-c-red', value: 85, class: 'progress-c-theme2' },
  { title: 'Working Format : Part Time', icon: 'icon-arrow-up text-c-green', value: 15, color: 'progress-c-theme' }
];

const leaveRequestDetails = [
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', status: 'Pending' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', status: 'Pending' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', status: 'Pending' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', status: 'Pending' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', status: 'Pending' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', status: 'Pending' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', status: 'Pending' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', status: 'Pending' },
];

const acceptLeaveRequest = () => {
  console.log("Accepted");
}

const rejecttLeaveRequest = () => {
  console.log("Rejected");
}

const LeaveApplications = () => {
  const navigate = useNavigate();
  const viewLeaveRequest = () => {
    console.log("Viewed");
    navigate('/leave-request-form');
  }

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

          
          <Card className="Recent-Users widget-focus-lg">
            <Card.Header>
              <Card.Title as="h5">Leave Applications</Card.Title>
            </Card.Header>

            {/* Need to update using the data from the database */}
            <Card.Body className="px-0 py-2">
              <Table responsive hover className="recent-users">
                <tbody>
                <tr className="unread">
                  <th>
                    <h6 className="mb-1">Request ID</h6>
                  </th>
                  <th>
                    <h6 className="mb-1">ID</h6>
                  </th>
                  {/* <th>
                    <h6 className="mb-1">Request Date</h6>
                  </th> */}
                  <th>
                    <h6 className="mb-1">Leave Start Date</h6>
                  </th>
                  {/* <th>
                    <h6 className="mb-1">Period of Absence</h6>
                  </th>
                  <th>
                    <h6 className="mb-1">Reason</h6>
                  </th>
                  <th>
                    <h6 className="mb-1">Type of Leave</h6>
                  </th> */}
                  <th>
                    <h6 className="mb-1">Status</h6>
                  </th>
                  <th>
                  </th>
                </tr>

                {leaveRequestDetails.map((data, index) => {
                    
                  const { request_id, employee_id, request_date, leave_start_date, period_of_absence, reason, type_of_leave, status } = data;
                    return(
                      <tr className="unread">
                        <td>
                        <h6 className="mb-1">{request_id}</h6>
                      </td>
                      <td>
                        <h6 className="mb-1">{employee_id}</h6>
                      </td>
                      {/* <td>
                        <h6 className="mb-1">{request_date}</h6>
                      </td> */}
                      <td>
                        <h6 className="mb-1">{leave_start_date}</h6>
                      </td>
                      {/* <td>
                        <h6 className="mb-1">{period_of_absence}</h6>
                      </td>
                      <td>
                        <h6 className="mb-1">{reason}</h6>
                      </td>
                      <td>
                        <h6 className="mb-1">{type_of_leave}</h6>
                      </td> */}
                      <td>
                        <h6 className="mb-1">{status}</h6>
                      </td>
                      <td>
                        <Button variant="primary" size="sm" style={{marginLeft: '50px', background: '#47b9ff'}} onClick={viewLeaveRequest}>View</Button>
                        {/* <Button variant="primary" size="sm" style={{marginLeft: '50px', background: '#b861ff'}} onClick={rejecttLeaveRequest}>Reject</Button> */}
                      </td>
                      </tr>
                    )
                  }
                    
                )}

                </tbody>
              </Table>
            </Card.Body>
            
          </Card>
        

            {/* <Col key={1} xl={4} className="user-activity">
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
            </Col> */}
          
        
      </Row>
    </React.Fragment>
  );
};

export default LeaveApplications;
