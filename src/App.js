import './App.css';
import Banner from './Components/Banner';
import Bottom from './Components/Bottom'
import NavBar from './Components/NavBar';
import Rows from './Components/Rows';
import { Route, Switch } from 'react-router-dom';

function App() {


  return (
    <>

      <Switch>
        <Route path='/'>
          <NavBar></NavBar>
          <Banner></Banner>
          <Rows></Rows>
          <Bottom></Bottom>

        </Route>
      </Switch>

    </>

  )
}

export default App;
