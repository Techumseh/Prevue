import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import CreateCompany from "../screens/CreateCompany";
import CreateComments from "../screens/CreateComments";
import EditCompany from "../screens/EditCompany";
import CompanyDetail from '../screens/CompanyDetail'
import { getAllCompanies } from "../services/companies";
import { deleteComments, getAllComments, postComments, putComments, updateComments } from "../services/comments";
import { newCompany, deleteCompanies } from 'react';
import Companies from '../components/Companies';


export default function MainContainer(props) {
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
    }
    retrieveCompanies();
  },[])

  const handleCreate = async (commentData) => {
    const newComment = await postComments(commentData);
    setCompanies(prevState => [...prevState, newCompany])
    history.push('/companies')
  }
  const handleDelete = async (id) => {
    await deleteCompanies(id);
    setComments(prevState => prevState.filter(commentItem => {
      return commentItem.id !== id
    }))
  }
  const handleUpdate = async (id, commentData) => {
    const updatedComment = await putComments(id, commentData);
    setComments(prevState => prevState.map(commentItem => {
      return commentItem.id === Number(id) ? updatedComment : commentItem
    }))
    history.push('/comments')
  }


  useEffect(() => {
    const getAllCompanies = async () => {
      const companyData = await getAllCompanies();
      setCompanies(companyData)
    }  }, [])
    

  return (
  <Switch>
      <Route path='/companies'>
        <Companies 
          companies={companies}/>
      </Route>
      <Route path='/companies/:id/edit'>
        <EditCompany
          companies={companies}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path='/foods/:id'>
        <CompanyDetail
          companies={companies}
        />
        </Route>

      <Route path='/comments'>
        {<Comments
          comments={comments} />/}
        </Route>
  </Switch>
  )
}