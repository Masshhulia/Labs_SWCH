import React, { useState, useContext } from 'react';
import { Context } from '../../index';


const EmployeeCard = ({ employee, onDeleteEmployee }) => {
  const [editing, setEditing] = useState(false);
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);
  const {user} = useContext(Context)

  const handleInputChange = (e) => {
    setUpdatedEmployee({ ...updatedEmployee, [e.target.name]: e.target.value });
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setUpdatedEmployee(employee);
  };

  const handleDeleteClick = () => {
    onDeleteEmployee(employee.id);
  };
  console.log(`imageUrl for employee ${employee.id}: ${employee.img}`);
  return (
    <div key={employee.id} className="employee-card">
      <img src={`http://localhost:8080/${updatedEmployee.img}`} alt={updatedEmployee.name} />
      <div>
        <h3>{updatedEmployee.name}</h3>
        <p>{updatedEmployee.position}</p>
        {editing ? (
          <>
            <input
              type="text"
              name="name"
              value={updatedEmployee.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="position"
              value={updatedEmployee.position}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="imageUrl"
              value={updatedEmployee.img}
              onChange={handleInputChange}
            />
            <button onClick={handleSaveClick}>Сохранить</button>
            <button onClick={handleCancelClick}>Отмена</button>
          </>
        ) : (
          <>
            <button onClick={handleEditClick}>Редактировать</button>
            <button onClick={handleDeleteClick}>Удалить</button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
