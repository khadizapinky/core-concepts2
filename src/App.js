import React, {useState, useEffect} from "react";

import './App.css';

function App() {
     
 
 
  return (
    <div className="App">
      <header className="App-header">
       
        <p>

          <Counter></Counter>
          <Users></Users>
        </p>
       
      </header>
    </div>
  );
}
function Counter()  {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
       const newCount= count+1;
       setCount(newCount);
  }
  return (
   <div>
     <h1> count:{count}</h1>
     <button onClick={handleIncrease}>Increase</button>
   </div>
 )
  
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
      <div>
        <h1>Dynamic users:{users.length}</h1>
        <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
        </ul>
      </div>
  )
}

export default App;
