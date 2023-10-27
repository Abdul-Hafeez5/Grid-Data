import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import GridData from "./Components/GridData";

function App() {
  const [users, setUsers] = useState([]);
  const [showGrid, setShowGrid] = useState(false);
  const handleGetUserClick = () => {
    fetch("https://reqres.in/api/users?page=1").then((response) =>
      response
        .json()
        .then((data) => {
          setUsers(data.data);
          setShowGrid(true);
          console.log(data);
        })
        .catch((error) => {
          console.error("error occur while fetching data", error);
        })
    );
  };
  return (
    <div className="App">
      <Navbar fetchUsrs={handleGetUserClick} />
      {showGrid && <GridData users={users} />}
    </div>
  );
}

export default App;
