import React, { useState } from 'react';
import EmployeeCard from '../../components/Cards/EmployeeCard';

const EmployeeList = ({ employees }) => {
  const [editingEmployee, setEditingEmployee] = useState(null);

  const onEditEmployee = (employeeId) => {
    setEditingEmployee(employeeId);
  };

  const onCancelEdit = () => {
    setEditingEmployee(null);
  };

  const onSaveEdit = (employeeId, updatedEmployee) => {
    setEditingEmployee(null);
  };

  return (
    <div className="list_emp">
      <h2>Список работников</h2>
      <div className="employees-grid">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onEditEmployee={onEditEmployee}
            onSaveEdit={onSaveEdit}
            onCancelEdit={onCancelEdit}
            isEditing={editingEmployee === employee.id}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
