import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Notfound() {
  return (
    <>
    <main>
        <Navbar />
        <div className='flex-center w-full h-svh'>
            <div className='font-bold text-5xl'>404 Not Page Found</div>
        </div>
    </main>
     <Footer />
    </>
  )
}

export default Notfound