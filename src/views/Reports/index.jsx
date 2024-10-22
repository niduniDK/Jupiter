import React, { useState } from 'react';
import { Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import PieChart from '../PieChart';

function Reports() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const dashSalesData = [
    { title: 'On Leave', icon: 'icon-arrow-up text-c-green', value: 13, class: 'progress-c-theme' },
    { title: 'Working Format : Full Time', icon: 'icon-arrow-down text-c-red', value: 85, class: 'progress-c-theme2' },
    { title: 'Working Format : Part Time', icon: 'icon-arrow-up text-c-green', value: 15, color: 'progress-c-theme' }
  ];

  const [selectedItem, setSelectedItem] = useState('');

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);

    if (eventKey === 'Employees by Department') {
      console.log('Fetch Employees by Department Data');
    } else if (eventKey === 'Roles') {
      console.log('Fetch Roles Data');
    }
  };

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
                      <h3 className="f-w-300 d-flex align-items-center m-b-0"></h3>
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
      </Row>

      <Card>
        <Card.Body>
          <Row>
            <Col>
            <Dropdown.Header>Select Report Type</Dropdown.Header>
            </Col>

            <Col>
              <DropdownButton
              title={selectedItem ? selectedItem : 'Select an Option'}
              onSelect={handleSelect}
              variant="success"
              id="dropdown-basic"
            >
              <Dropdown.Item eventKey="Employees by Department">Employees by Department</Dropdown.Item>
              <Dropdown.Item eventKey="Roles">Roles</Dropdown.Item>
              <Dropdown.Item eventKey="Employees by Pay Grade">Employees by Pay Grade</Dropdown.Item>
              <Dropdown.Item eventKey="Leaves given within last month">Leaves given within last month</Dropdown.Item>
              <Dropdown.Item eventKey="Employees by gender">Employees by gender</Dropdown.Item>
            </DropdownButton>
            </Col>
          </Row>
          
        </Card.Body>
      </Card>

      <Row className="d-flex justify-content-around">
        <Card className="deptChart">
          <Card.Header>{selectedItem || 'Employees by Department'}</Card.Header>
          <Card.Body className="d-flex justify-content-center align-items-center">
            <Col key={0} md={8} lg={8} xl={6} xxl={6}>
              <PieChart data={data} />
            </Col>
            
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
}

export default Reports;
