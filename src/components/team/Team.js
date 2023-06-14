import React, { useState } from "react";
import { Container, Dropdown, Row, Col } from "react-bootstrap";
import "./Team.css";
import person from "../../assets/images/person.jpg";

const Team = ({ employeeData }) => {
  const [department, setDepartment] = useState("tech");

  const handleDepartmentChange = (selectedDepartment) => {
    setDepartment(selectedDepartment);
  };

  const renderEmployeeList = () => {
    const departmentEmployees = employeeData.filter(
      (employee) => employee.department === department
    );

    return (
      <div className="employee-list">
      <Row>
        {departmentEmployees.map((employee) => (
          // <Col key={employee.id} xs={12} md={3} className="employee-card">
          <div className="employee-card">
            <img src={employee.image} alt={employee.name} className="employee-image" />
            <h3>{employee.name}</h3>
            <p>{employee.designation}</p>
            </div>
          // </Col>
        ))}
      </Row>
    </div>
    );
  };

  return (
    <div className="team-page">
      <Container>
        <h2>Team</h2>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="department-dropdown">
            {department === "tech" ? "Tech" : "Product"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleDepartmentChange("tech")}>
              Tech
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleDepartmentChange("product")}>
              Product
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {renderEmployeeList()}
      </Container>
    </div>
  );
};

export default Team;
