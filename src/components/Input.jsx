import React from 'react'
import '../style/index.css'
import Button from './Button'


export default function Input(props) {
  return (
      <div className='input-container'>
          <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          />
          <Button onClick={props.onClick} user={props.user}/>
      </div>
    )
}
