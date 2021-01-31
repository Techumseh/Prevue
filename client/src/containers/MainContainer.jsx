import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import CreateCompany from "../screens/CreateCompany"
import CreateComments from "../screens/CreateComments"

export default function MainContainer() {
  const [companies, setCompanies] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory;
  const { currentUser } = props;

  useEffect(() => {
    const retrieveComments = async () => {
      const commentData = await getAllComments();
      setIndustries(commentData)
    }
    retrieveComments();
  }, [])

  useEffect(() => {
    const retrieveCompanies = async () => {
      const industryData = await getAllCompanies();
      setCompanies(companyData)
    }  }, [])
    

  return (
  <Switch>
      <route path='/companies'>
        <Companies 
          companies={companies}/>
      </route>
      <route path='/comments'>
        <Companies 
          companies={comments} />
        </route>
  </Switch>
  )
}