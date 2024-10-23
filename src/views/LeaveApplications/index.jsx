import React, { useEffect } from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import LeaveRequestForm from 'views/LeaveRequestForm';

/*
  Get all Leave requests within the last month from the database
 */
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


const LeaveApplications = () => {
  const navigate = useNavigate();


  /* 
    Get leave request with the given request_id
   */
  const viewLeaveRequest = (/*request_id*/) => {
    console.log("Viewed");
    //navigate('/leave-request-form/${request_id}');
     navigate('/leave-request-form');
  }

  const [leaveRequest,setLeaveRequest] = React.useState([]);

  useEffect(() => {
    const fetchLeaveRequest = async () => {
      try{
        const response = await fetch('*');
        const data = await response.json();
        setLeaveRequest(data);
      }
      catch(error){
        console.log('Error');
      }
  }});

  return (
    <React.Fragment>
      <Row>
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
                 
                  <th>
                    <h6 className="mb-1">Leave Start Date</h6>
                  </th>
                
                  <th>
                    <h6 className="mb-1">Status</h6>
                  </th>
                  <th>
                  </th>
                </tr>

                {leaveRequestDetails.map((data, index) => {
                    
                  const { request_id, employee_id, leave_start_date, status } = data;
                    return(
                      <tr className="unread">
                        <td>
                        <h6 className="mb-1">{request_id}</h6>
                      </td>
                      <td>
                        <h6 className="mb-1">{employee_id}</h6>
                      </td>
                      
                      <td>
                        <h6 className="mb-1">{leave_start_date}</h6>
                      </td>
                      
                      <td>
                        <h6 className="mb-1">{status}</h6>
                      </td>
                      <td>
                        <Button variant="primary" size="sm" style={{marginLeft: '50px', background: '#47b9ff'}} onClick={viewLeaveRequest}>View</Button>
                      </td>
                      </tr>
                    )
                  }
                )}

                </tbody>
              </Table>
            </Card.Body>
            
          </Card>
                
      </Row>
    </React.Fragment>
  );
};

export default LeaveApplications;
