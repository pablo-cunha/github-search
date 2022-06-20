import React from 'react'

export default function RepoList({props}) {
  return (
      <div className="repos-container">
        <h1>Repositórios</h1>
        {
            props.map((repo) => {
                return  (
                    <div className='repo-box' key={repo.id}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
