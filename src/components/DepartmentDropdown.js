import React, { useState } from 'react';

const DepartmentDropdown = ({ department, employees }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="department-dropdown">
      <button onClick={toggleDropdown}>{department}</button>
      {isOpen && (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>{employee.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DepartmentDropdown;
