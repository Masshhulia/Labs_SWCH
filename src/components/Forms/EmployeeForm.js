import React, { useState } from 'react';
import { createEmployee } from '../../http/employeesApi'; 

const EmployeeForm = ({ formData, onFormChange }) => {
  const { name, position } = formData;
  const [file, setFile] = useState(null);

  const onAddEmployee = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('position', position);
    formData.append('img', file);
    
    const employee = await createEmployee(formData);
    console.log('Employee added:', employee);
  };

  return (
    <div className='list_emp'>
      <h2>Добавить нового сотрудника</h2>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => onFormChange({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Должность"
        value={position}
        onChange={(e) => onFormChange({ ...formData, position: e.target.value })}
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={onAddEmployee}>Добавить сотрудника</button>
    </div>
  );
};

export default EmployeeForm;
