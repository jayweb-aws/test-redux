import React from "react";
import './App.css';
import Login from './component/Login';
import Protected from './component/Protected';

function App() {
  return (
    <div className="App">
      <Protected>
        <Login />
      </Protected>
    </div>
  );
}

export default App;