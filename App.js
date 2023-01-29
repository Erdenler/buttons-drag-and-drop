import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react"


function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios('Link')
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div > <h1>Users</h1>

      {isLoading && <div>Loading...</div>}

      {users.map((user) => (
        <div key={user.id}>user.name  </div>
      ))}
    </div >
  );
}

export default App;
