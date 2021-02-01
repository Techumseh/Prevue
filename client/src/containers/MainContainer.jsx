import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import CreateCompany from "../screens/CreateCompany";
import CreateComments from "../screens/CreateComments";
import EditComments from "../screens/EditComments";
import { getAllCompanies } from "../services/companies";
import { deleteComments, getAllComments, postComments, putsComments } from "../services/comments";


export default function MainContainer() {
  const [companies, setCompanies] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory;
  const { currentUser } = props;

  useEffect(() => {
    const retrieveComments = async () => {
      const commentData = await getAllComments();
      setComments(commentData)
    }
    retrieveComments();
  }, [])

  useEffect(() => {
    const retrieveCompanies = async () => {
      const companyData = await getAllCompanies();
      setCompanies(companyData)
    }  }, [])
    

  return (
  <Switch>
      <route path='/companies'>
        <Companies 
          companies={companies}/>
      </route>
      <route path='/comments'>
        <Comments
          comments={comments} />
        </route>
  </Switch>
  )
}