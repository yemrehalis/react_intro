import React, { useState } from 'react';
import Tweet from './Tweet';




function App() {

  const [users, setUsers] = useState([

    { name: "Yunus", message: "Hello World" },
    { name: "Emre", message: "Hello World" },
    { name: "Halis", message: "Hello World" }

  ]);

  return (

    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>

  );


}

export default App;





