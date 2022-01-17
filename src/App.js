import react, { useContext } from 'react';
import './App.css';
import Home from './Components/Home.js/Home';
import Signing from './Components/Signing/Signing';
import AuthContext from './store/auth-context';


function App() {
  const ctx = useContext(AuthContext)

  return (

    <>

      {!ctx.isLoggedin && <Signing></Signing>}
      {ctx.isLoggedin && <Home></Home>}



    </>

  )
}

export default App;
