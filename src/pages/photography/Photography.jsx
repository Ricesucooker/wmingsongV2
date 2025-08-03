import React from 'react'
import Navbar from '../../components/Navbar'
import { instaIcon, imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix } from '../../utils'
import Footer from '../../components/Footer'

function Photography() {
  return (
     <>
     <Navbar />
     <main>
      <div>

        <div className=" flex flex-col gap-8">

          <p className='flex-center text-6xl font-bold'>Capture The Moment</p>
          
        <a href="https://www.instagram.com/matchaxmoments" type="_blank" rel="noopener"> <p className='flex-center'><img className='w-5 grayscale-25' src={instaIcon} alt='instergram-icon' />@matchaxmoment</p></a>

        </div>
        <div className="flex-center w-svw">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <img src={imgOne} />
            </div>
            <div >
              <img src={imgTwo} />
            </div>
             <div >
              <img src={imgThree} />
            </div>
             <div >
              <img src={imgFour} />
            </div>
             <div >
              <img src={imgFive} />
            </div>
             <div >
              <img src={imgSix} />
            </div>
          </div>
          </div>
          <p className="flex-center">"A camera is a tool for learning how to see without a camera." - Dorothea Lange</p>
    
      </div>
     </main>
     <Footer />
    </>
  )

}

export default Photography