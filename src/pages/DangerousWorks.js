import React, { useState, useEffect } from 'react';
import DangerousWorksList from '../components/List/DangerousWorksList';
import WorksForm from '../components/Forms/WorksForm';
import { getJob } from '../http/worksApi';
import { jwtDecode } from "jwt-decode";
import { observer } from 'mobx-react-lite';

const DangerousWorks = observer (() =>{
  const [dangerousWorks, setDangerousWorks] = useState([]);
  const [newWork, setNewWork] = useState({ job_name: '', description: '', imageUrl: '' });


  const token = localStorage.getItem('token');
  
  let decodedToken;
  let userRole;
  if (typeof token === 'string') {
    decodedToken = jwtDecode(token);
    userRole = decodedToken.role;
  } 

  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await getJob();
      setDangerousWorks(jobs);
    };

    fetchJobs();
  }, []);

  const handleAddWork = () => {
    setDangerousWorks([...dangerousWorks, { ...newWork, id: Date.now() }]);
    setNewWork({ job_name: '', description: '', imageUrl: '' });
  };
  const handleUpdateAccessRequest = (workId, requestData) => {
   
    setDangerousWorks((prevWorks) => {
      return prevWorks.map((work) =>
        work.id === workId ? { ...work, accessRequest: requestData } : work
      );
    });
  };

  return (
    <div className="container">
      <h2>Опасные работы</h2>
      <p>Здесь перечислены виды работ, к которым требуется допуск.</p>
      {userRole === 'ADMIN' && (
      <WorksForm
      formData={newWork}
      onFormChange={setNewWork}
      onAddWork={handleAddWork}
    />
    )}
      <DangerousWorksList
        works={dangerousWorks}
        onUpdateAccessRequest={handleUpdateAccessRequest}
      />
    </div>
  );
});

export default DangerousWorks;
