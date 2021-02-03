import React from 'react';
import { Link } from 'react-router-dom'
const Companies = (props) => {
  const { companies } = props
  return (
    <div>
      {companies.map(company => {
        return (
          <Link to={`/companies/${company.id}`}>
            {company.name}<br />
          </Link>
        )
        
      }
      )} 
    </div>
  );
};

export default Companies;