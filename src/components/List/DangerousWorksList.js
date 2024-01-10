import React from 'react';
import DangerousWorkCard from '../Cards/DangerousWorkCard.js';

const DangerousWorksList = ({ works, onUpdateAccessRequest }) => {
  const handleUpdateAccess = (workId, requestData) => {
    onUpdateAccessRequest(workId, requestData);
  };

  return (
    <div className="dangerous-works-list">
      {works.map((work) => (
        <DangerousWorkCard
          key={work.id}
          work={work}
          onUpdateAccess={handleUpdateAccess}
        />
      ))}
    </div>
  );
};

export default DangerousWorksList;
