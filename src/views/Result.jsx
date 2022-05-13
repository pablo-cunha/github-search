import React from 'react'

export default function Result({props}) {
  return (
      <div>
          <img src={props.avatar_url}/>
          <h1>{props.name}</h1>
          <h2>{props.login}</h2>
          <p>{props.company === null ? "Nenhuma" : props.company}</p>
          <p>{props.location}</p>
          <p>{props.public_repos}</p>
          <p>{props.followers}</p>
      </div>
  )
}
