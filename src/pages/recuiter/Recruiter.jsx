import React from 'react'
import Navbar from '../../components/Navbar'
import { wmingJPG, githubIcon,emailIcon,linkedinIcon,azureFD, awsCPP, awsSA, awsDA} from '../../utils'
import "./recruiter.css"
import Skillslist from '../../components/Skillslist'
import Footer from '../../components/Footer'

function Recuiter() {
  return (
    <>
    <Navbar />
    <main>
     
      <section>

        <div className=" md: md:h-[cal(50*h-svh] flex flex-col-reverse ">
         
          <div className="md:flex-center md:flex-col">
          <h1 className="text-3xl text-center font-bold ">
            Woraphong Mingsong
          </h1>

          <p className="text-lg md:text-xl text-center">'Top'</p>
          
          <div className="m-8 place-self-center  ">        
          <p className="text-gray-500 leading-relaxed text-sm md:text-base tracking-tight max-w-3xl">
            An accomplished and highly adaptable professional with extensive IT support and consulting experience, now focused on Cloud-focused <span className='font-bold'>Development, DevOps, and Site Reliability Engineering (SRE)</span>. My background as a Software Support Specialist II includes critical system troubleshooting, automating processes with <span className='font-bold'>PowerShell</span> scripts to enhance efficiency, and ensuring data integrity through expert <span className='font-bold'>MySQL database management</span>. As a Technical Consultant, I successfully managed network infrastructure upgrades, facilitated file migrations to SharePoint, and handled cloud-based Identity Access Management (IAM) for clients, including migrations to Azure Intune.
          <br/>
            My commitment to cloud technology is validated by certifications such as <span className='font-bold'>AWS Solutions Architect - Associate, AWS Developer - Associate, AWS Cloud Practitioner</span>, and <span className='font-bold'>Azure Fundamentals (AZ900)</span>. I actively apply my scripting and automation skills and explore security best practices, including OWASP methodologies, with an interest in penetration testing.
          <br/>
            I am seeking challenging opportunities where I can leverage my blend of hands-on support, automation expertise, and cloud development capabilities to drive operational excellence and system resilience.
          </p>         
          </div>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0">
          <div>
            <img src={wmingJPG} className="w-60 h-60 md:w-80 md:h-80 object-cover grayscale-50 rounded-4xl"/>
          </div>
          
          <div>
            <ul className="flex flex-nowrap items-center justify-around grayscale-75 w-full">
                  <li><a href="mailto:wmingsong.dev@gmail.com"><img src={emailIcon} /> </a></li>
                  <li><a href="https://www.linkedin.com/in/woraphong-mingsong/" target="_blank"><img src={linkedinIcon}/> </a></li>
                  <li><a href="https://github.com/Ricesucooker" target="_blank"><img src={githubIcon} /> </a></li>
                 </ul>
            </div>

            <div className=" flex flex-row text-sm tracking-tight">
                <a href="https://www.credly.com/badges/0ad190d2-cb2b-4a2a-94a8-5f28e41e1600/public_url" target="_blank"><img src={azureFD} className="w-18 h-18 md:w-28 md:h-28 object-scale-down" alt="azure-fundamentals"/></a>
                <a href="https://www.credly.com/badges/fbafd090-0b52-43d0-9686-e63d7f4b834c/public_url" target="_blank"><img src={awsCPP}  className="w-18 h-18 md:w-28 md:h-28 object-scale-down" alt="cloud-practitioner"/></a>
                <a href="https://www.credly.com/badges/ed2e09a9-2a69-40fa-a279-c542740c0b2b/public_url" target="_blank"><img src={awsSA}   className="w-18 h-18 md:w-28 md:h-28 object-scale-down" alt="Solution-Architect"/></a>
                <a href="https://www.credly.com/badges/85646d14-dbf2-415d-9cff-569979bc83dd/public_url" target="_blank"><img src={awsDA}   className="w-18 h-18 md:w-28 md:h-28 object-scale-down" alt="Developer-Associate"/></a>
            </div>
            </div>
            </div>
        </section>



        <section className="flex-center flex-col h-svh" >
         <div className="work ">
          <p className="text-2xl font-bold">Work History</p>
          <a className="text-gray-500" href="https://www.dropbox.com/scl/fi/kxof4wxkzn6vj9twwohmy/Woraphong_Mingsong_CV_updated.pdf?rlkey=1fxqtmgf04oal0buxtnyc3n8o&st=6n9y61bi&dl=1" target="_blank">Full Resume</a>
        
        </div>
        <div>
          <div className="work-exp">
            <p className="font-bold">ConnectWise</p>
            <p className="text-base underline">L2 Software Support Specialist | JUL 2023 - Present</p>
            <ul className="text-sm text-gray-500">
              <li>Automated troubleshooting via PowerShell and Bash scripting, significantly reducing manual server checks and log analysis time.</li>
              <li>Performed comprehensive MySQL database troubleshooting and rebuilds (dump/reload) for cloud and on-premises systems, ensuring data integrity and application functionality.</li>
              <li>Delivered product support for ConnectWise software, including debugging and bug reporting to improve user experience.</li>            
            </ul>
          </div>
         
          <div className="work-exp">
            <p className="font-bold">Wanstor</p>
            <p className='text-base underline'>Technical Consultant | FEB 2019 - APR 2023</p>
            <ul className="text-sm text-gray-500">
              <li>Managed and troubleshooted cloud/hybrid cloud Identity Access Management (IAM), including Single Sign-On (SSO) solutions, ensuring security compliance. </li>
              <li>Migrated over 300 devices to Azure Intune (remote and on-site) and managed network infrastructure upgrades for 10 London sites. </li>
              <li>Developed a new Windows Deployment Service (WDS), reducing new build service request time by 30%.</li>
            </ul>
            <p className="text-base underline">Service Desk Analyst | AUG 2017 - FEB 2019</p>
            <ul className='text-sm text-gray-500'>
              <li>Managed service requests and incidents, ensuring SLA adherence and proper triage. </li>
              <li>Deployed group policy updates for 100% of remote workers during the pandemic. </li>
            </ul>
          </div>
         
          <div className="work-exp">
            <p className="font-bold">Wagamama</p>
            <p className="text-base underline">Junior Front of House Manager | JUN 2016 - AUG 2017</p> 
            <ul className="text-sm text-gray-500">
              <li>Managed front-of-house operations and staff. </li>
              <li>Performed basic troubleshooting of in-store devices (e.g., computers, POS systems) and networking equipment. </li>
            </ul>
          </div>
        </div>

        </section>
        <div className="flex-center">

         <Skillslist />
         </div>
      
    </main>

     <Footer />  

    </>
  )
}

export default Recuiter