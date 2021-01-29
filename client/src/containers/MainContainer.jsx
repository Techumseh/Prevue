import { Switch , Route, useHistory} from "react-router-dom"
import { useEffect, useState } from "react";


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
      <route path='/industries'>
        <Companies 
          companies={industries} />
        </route>
  </Switch>
  )
}