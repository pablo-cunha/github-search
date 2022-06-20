import "./style/index.css";
import React, { useState } from "react"
import UserPage from './views/UserPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home";

function App() {

  const [input, setInput] = useState('')
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={
              <Home
                type="text"
                placeholder="Digite um username..."
                value={input}
                onChange={(event) => {setInput(event.target.value)}}
                user={input}
              />}/>
            <Route path="/user/:login" element={<UserPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
