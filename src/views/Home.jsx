import React from 'react'
import Input from '../components/Input'
import Title from '../components/Title'
import '../style/index.css'

export default function Home(props) {
  return (
    <div className='container'>
        <Title/>
        <Input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        user={props.user}
        />
    </div>
  )
}
