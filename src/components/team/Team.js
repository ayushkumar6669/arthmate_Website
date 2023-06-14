import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import "./Team.css";
// import { employees } from '../../config/employees';
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
        {departmentEmployees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <img src={person} alt={employee.name} className="employee-image" />
            <h3>{employee.name}</h3>
            <p>{employee.designation}</p>
          </div>
        ))}
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
