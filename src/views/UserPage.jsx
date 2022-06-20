import '../style/index.css'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { FiUser, FiBriefcase, FiMapPin, FiArchive, FiUsers, FiArrowLeft } from 'react-icons/fi'
import api from "../services/api"
import RepoList from "../components/RepoList"

export default function Result() {
  const { login }= useParams()

  const [userData, setUserData] = useState({})
  const [userRepos, setRepos] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await Promise.all([
          api.get(`/${login}`),
          api.get(`${login}/repos`)
        ]);
        setUserData(response[0].data)
        setRepos(response[1].data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    getUserData()
  }, [login])
  return (
      <div className='response-container'>
        <div className="nav-container">
        <Link to="/" className="back-button">
          <FiArrowLeft size={18} color="#0f0f0f"/> Voltar
        </Link>
        </div>
        <div className="data-container">
          <div className="user-container">
            <img src={userData?.avatar_url}/>
            <h1>{userData?.name}</h1>
            <p>
              <FiUser size={18} color="#0f0f0f"/>{userData?.login}
            </p>
            <p>
              <FiBriefcase size={18} color="#0f0f0f"/>{userData?.company === null ? "Nenhuma" : userData?.company}
            </p>
            <p>
              <FiMapPin size={18} color="#0f0f0f"/>{userData?.location}
            </p>
            <p>
              <FiArchive size={18} color="#0f0f0f"/>{userData?.public_repos}
            </p>
            <p>
              <FiUsers size={18} color="#0f0f0f"/>{userData?.followers}
            </p>
            </div>
            <div>
            <RepoList props={userRepos}/>
            </div>
          </div>
      </div>
  )
}
