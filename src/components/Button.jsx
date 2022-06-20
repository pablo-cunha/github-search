import "../style/index.css"
import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

export default function Button(props) {
  return (
    <div>
      <Link to={`/user/${props.user}`}>
        <button className="search-button">
        <FiSearch size={25} color="#0f0f0f"/>
        </button>
      </Link>
    </div>
  )
}
