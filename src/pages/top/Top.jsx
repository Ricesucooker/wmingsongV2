import React from 'react';
import Navbar from "../../components/Navbar.jsx"
import Skillslist from '../../components/Skillslist.jsx';
import { topPic, linkedinIcon, instaIcon, githubIcon, emailIcon, heroMP4  } from '../../utils/index.js';
import "./top.css"

function Top() {
  return ( 
    <>
    

    <main>
    <Navbar />
    <div className="w-full">
        
        <div className="flex flex-col">
    <section>    
        <div className="hero">
        <div className="relative">
          <video className="opacity-70 grayscale-75" autoPlay muted loop playsInline={true} key={heroMP4} >
          <source src={heroMP4} type="video/mp4" />Your Broswer does not support video tag</video>

          <div className="select-none absolute inset-x-0 top-1/2 left-[calc(1/3*50%)] text-center">

              <h1 className="text-5xl font-bold text-shadow-2xs">Woraphong Mingsong</h1>
              <p className="text-xl">Cloud & DevOps Developer</p>
           </div>
        
        </div>
        </div>
    </section>

        <section className='w-full'>

          <div className="about flex flex-row justify-center gap-4">

            <div className='about-me'>
            <h2 className="text-2xl">About:</h2>
               <p>Hi there, I go by Top! 
                  I'm a passionate individual who finds joy in capturing moments through photography and videography, but my curiosity doesn't stop there. 
                  I'm driven by a love for solving problems and an insatiable desire to learn new things. 
                  You'll often find me at a local cafe on the weekends – it's my dedicated space for studying and a truly grounding experience as I work hard towards my goals.</p>
                <br/>
                <p>
                  My professional journey has been incredibly diverse, from my early days as a chef and waiter, to supporting a wide array of clients with their unique IT needs, 
                  and now focusing on a specific Software as a Service (SaaS) product. This varied experience has honed my adaptability and customer-centric approach. Outside of my main roles, 
                  I've immersed myself in the world of automation and security. I'm currently delving into topics from the Open Web Application Security Project (OWASP), with an exciting aspiration to make bug bounty a side hustle. 
                  This blend of experiences, from support to development and security, makes me a truly versatile and adaptable professional. I know there's always more to learn, but that's precisely where the fun begins – the more you understand, 
                  the more questions arise. I guess you could say I'm a very inquisitive individual!"
                </p>
            </div>
            <div className="flex flex-col ">
              <div>
              <img className="w-80 border-4 grayscale-25" src={topPic} />
              </div>
              <div>
                <ul className="flex flex-nowrap justify-around grayscale-50 border-b-2 border-x-4">
                <li><a href="mailto:wmingsong.dev@gmail.com"><img src={emailIcon} /> </a></li>
                <li><a href="https://www.linkedin.com/in/woraphong-mingsong/" target="_blank"><img src={linkedinIcon}/> </a></li>
                <li><a href="https://github.com/Ricesucooker" target="_blank"><img src={githubIcon} /> </a></li>
                <li><a href="https://www.instagram.com/matchaxmoments" target="_blank"><img src={instaIcon} /> </a></li>
              </ul> 
              </div>
            </div>  
          </div>
          </section>
            <div className="fix-ceneter ">
              <Skillslist />
          </div>
          
        </div>
      </div>
      <div>
        
      </div>
    </main>
    
    
    </>
  )
}

export default Top