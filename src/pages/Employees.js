import React, { useState, useEffect } from 'react';
import { getEmployees, deleteEmployee } from '../http/employeesApi'; 
import './emp.css';
import EmployeeForm from '../components/Forms/EmployeeForm';
import EmployeeList from '../components/List/EmployeeList';
import { jwtDecode } from "jwt-decode";
import { observer } from 'mobx-react-lite';

const Employees = observer (() =>{
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '', imageUrl: '' });
  const [editingEmployee, setEditingEmployee] = useState(null);

  const token = localStorage.getItem('token');
  
  let decodedToken;
  let userRole;
  if (typeof token === 'string') {
    decodedToken = jwtDecode(token);
    userRole = decodedToken.role;
  } 

  useEffect(() => {
    const fetchEmployees = async () => {
      const employees = await getEmployees();
      setEmployees(employees);
    };

    fetchEmployees();
  }, []);

  const handleAddEmployee = () => {
    setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
    setNewEmployee({ name: '', position: '', imageUrl: '' });
  };

  const handleDeleteEmployee = async (id) => {
    await deleteEmployee(id); 
    setEmployees(employees.filter((employee) => employee.id !== id));
  };
  
  const handleEditEmployee = (id) => {
    const employeeToEdit = employees.find((employee) => employee.id === id);
    setEditingEmployee({ ...employeeToEdit });
  };

  const handleSaveEdit = (updatedEmployee) => {
    console.log('handleSaveEdit:', updatedEmployee);
    if (editingEmployee) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === editingEmployee.id ? { ...employee, ...updatedEmployee } : employee
        )
      );
    }
    setEditingEmployee(null);
   };
  
  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  return (
    <div>
    {userRole === 'ADMIN' && (
    <EmployeeForm
      formData={newEmployee}
      onFormChange={setNewEmployee}
      onAddEmployee={handleAddEmployee}
    />
    )}
    <EmployeeList
      employees={employees}
      onEditEmployee={handleEditEmployee}
      onDeleteEmployee={handleDeleteEmployee}
      editingEmployee={editingEmployee}
      onSaveEdit={handleSaveEdit}
      onCancelEdit={handleCancelEdit}
    />
  </div>
  );
});

export default Employees;
