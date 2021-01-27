import { Switch } from "react-router-dom"
import { useState } from React
import { Switch } from 'react-router-dom'
import { useEffect } from "react";


export default function MainContainer() {
  const [companies, setCompanies] = useState([]);
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const retrieveIndustries = async () => {
      const industryData = await getAllIndustries();
      setIndustries(industryData)
    }  }, [])

  useEffect(() => {
    const retrieveCompanies = async () => {
      const industryData = await getAllCompanies();
      setCompanies(companyData)
    }  }, [])
    
  }, [])

  return (
  <Switch>
      <route path='/companies'>
        <Companies 
          companies={companies}/>
      </route>
  </Switch>
  )
}