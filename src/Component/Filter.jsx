import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
  const [searchparam, setsearchparam] =  useSearchParams()
  const age = searchparam.get("age")
  const city = searchparam.get("city")
  return (
    <>
    <h1>Filter</h1>
    <h2>Age is {age}</h2>
    <h2>City is {city}</h2>
    <input type="text" name="" id="" onChange={(e)=> setsearchparam({age: e.target.value, city: "varanasi"})} />
    <button onClick={()=> setsearchparam({city: "mumbai"})}>set city</button>
    </>
  )
}

export default Filter