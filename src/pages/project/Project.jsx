import React from 'react'
import Navbar from '../../components/Navbar'
import { memeImg } from '../../utils'
import Footer from '../../components/Footer'


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
   <Footer />  
    </>
    
  )
}

export default Project