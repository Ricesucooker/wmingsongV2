import React from 'react'
import Navbar from '../../components/Navbar'
import { memeImg } from '../../utils'


function Project() {
  return (
    <>
    <Navbar />
    <main>
      <div className="flex-center flex-col w-svw">
        <p className=' font-bold text-3xl' >Coming Soon!..</p>
        <img src={memeImg} alt='project-image' />
      </div>
    </main>
    </>
    
  )
}

export default Project