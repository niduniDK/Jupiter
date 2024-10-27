import React, { useState, useEffect } from 'react';
import { Row, Col, Card, DropdownButton, Dropdown, Form } from 'react-bootstrap';
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


  const [selectedItem, setSelectedItem] = useState('Employees by Department');
  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    handleSelect(selectedItem);
  }, []);

  const handleSelect = async (eventKey) => {
    setSelectedItem(eventKey);
    try{
      if (eventKey === 'Employees by Department') {
        console.log('Fetch Employees by Department Data');
        const response = await fetch('http://127.0.0.1:8000/');  // Need to be updated with API endpoint

      } else if (eventKey === 'Roles') {
        console.log('Fetch Roles Data');
        const response = await fetch('http://127.0.0.1:8000/');  // Need to be updated with API endpoint

      } else if (eventKey === 'Employees by Pay Grade') {
        console.log('Fetch Employees by Pay Grade Data');
        const response = await fetch('http://127.0.0.1:8000/');  // Need to be updated with API endpoint

      } else if (eventKey === 'Leaves given within last month') {
        console.log('Fetch Leaves given within last month Data');
        const response = await fetch('http://127.0.0.1:8000/');  // Need to be updated with API endpoint

      }
      else if (eventKey === 'Employees by Gender') {
        console.log('Fetch Employees by Gender');
        const response = await fetch('http://127.0.0.1:8000/');  // Need to be updated with API endpoint

      }

      const data = await response.json();
      const labels = data.labels;
      const values = data.values;

      setChartData({
        labels: labels,
        datasets: [
          {
            label: ' ', // You can set this dynamically as well
            data: values,
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
      });

    } catch (error) {
      console.error('Error fetching report data:', error);
    }
    
  };

  return (
    <React.Fragment>
      <h4 className="mb-4">Reports</h4>

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
              <Dropdown.Item eventKey="Employees by Gender">Employees by Gender</Dropdown.Item>
            </DropdownButton>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Row className="d-flex justify-content-around">
        <Card className="deptChart">
          <Card.Header>{selectedItem || 'Employees by Department'}</Card.Header>
          <Card.Body className="d-flex justify-content-center align-items-center">
            <Col key={0} md={6} lg={6} xl={4} xxl={4} className="d-flex justify-content-left align-items-justify">
              <PieChart data={chartData} />
            </Col>

            <Col key={1} md={6} lg={6} xl={4} xxl={4} className="d-flex justify-content-right align-items-justify">
              <Form>
                {data.labels.map((label, index) => (
                  <Form.Group as={Row} className="mb-3" key={index} controlId={label}>
                    <Form.Label column sm={4}>{label}</Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" defaultValue={(chartData.datasets[0].data[index])} readOnly />
                    </Col>
                  </Form.Group>
                ))};
             
            </Form>
            </Col>
              
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
}

export default Reports;
