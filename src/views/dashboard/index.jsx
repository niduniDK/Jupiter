import React, { useState } from 'react';
import { Row, Col, Card, Table, Tabs, Tab, ListGroup, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChatList from '../../layouts/AdminLayout/NavBar/NavRight/ChatList';


import avatar1 from '../../assets/images/user/avatar-1.jpg';

const dashSalesData = [
  { title: 'On Leave', amount: '201', value: 10 },
  { title: 'Working format : Full Time', amount: '589',  value: 50},
  { title: 'Working format : Part Time', amount: '105',  value: 90}
];

let initialApprovalList = [
  { name: 'Bhanuka Botheju', type: 'Annual', date: '11 May' },
  { name: 'Isurumuni', type: 'Annual', date: '13 May' },
  { name: 'Umesh Jayakodi', type: 'Annual', date: '20 May' },
  { name: 'Niduni Kasige', type: 'Annual', date: '21 May' },
  { name: 'Devmina', type: 'Annual', date: '22 July' }
];

let birthdaylist = [
  { name: 'Bhanuka Botheju', dept: 'HR' },
  { name: 'Kasun Chamara', dept: 'HR' },
  { name: 'Dinushka Attanayaka', dept: 'HR' },
  { name: 'Eshin Menusha', dept: 'HR' }
];

const DashDefault = () => {
  const [listOpen, setListOpen] = useState(false);
  const [approvalList, setApprovalList] = useState(initialApprovalList);

  const handleApprove = (index) => {
    const updatedList = approvalList.filter((_, i) => i !== index); // Remove the approved item from the list
    setApprovalList(updatedList);
  };

  const handleReject = (index) => {
    const updatedList = approvalList.filter((_, i) => i !== index); // Remove the rejected item from the list
    setApprovalList(updatedList);
    
  };

  let tabcontent = (
    <React.Fragment>
      {birthdaylist.map((data, index) => (
        <div className="d-flex friendlist-box align-items-center justify-content-center m-b-20" key={index}>
          <div className="m-r-10 photo-table flex-shrink-0">
            <Link to="#">
              <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" />
            </Link>
          </div>
          <div className="flex-grow-1 ms-3">
            <h6 className="m-0 d-inline">{data.name}</h6>
            <span className="float-end d-flex align-items-center">
              <i className="fa fa-caret-up f-22 m-r-10 text-c-green" />
              {data.dept}
            </span>
          </div>
        </div>
      ))}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Row>
        {dashSalesData.map((data, index) => {
          return (
            <Col key={index} xl={6} xxl={4}>
              <Card>
                <Card.Body>
                  <h6 className="mb-4">{data.title}</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className={`feather ${data.icon} f-30 m-r-5`} /> {data.amount}
                      </h3>
                    </div>
                    <div className="col-3 text-end">
                      <p className="m-b-0">{data.value}%</p>
                    </div>
                  </div>
                  <div className="progress m-t-30" style={{ height: '7px' }}>
                    <div
                      className={`progress-bar progress-c-theme`}
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
        <Col md={6} xl={8}>
          <Card className="Recent-Users widget-focus-lg">
            <Card.Header>
              <Card.Title as="h5">Pending Approvals</Card.Title>
            </Card.Header>
            <Card.Body className="px-0 py-2">
              <Table responsive hover className="recent-users">
                <tbody>
                  {approvalList.map((data, index) => (
                    <tr key={index} className='unread'>
                      <td>
                        <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" />
                      </td>
                      <td>
                      <h6 className="mb-1" style={{cursor:'pointer'}} onClick={() => setListOpen(true)}>{data.name}</h6>  
                      <ChatList 
                        listOpen={listOpen} 
                        closed={() => setListOpen(false)} 
                        name={data.name}  // Passing data.name to ChatList as a prop
                      />

                        <p className="m-0">{data.type}</p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          {data.date}
                        </h6>
                      </td>
                      <td>
                        <button
                          className="label theme-bg2 text-white f-12"
                          onClick={() => handleReject(index)}
                        >
                          Reject
                        </button>
                        <button
                          className="label theme-bg text-white f-12"
                          onClick={() => handleApprove(index)}
                        >
                          Approve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4} className="user-activity">
          <Card>
            <Tabs defaultActiveKey="today" id="uncontrolled-tab-example">
              <Tab eventKey="today" title="Celebration">
                {tabcontent}
              </Tab>
              <Tab eventKey="week" title="Achievement">
                {tabcontent}
              </Tab>
              <Tab eventKey="all" title="All">
                {tabcontent}
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DashDefault;
