import React from 'react'
import Result from './components/Result'

export default function Profile({props}) {
  return (
    <div>
        <Result props={props.context}/>
    </div>
  )
}
