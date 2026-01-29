import React, {useRef} from 'react';
import Navbar from '../../components/Navbar'
import { Social } from '../../components/social'
import { imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix } from '../../utils'


function Photography() {

  const portfolioImages=[imgOne,imgTwo,imgThree,imgFour,imgFive,imgSix];

  const scrollRef = useRef(null);


  const scroll = (direction) =>{
    const {current} = scrollRef;
    if (current){
      const scrollAmount = direction === 'left' ? -350: 350;
      current.scrollBy({left:scrollAmount, behaviour:'auto'})
    }
  }


  return (
    <div className='page-basiclayout overflow-y-auto flex gap-8 flex-col'>
      <Navbar />
      <main className='flex-grow w-full flex flex-col items-center py-12 gap-12'>
        <div>
          <p>Online Handler: Matcha</p>
        </div>

        <div className='relative w-full max-w-5xl px-4 group'>
          <button 
            onClick={() => scroll('left')}
            className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm'
            aria-label="Scroll Left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div 
            ref={scrollRef}
            className='flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-2 scroll-smooth no-scrollbar'
          >
            {portfolioImages.map((src, index) => (
              <div 
                key={index} 
                className='snap-center shrink-0 w-full sm:w-80 h-96 bg-white shadow-lg overflow-hidden relative group/card rounded-xl'
              >
                <img 
                  src={src} 
                  alt="Portfolio work" 
                  className='w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110' 
                />
                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => scroll('right')}
            className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm'
            aria-label="Scroll Right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>
        <div className='flex gap-y-6 p-4 rounded-xl '>
          <Social />
        </div>
        <div className='text-center'>
          <p>"A camera is a tool for learning how to see without a camera." - Dorothea Lange</p></div>
        <div className="flex flex-col items-center gap-6 text-center max-w-lg">
          <p className="text-lg">View more of my work on Behance or Instagram.</p>
          <p>I look forward to seeing you soon.</p>  
            <a 
              href="https://www.behance.net/MatchaxLatte" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded hover:bg-green-400 transition-all duration-300 shadow-md hover:shadow-lg">
              <p>Visit My Behance</p>
            </a>
        </div>
      </main>
    </div>
  )
}
export default Photography