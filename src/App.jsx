import React, { useState } from "react";
import Title from './components/Title'
import Input from './components/Input'
import Button from './components/Button'
import Result from './views/Result'
import api  from './services/api'
import RepoList from "./components/RepoList";

function App() {
  const [input, setInput] = useState('')
  const [githubResponse, setResponse] = useState({})
  const [userRepos, setRepos] = useState([])
  
  async function handleClick() {

    if (input === '') {
      alert("Username inválido")
      return
    }
    
    try {
      const response = await api.get(`${input}`)
      setResponse(response.data)
      console.log(githubResponse)
      setInput("")
    } catch (error) {
      alert("Ops! erro ao buscar usuário :(")
    }

    try {
      const repoResponse = await api.get(`${input}/repos`)
      setRepos(repoResponse.data)
      console.log(userRepos)
    } catch (error) {
      alert("Ops! erro ao buscar repositórios :(")
    }
  }
  return (
      <div>
      <Title/>
      <Input
      type="text"
      placeholder="Digite um username..."
      value={input}
      onChange={(event) => {setInput(event.target.value)}}
      />
      <Button onClick={handleClick}/>
      {Object.keys(githubResponse).length > 1 && (
        <>
        <Result props={githubResponse}/>
        <RepoList props={userRepos}/>
        </>
      )}
      </div>
  );
}

export default App;
