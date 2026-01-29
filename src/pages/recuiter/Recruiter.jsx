import React from 'react'
import Navbar from '../../components/Navbar'
import {azureFD, awsCPP, awsSA, awsDA, topPic} from '../../utils'
import Skillslist from '../../components/Skillslist'
import { Social } from '../../components/social'


function Recuiter() {
  return (
    <div className='page-basiclayout overflow-y-auto flex flex-col gap-4'>
    <Navbar />
    
    <main className='flex-grow w-full flex flex-col items-center py-12 gap-12'>
      
      <section className='max-w-7xl w-full mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
        <div className='w-full lg:w-1/2 flex flex-col items-center gap-8'>
          <img src={topPic} alt='profilepicture' 
          className='h-[40vh] w-auto max-w-full object-contain grayscale-25' />
          <div className='flex flex-col gap-6 w-full items-center'> 
            <div className='flex gap-y-6 p-4 justify-center rounded-xl '>
              <Social />
            </div>
            <div className='flex flex-wrap justify-center gap-4 '>
              <img src={awsCPP} alt="AWSCCP" className='cert-icon' />
              <img src={azureFD} alt="AZ104" className='cert-icon' />
              <img src={awsSA} alt="AWSSA"  className='cert-icon'/>
              <img src={awsDA} alt="AWSDA"  className='cert-icon'/>
            </div>
          </div>
          </div>
          <div className='w-full lg:w-1/2 flex flex-col  space-y-6'>
          <h1 className='flex justify-center text-3xl font-extrabold text-center lg:text-left text-gray-300'>Woraphong Mingsong</h1>            
            <div className='text-justify leading-relaxed space-y-4'>
              <p>
                An accomplished and highly adaptable professional with extensive IT support and consulting experience, now focused on Cloud-focused <span className='font-bold text-gray-400'>Development, DevOps, and Site Reliability Engineering (SRE)</span>. 
              </p>
              <p>
                My background as a Software Support Specialist II includes critical system troubleshooting, automating processes with <span className='font-bold text-gray-400'>PowerShell</span> scripts to enhance efficiency, and ensuring data integrity through expert <span className='font-bold text-gray-400'>MySQL database management</span>. As a Technical Consultant, I successfully managed network infrastructure upgrades, facilitated file migrations to SharePoint, and handled cloud-based Identity Access Management (IAM) for clients, including migrations to Azure Intune.
              </p>
              <p>
                My commitment to cloud technology is validated by certifications such as <span className='font-bold text-gray-400'>AWS Solutions Architect - Associate, AWS Developer - Associate, AWS Cloud Practitioner</span>, and <span className='font-bold text-gray-400'>Azure Fundamentals (AZ900)</span>. I actively apply my scripting and automation skills and explore security best practices, including OWASP methodologies, with an interest in penetration testing.
              </p>
              <p className="font-medium text-gray-400 pt-2">
                I am seeking challenging opportunities where I can leverage my blend of hands-on support, automation expertise, and cloud development capabilities to drive operational excellence and system resilience.
              </p>
            </div>
            <div className='grayscale-[75%] hover:grayscale-25 transition-all duration-500'>
              <Skillslist/>
            </div>        
          </div>
      </section>
      <section className='max-w-7xl w-full mx-auto px-6 lg:px-12 gap-4'>
        <div className='max-w-7xl w-full mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 lg:justify-around'>
        <div className='text-3xl font-extrabold underline text-center lg:text-left text-gray-300'>
          <p>Experiences:</p>
        </div>
        <div className=' w-full lg:w-2/3'>
          <div className='work-container flex flex-col gap-8'>
            <div className='con flex flex-col gap-2 border-b-2 border-l-4 border-gray-700 pl-6 hover:border-gray-500 transition-colors duration-300'>
             <p className='text-xl font-bold text-gray-300'>ConnectWise</p>
             <p className='text-sm italic'>Software Support Specialist II | 2023 - Present</p>
             <ul className='list-disc pl-5 space-y-1 text-justify'>
                <li>Engineered PowerShell and Bash automation scripts to streamline log analysis and environmental troubleshooting, reducing resolution time by roughly 70%.</li>
                <li>Managed data integrity by diagnosing and repairing corrupted MySQL databases, while actively identifying application bugs to improve system reliability.</li>
             </ul>
            </div>
            <div className='con flex flex-col gap-2 border-b-2 border-l-4 border-gray-700 pl-6 hover:border-gray-500 transition-colors duration-300'>
              <p className='text-xl font-bold text-gray-300'>Wanstor</p>
              <p className='text-sm italic'>Technical Consultant | 2019 - 2023</p>
              <ul className='list-disc pl-5 space-y-1 text-justify'>
                <li>Led cloud infrastructure projects, including a 300-device migration to Azure Intune and network upgrades across 10 sites.</li>
                <li>Designed and implemented a Windows Deployment Service (WDS) that reduced build times by 30%, and managed Identity Access Management (IAM) for hybrid cloud environments.</li>
              </ul>
            </div>
            <div className='con flex flex-col gap-2 border-b-2 border-l-4 border-gray-700 pl-6 hover:border-gray-500 transition-colors duration-300'>
              <p className='text-xl font-bold text-gray-300'>Wanstor</p>
              <p className='text-sm italic'>Service Desk Analyst | 2017 - 2019</p>
              <ul className='list-disc pl-5 space-y-1 text-justify'>
                <li>Maintained strict SLA compliance for critical incidents, managing remote group policy deployments and corporate device imaging.</li>
                <li>Executed time-critical infrastructure upgrades, including POS systems and Oracle SQL databases, ensuring minimal downtime for enterprise clients.</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>

    </main>
    </div>
  )
}

export default Recuiter