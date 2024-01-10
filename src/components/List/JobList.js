import React from 'react';
import JobItem from '../serviceItems/JobItem';

const JobList = ({ jobs }) => {
  return (
    <div>
      <h2>Вакансии</h2>
      {jobs.map((job, index) => (
        <JobItem key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;