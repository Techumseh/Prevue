import logo from './logo.svg';
import Layout from "./layouts/Layouts"
import { Switch, useHistory } from 'react-router-dom';
import Login from './screens/Login.jsx'
import { useEffect, useState } from 'react';
import Register from './screens/Register';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory();

  useEffect(() => {
      const handleVerify = async () => {
        const userData = await verifyUser();
        setCurrentUser(userData)
      }
      handleVerify();
    },[]);
  

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');

  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }


  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route path='/login'>
          <Login 
            handleLogin={handleLogin} />
        </Route>
        <Route>
          <Register
          handleRegister={handleRegister}/>
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;