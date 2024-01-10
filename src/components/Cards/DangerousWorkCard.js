import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { getEmployees } from '../../http/employeesApi';
import AccessRequestButton from '../Button/AccessRequestButton'; 
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import font from './Roboto-Regular.ttf';

const DangerousWorkCard = ({ work }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [duration, setDuration] = useState('');
  const [accessData, setAccessData] = useState([]);
  const [employeesData, setEmployeesData] = useState([]); 

  useEffect(() => {
    const fetchEmployees = async () => {
      const employees = await getEmployees(); 
      setEmployeesData(employees); 
    };

    fetchEmployees();
  }, []);


  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleRequestAccess = () => {
    console.log(`Запрос на доступ для работы "${work.job_name}" от сотрудника ${selectedEmployee} на срок ${duration} дней`);
    setAccessData([...accessData, {
      employee: selectedEmployee,
      duration: duration,
      workTitle: work.job_name,
    }]);
    handleClose();
  };

  const generateExcelReport = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(accessData);
    XLSX.utils.book_append_sheet(wb, ws, "Access Data");
    XLSX.writeFile(wb, "access_report.xlsx");
  };

  const generateReport = () => {
    const doc = new jsPDF();

    doc.addFileToVFS('Roboto-Regular.ttf', font);
    doc.addFont('Roboto-Regular.ttf', 'Roboto');
    doc.setFont('Roboto'); 

    const tableColumn = ["Сотрудник", "Срок", "Работа"];
    const tableRows = [];

    accessData.forEach(access => {
      const accessDataLine = [access.employee, access.duration, access.workTitle];
      tableRows.push(accessDataLine);
    });

    autoTable(doc, { head: [tableColumn], body: tableRows });
    doc.save("report.pdf");
  };

  return (
    <div className="dangerous-work-card">
      <img className="dangerous-work-image" src={`http://localhost:8080/${work.img}`} alt={work.job_name} />
      <h3>{work.job_name}</h3>
      <p>{work.description}</p>

      <AccessRequestButton onClick={handleShow} />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Запрос допуска</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="employeeSelect">
              <Form.Label>Выберите сотрудника</Form.Label>
              <Form.Control as="select" onChange={(e) => setSelectedEmployee(e.target.value)}>
                <option value="" disabled selected>
                  Выберите сотрудника
                </option>
                {employeesData.map((employee) => ( 
                  <option key={employee.id} value={employee.name}>
                    {employee.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="durationInput">
              <Form.Label>Введите срок (в днях)</Form.Label>
              <Form.Control type="number" placeholder="Введите срок" onChange={(e) => setDuration(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleRequestAccess}>
            Отправить запрос
          </Button>
        </Modal.Footer>
      </Modal>

      {accessData.map((access, index) => (
  <div key={index} className="access-info">
    <p>Допущен сотрудник: {access.employee}</p>
    <p>Срок допуска: {access.duration} дней</p>
    <p>К видам работ: {access.workTitle}</p>
  </div>
))}
    <div style={{ marginBottom: '10px', marginTop: '10px' }}>
        <Button variant="primary" onClick={generateReport}>
          Сгенерировать PDF отчет
        </Button>
      </div>
      <div>
        <Button variant="primary" onClick={generateExcelReport}>
          Сгенерировать Excel отчет
        </Button>
      </div>
    </div>
  );
};

export default DangerousWorkCard;
