import './App.css';
import Header from './components/Header'; 
import Main from './Main';
//import Footer from './components/Footer';
import "./index.css";
import User from './components/User';
import { useState} from 'react';
import UserContext from './components/UserContext';

function App() {

  const[user, setUser] = useState('');

  return (
    <UserContext.Provider value={{user, setUser}}>
    <div>
        <Header/>
        <User/>
        <h1>Welcome {user}</h1>
        <Main/>
    </div>
    </UserContext.Provider>
   
  );
}

export default App;
