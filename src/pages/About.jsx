import React from 'react'
import Profile from './image'

const user = {
  name: "kashif",
  imageUrl: "./Image/logo_react.jpg",
  imageSize: 70,
};


let data = new Date()
const About = () => {
  return (
    <div className='w-full h-screen flex  items-center   text-6xl text-white  justify-center bg-red-200 font-bold'>
        <h2 className="text-center   ">Well Come TO About</h2> 
        <Profile data={user} date={data}/>
    </div>
  )
}

export default About
