import React from 'react';
import { Link } from 'react-router-dom'
const Companies = (props) => {
  const { companies } = props
  console.log("Hey there")
  return (
    <div>
      {companies.map(company => {
        return (
          <Link to={`/companies/${company.id}`}>
            {company.name}
          </Link>
        )
        
      }
      )} 
    </div>
  );
};

export default Companies;