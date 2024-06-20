import './App.css';
import Header from './components/Header'; 
import Main from './Main';
//import Footer from './components/Footer';
import "./index.css";
import User from './components/User';
import { useState} from 'react';

function App() {

  const[user, setUser] = useState('');

  return (
    <div>
        <Header/>
        <User user={user} setUser={setUser}/>
        <Main/>
    </div>
   
  );
}

export default App;
