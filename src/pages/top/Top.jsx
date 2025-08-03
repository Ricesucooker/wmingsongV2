import React from 'react';
import Navbar from "../../components/Navbar.jsx"
import Skillslist from '../../components/Skillslist.jsx';
import { topPic, linkedinIcon, instaIcon, githubIcon, emailIcon, heroMP4  } from '../../utils/index.js';
import "./top.css"
import Footer from '../../components/Footer.jsx';

function Top() {
  return ( 
    <>
    

    <main>
    <Navbar />

       
    <section>    
        <div className="hero">
        <div className="relative">
          <video className="opacity-70 grayscale-75 w-full h-full object-cover" autoPlay muted loop playsInline={true} key={heroMP4} >
          <source src={heroMP4} type="video/mp4" />Your Broswer does not support video tag</video>

          <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="select-none p-4 rounded-lg">
              <h1 className="text-3xl sm:text-5xl font-bold text-shadow-2xs">Woraphong Mingsong</h1>
              <p className="text-lg sm:text-xl">Cloud & DevOps Developer</p>
           </div>
           </div>
        
        </div>
        </div>

    </section>

        <section className="p-4 md:p-8  ">

          <div className="flex-center md:flex-col h-svh ">
          <div className="flex flex-col-reverse md:flex-row justify-center gap-8 md:gap-16 mb-8 ">
          
            <div className=" max-w-lg ">
            <h2 className="text-2xl font-bold mb-4">About:</h2>
               <p className=" leading-relaxed text-gray-500">Hello, I'm Top. I'm passionate about photography and videography, but I'm also driven by a love for problem-solving and continuous learning. On weekends, you can often find me studying at a local cafe, a routine that keeps me grounded and focused on my goals. My professional background is diverse, starting in hospitality before I transitioned into IT support and now into a Software as a Service (SaaS) role. This journey has made me highly adaptable and customer-focused.
                In my free time, I've immersed myself in automation and cybersecurity, currently studying topics from OWASP with the goal of getting into bug bounty. This blend of support, development, and security experience makes me a versatile and inquisitive professional. I believe the more you learn, the more questions you have, and that's where the fun begins.
              </p>
            </div>
            <div className="flex flex-col items-center mt-8 md:mt-0">
              <div>
              <img className="w-60 h-60 md:w-80 md:h-80 object-cover border-4 grayscale-25 rounded-4xl" src={topPic} />
              </div>
              <div>
                <ul className="flex justify-around items-center mt-4 p-2 grayscale-50 ">
                <li><a href="mailto:wmingsong.dev@gmail.com"><img src={emailIcon} /> </a></li>
                <li><a href="https://www.linkedin.com/in/woraphong-mingsong/" target="_blank"><img src={linkedinIcon}/> </a></li>
                <li><a href="https://github.com/Ricesucooker" target="_blank"><img src={githubIcon} /> </a></li>
                <li><a href="https://www.instagram.com/matchaxmoments" target="_blank"><img src={instaIcon} /> </a></li>
              </ul> 
              </div>
            </div>    
          </div>
          </div>

          <div className="flex h-svh flex-col-reverse md:flex-col items-center justify-center">
             <Skillslist />
          </div>
    
          </section>
      <div>
      </div>
    </main>
    <Footer />  
    
    </>
  )
}

export default Top