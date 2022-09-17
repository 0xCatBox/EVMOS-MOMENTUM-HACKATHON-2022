//-------클라이언트 부분--------------------------------------------------------------------------
import React from 'react';
import './App.css';
import { ReactDOM } from 'react';


function App() {

  const [name, setName] = React.useState("hi");
  const req = {
    "Fashion": 10,
    "Food": 10,
    "Travel": 10,
    "Medical": 10,
    "Education": 10,
    "Exercise": 10
  }
  const [adname, setAdname] = React.useState("default name");
  const[adlink, setAdlink] = React.useState("default link");
  const[adinfo, setAdinfo] = React.useState("default info");


  async function callApi() {
    console.log(req);
    const response = await fetch("http://localhost:5000/api/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
      });
    const body = await response.json();
    console.log(body);
    setAdname(body.name);
    setAdlink(body.AdLink);
    setAdinfo(body.description);
  }



  return (
    <div className="App">
      <header className="App-header">
        <h2>
          D-Ad API test page
          <button onClick={callApi}>Testing</button>
          <p>Ad_name: {adname}</p>
          <p>Ad_link: {adlink}</p>
          <p>Ad_description: {adinfo}</p>
        </h2>
        <p></p>
      </header>
    </div>
  );
}

export default App;
