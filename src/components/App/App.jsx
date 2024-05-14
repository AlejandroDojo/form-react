import { useState } from 'react';
import './App.css';
import Form from '../Form/Form';
import Result from '../Result/Result';

const App = () => {

  const [userForm, setUserForm] = useState([]);

  return (
    <div className='app'>
      <Form userForm={userForm} setUserForm={setUserForm} />
      <Result userForm={userForm} />
    </div>
  )
}

export default App