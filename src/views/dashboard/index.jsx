import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

//

const dashSalesData = [
  { title: 'On Leave', icon: 'icon-arrow-up text-c-green', value: 13, class: 'progress-c-theme' },
  { title: 'Working Format : Full Time', icon: 'icon-arrow-down text-c-red', value: 85, class: 'progress-c-theme2' },
  { title: 'Working Format : Part Time', icon: 'icon-arrow-up text-c-green', value: 15, color: 'progress-c-theme' }
];
 
const DashDefault = () => {
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
                  <Card.Title as="h5">Pending Approval</Card.Title>
                </Card.Header>
                <Card.Body className="px-0 py-2">
                  <Table responsive hover className="recent-users">
                    <tbody>
                      <tr className="unread">
                        <td>
                          <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" />
                        </td>
                        <td>
                          <h6 className="mb-1">Niduni Kasige</h6>
                          <p className="m-0">Annual Leave</p>
                        </td>
                        <td>
                          <h6 className="text-muted">
                            <i className="fa fa-circle text-c-green f-10 m-r-15" />
                            11 MAY
                          </h6>
                        </td>
                        {/* <td> */}
                          {/* <Link to="#" className="label theme-bg2 text-white f-12">
                            Reject
                          </Link>
                          <Link to="#" className="label theme-bg text-white f-12">
                            Approve
                          </Link> */}
                        {/* </td> */}
                      </tr>
                      
                      <tr className="unread">
                        <td>
                          <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
                        </td>
                        <td>
                          <h6 className="mb-1">Bhanuka Botheju</h6>
                          <p className="m-0">Annual Leave</p>
                        </td>
                        <td>
                          <h6 className="text-muted">
                            <i className="fa fa-circle text-c-green f-10 m-r-15" />
                            12 MAY
                          </h6>
                        </td>
                        {/* <td> */}
                          {/* <Link to="#" className="label theme-bg2 text-white f-12">
                            Reject
                          </Link>
                          <Link to="#" className="label theme-bg text-white f-12">
                            Approve
                          </Link> */}
                        {/* </td> */}
                      </tr>

                      <tr className="unread">
                        <td>
                          <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
                        </td>
                        <td>
                          <h6 className="mb-1">Isurumuni</h6>
                          <p className="m-0">Annual Leave</p>
                        </td>
                        <td>
                          <h6 className="text-muted">
                            <i className="fa fa-circle text-c-green f-10 m-r-15" />
                            12 June
                          </h6>
                        </td>
                        {/* <td> */}
                          {/* <Link to="#" className="label theme-bg2 text-white f-12">
                            Reject
                          </Link>
                          <Link to="#" className="label theme-bg text-white f-12">
                            Approve
                          </Link> 
                        </td>*}*/}
                        </tr> 

                      <tr className="unread">
                        <td>
                          <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
                        </td>
                        <td>
                          <h6 className="mb-1">Umesha Jayakody</h6>
                          <p className="m-0">Casual Leave</p>
                        </td>
                        <td>
                          <h6 className="text-muted">
                            <i className="fa fa-circle text-c-green f-10 m-r-15" />
                            13 July
                          </h6>
                        </td>

                        {/* <td>
                          {/* <Link to="#" className="label theme-bg2 text-white f-12">
                            Reject
                          </Link>
                          <Link to="#" className="label theme-bg text-white f-12">
                            Approve
                          </Link> 
                        </td> */}
                      </tr>

                      <tr className="unread">
                        <td>
                          <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
                        </td>
                        <td>
                          <h6 className="mb-1">Dewmina</h6>
                          <p className="m-0">Casual Leave</p>
                        </td>
                        <td>
                          <h6 className="text-muted">
                            <i className="fa fa-circle text-c-green f-10 m-r-15" />
                            12 MAY
                          </h6>
                        </td>
                        {/* <td>
                          <Link to="#" className="label theme-bg2 text-white f-12">
                            Reject
                          </Link>
                          <Link to="#" className="label theme-bg text-white f-12">
                            Approve
                          </Link>
                        </td> */}
                      </tr>

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

export default DashDefault;
