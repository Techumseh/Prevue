import logo from './logo.svg';
import Layout from "./layouts/Layouts"
import { Switch } from 'react-router-dom';
import Login from './screens/Login.jsx'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/login'>

        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
