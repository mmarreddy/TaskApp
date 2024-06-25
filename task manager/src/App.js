import './App.css';
import Header from './components/Header'; 
import Main from './Main';
//import Footer from './components/Footer';
import "./index.css";
import User from './components/User';
import { useState} from 'react';
import UserContext from './components/hooks/UserContext';
import useMode from './components/hooks/useMode';

function App() {

  const[user, setUser] = useState('');
  const {mode, toggleMode} = useMode();
  return (
    <UserContext.Provider value={{user, setUser}}>
    <div className={mode}>
        <Header/>
        <User/>
        <h1>Welcome {user}</h1>
        <Main/>
        <button onClick={toggleMode}>Dark Mode</button>
    </div>
    </UserContext.Provider>
   
  );
}

export default App;
