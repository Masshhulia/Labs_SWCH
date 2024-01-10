import React from 'react';
import JobList from '../components/List/JobList';

const jobs = [
  {
    title: 'Frontend Developer',
    description: 'Мы ищем опытного Frontend разработчика для нашей команды.',
  },
  {
    title: 'Backend Developer',
    description: 'Присоединяйтесь к нашей команде в качестве Backend разработчика.',
  },
];

const Careers = () => {
  return (
    <div>
      <h2>Карьера</h2>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Careers;
