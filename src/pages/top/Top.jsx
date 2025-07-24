import React from 'react';
import Navbar from "../../components/Navbar.jsx"
import { topPic, linkedinIcon, instaIcon, githubIcon, emailIcon  } from '../../utils/index.js';
import "./top.css"

function Top() {
  return ( 
    <>
    <Navbar />

    <main>
      <div className="w-full">
        <div className="flex items-center gap-4">
          <div className="border-4 border-white">
            <img src={topPic} className="h-auto max-w-sm "/>
          </div>

          <div>
            <h2>Top</h2>
            <h1>Woraphong Mingsong</h1>
            <p>Cloud & DevOps Engineer</p>

            <div>
              <ul>
                <li><img src={emailIcon} />Email: wmingsong.dev@gmail.com</li>
                <li><img src={linkedinIcon}/>LinkedIn: Woraphong Mingsong</li>
                <li><img src={githubIcon} />GitHub: @Ricesucooker</li>
                <li><img src={instaIcon} />Instergram: @matchaxmoments </li>
              </ul>
            </div>
          </div>

        </div>
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
        <div>

        </div>

      </div>
    </main>
    </>
  )
}

export default Top