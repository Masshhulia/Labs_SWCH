import React, { useState } from 'react';
import { createJob } from '../../http/worksApi'; 

const WorksForm = ({ formData, onFormChange }) => {
  const { job_name, description } = formData;
  const [file, setFile] = useState(null);

  const onAddEmployee = async () => {
    const formData = new FormData();
    formData.append('job_name', job_name);
    formData.append('description', description);
    formData.append('img', file);
    
    const work = await createJob(formData);
    console.log('Work added:', work);
  };

  return (
    <div className='list_emp'>
      <h2>Добавить новый вид работы</h2>
      <input
        type="text"
        placeholder="Название"
        value={job_name}
        onChange={(e) => onFormChange({ ...formData, job_name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Должность"
        value={description}
        onChange={(e) => onFormChange({ ...formData, description: e.target.value })}
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={onAddEmployee}>Добавить работу</button>
    </div>
  );
};

export default WorksForm;
