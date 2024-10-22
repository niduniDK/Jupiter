import React, { useEffect } from 'react';
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

  const navigate = useNavigate();
  // Function to view employee details
  const viewEmployee = () => {
    console.log("Viewed employee");
    navigate('/profile');
  };

  const [employees, setEmployees] = React.useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try{
        const response = await fetch('*');
        const data = await response.json();
        setEmployees(data);
      }
      catch(error){
        console.log('Error');
      }
    }
  })

  return (
    <React.Fragment>
      <Card className="Recent-Users widget-focus-lg">
        <Card.Header>
          <Card.Title as="h5">Employees Under Supervision</Card.Title>
        </Card.Header>

        {/* Need to update using the data from the database */}
        <Card.Body className="px-0 py-2">
          <Table responsive hover className="recent-users">
            <tbody>
              <tr className='unread'>
              <th className="col text-center">
                <h6 className="mb-1"></h6>
              </th>
              <th className="col text-center">
                <h6 className="mb-1" >ID</h6>
              </th>
              <th className="col text-center">
                <h6 className="mb-1">Name</h6>
              </th>
              <th className="col text-center">
                <h6 className="mb-1"></h6>
              </th>
              </tr>
              {employeeDetails.map((data, index) => {
                
                const { employee_id, name, avatar } = data;
                return(
                  <tr className="unread">
                  <td>
                    <img className="rounded-circle" style={{ width: '40px' }} src={avatar} alt="activity-user" />
                  </td>
                  <td>
                    <h6 className="mb-1" style={{marginLeft: '115px'}}>{employee_id}</h6>
                  </td>
                  <td>
                    <h6 className="mb-1" style={{marginLeft:'150px'}}>{name}</h6>
                  </td>
                  <td>
                    <Button variant="primary" size="sm" style={{marginLeft: '225px'}} onClick={viewEmployee}>View</Button>
                  </td>
                  </tr>
                )
              }
            )}

            </tbody>
          </Table>
        </Card.Body>
        
      </Card>
    </React.Fragment>
  );
};

export default Employees;
