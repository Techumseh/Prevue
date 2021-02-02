import React from 'react';

const Companies = (props) => {
  const {companies} = props
  return (
    <div>
    {companies.map(company => company.name)}  
    </div>
  );
};

export default Companies;