import React from 'react'

export default function RepoList({props}) {
  return (
      <div>
        <h1>Repos</h1>
        {
            props.map((repo) => {
                return  (
                    <div key={repo.id}>
                        <h1>{repo.name}</h1>
                        <p>{repo.description}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
