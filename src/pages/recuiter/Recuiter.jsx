import React from 'react'
import Navbar from '../../components/Navbar'
import { wmingJPG } from '../../utils'

function Recuiter() {
  return (
    <>
    <Navbar />
    <main>
      <div className='w-full'>
        <div>
          <h1>Woraphong Mingsong</h1>
          <img src={wmingJPG} className='h-auto w-sm'/>
        </div>
        <div>
          <p>
            An accomplished and highly adaptable professional transitioning from extensive IT support and consulting into Cloud-focused Development, DevOps, or Site Reliability Engineering.
            My experience as a Software Support Specialist II involved critical system troubleshooting, automating processes with PowerShell scripts to enhance efficiency, and ensuring data integrity through expert MySQL database management. 
            As a Technical Consultant, I successfully managed network infrastructure upgrades, facilitated file migrations to SharePoint, 
            and handled cloud-based Identity Access Management (IAM) for clients, including migrations to Azure Intune.
          </p>
          <br/>
          <p>
            My commitment to cloud technology is validated by certifications such as 
            AWS Solutions Architect - Associate , 
            AWS Developer - Associate , 
            AWS Cloud Practitioner , and 
            Azure Fundamentals (AZ900). 
          </p>
          <br/>
          <p>
            I am currently advancing my scripting and automation skills and exploring security best practices, including OWASP methodologies, with an interest in penetration testing. 
            I am seeking challenging opportunities where I can leverage my blend of hands-on support, automation expertise, and growing cloud development capabilities to drive operational excellence and system resilience.</p>
        </div>
      </div>
    </main>
    </>
  )
}

export default Recuiter