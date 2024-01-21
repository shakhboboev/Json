import React, { useEffect, useState } from 'react'
import './App.css'
import User from './components/User';


const App = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
      console.log(err);
    })
  }

  console.log(users)
  return (
    <div className='App'>
    <h3>React Crud Using Jsonplaceholder</h3>
    <div>
      {
        users.map((user) => (
          <User id={user.id} key={user.id} name={user.name} email={user.email} />
        ))
      }
    </div>
    </div>
  )
}
export default App