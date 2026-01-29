import React from 'react'
import Navbar from '../../components/Navbar'
import { memeImg } from '../../utils'
import Footer from '../../components/Footer'


function Project() {
  return (
    <>
    <Navbar />
    <main className='page-basiclayout overflow-y-auto flex gap-8'>
      <div className="w-full mx-auto px-6 flex flex-col items-center justify-center gap-16">
        <div>
          <img src={memeImg} alt='project-image' />
        </div>
        <div>
          <p className='font-bold text-3xl' >Coming Soon!..</p>
        </div>
      </div>
    </main>
   <Footer />  
    </>
    
  )
}

export default Project