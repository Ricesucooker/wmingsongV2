import Navbar from '../../components/Navbar.jsx'
import Skillslist from '../../components/Skillslist.jsx';
import { Social } from '../../components/social.jsx';
import { heroMP4 } from '../../utils/index.js';

function Top() {
  return ( 
    <div className='page-basiclayout overflow-y-auto flex gap-8 flex-col'>
    <Navbar />
    <main className='flex-grow w-full flex justify-center py-12'>
    <div className='max-w-7xl w-full mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center gap-16'>
    <div className='w-full lg:w-1/2 flex justify-center'>
      <video className='opacity-70 grayscale-[75%] w-full h-auto object-cover shadow-lg' 
      autoPlay muted loop playsInline={true} key={heroMP4}>
        <source src={heroMP4} type='video/mp4'></source></video>
    </div>
    <div className='w-full lg:w-1/2 flex flex-col justify-center space-6 ' >
      <h1 className='flex justify-center text-3xl font-extrabold text-center lg:text-left text-gray-300'>Woraphong Mingsong</h1>
      <div className='flex gap-y-6 p-4 justify-center rounded-xl '>
        <Social />
      </div>
      <p className='text-justify leading-relaxed'>Hi, I'm Top. I navigate the world with a camera in one hand and a terminal in the other. My career has been a journey of adaptation—evolving from the empathy-driven world of hospitality to IT Support, and now to the technical complexities of  Software as a service (SaaS). This path has taught me that every system (and every user) has a unique story. On weekends, you’ll find me at a local cafe, diving deep into automation and cybersecurity, specifically OWASP and bug bounties. I believe that the more you learn, the deeper the rabbit hole goes—and that’s where the fun begins.</p>
    <div className='p-6 rounded-lg mt-4'>
    <div className='mb-4'>
        <p className='flex justify-center font-bold text-2xl mb-2 text-center lg:text-left text-gray-300'>My Toolbox</p>
        <p className='leading-relaxed'>
        I’ve cultivated a hybrid skill set that bridges the gap between operations and engineering. My focus is currently on two pillars: speed and security. This involves streamlining product lifecycles through CI/CD automation while sharpening my defensive skills against modern web threats.
        </p>
    <p className='leading-relaxed mt-2'>A glimpse into my stack:</p>
    </div>
    <div className='grayscale-[75%] hover:grayscale-25 transition-all duration-500'>
      <Skillslist/>
    </div>
    </div>
    </div>
    </div>
    </main>
     </div>  
  )
}

export default Top