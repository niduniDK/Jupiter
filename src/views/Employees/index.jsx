import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import Profile from 'views/Profile';

//Array of employee details
const employeeDetails = [
  { employee_id: '001A', name: 'Niduni', business_email: 'niduni@jupiter.com' },
  { employee_id: '002A', name: 'Isurumuni', business_email: 'isurumuni@jupiter.com' },
  { employee_id: '003A', name: 'Bhanuka', business_email:'bhanuka@jupiter.com' },
  { employee_id: '004A', name: 'Umesha', business_email: 'umesha@jupiter.com' },
  { employee_id: '005A', name: 'Dewmina', business_email: 'dewmina@jupiter.com' },
];

const Employees = () => {

  const navigate = useNavigate();
  // Function to view employee details
  const viewEmployee = () => {
    console.log("Viewed employee");
    navigate('/profile');
  };

  const [employees, setEmployees] = useState();

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
                <h6 className="mb-1">Business Email</h6>
              </th>
              <th className="col text-center">
                <h6 className="mb-1"></h6>
              </th>
              </tr>
              {employeeDetails.map((data, index) => {
                
                const { employee_id, name, business_email } = data;
                return(
                  <tr className="unread">
                  <td>
                    <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
                  </td>
                  <td>
                    <h6 className="mb-1" style={{marginLeft: '80px'}}>{employee_id}</h6>
                  </td>
                  <td>
                    <h6 className="mb-1" style={{marginLeft:'100px'}}>{name}</h6>
                  </td>
                  <td>
                    <h6 className="mb-1" style={{marginLeft:'130px'}}>{business_email}</h6>
                  </td>
                  <td>
                    <Button variant="primary" size="sm" style={{marginLeft: '100px'}} onClick={viewEmployee}>View</Button>
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


// import React, { useEffect, useState } from 'react';
// import { Row, Col, Card, Table, Button } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';

// import avatar2 from '../../assets/images/user/avatar-2.jpg'; // Default avatar

// const Employees = () => {
//   const [employees, setEmployees] = useState([]);
//   const navigate = useNavigate();

//   // Fetch employees from the backend API
//   const fetchEmployees = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/supervisors-with-teams'); // Replace with your actual API URL
//       if (!response.ok) {
//         throw new Error('Failed to fetch employees');
//       }
//       const data = await response.json();
//       setEmployees(data); 
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   };

//   // UseEffect to call fetchEmployees when the component mounts
//   useEffect(() => {
//     fetchEmployees();
//   }, []); 

//   // Function to navigate to the employee profile page
//   const viewEmployee = (employee_id) => {
//     navigate(`/profile/${employee_id}`); 
//   };

//   return (
//     <React.Fragment>
//       <Card className="Recent-Users widget-focus-lg">
//         <Card.Header>
//           <Card.Title as="h5">Employees Under Supervision</Card.Title>
//         </Card.Header>

//         <Card.Body className="px-0 py-2">
//           <Table responsive hover className="recent-users">
//             <thead>
//               <tr className='unread'>
//                 <th className="col text-center"></th>
//                 <th className="col text-center"><h6 className="mb-1">ID</h6></th>
//                 <th className="col text-center"><h6 className="mb-1">Name</h6></th>
//                 <th className="col text-center"><h6 className="mb-1">Business Email</h6></th>
//                 <th className="col text-center"><h6 className="mb-1"></h6></th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.length > 0 ? (
//                 employees.map((data) => {
//                   const { employee_id, name, business_email } = data;
//                   return (
//                     <tr className="unread" key={employee_id}>
//                       <td>
//                         <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
//                       </td>
//                       <td>
//                         <h6 className="mb-1" style={{ marginLeft: '80px' }}>{employee_id}</h6>
//                       </td>
//                       <td>
//                         <h6 className="mb-1" style={{ marginLeft: '100px' }}>{name}</h6>
//                       </td>
//                       <td>
//                         <h6 className="mb-1" style={{ marginLeft: '130px' }}>{business_email}</h6>
//                       </td>
//                       <td>
//                         <Button variant="primary" size="sm" style={{ marginLeft: '100px' }} onClick={() => viewEmployee(employee_id)}>
//                           View
//                         </Button>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center">No employees found</td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>
//     </React.Fragment>
//   );
// };

// export default Employees;
