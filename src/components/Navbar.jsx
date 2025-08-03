import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navSVG } from '../utils';
import "./navstyle.css";


function Navbar() {

  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  return (

    <nav className="bg-[#1C1C1C] sticky top-0 z-50 p-4 w-full">

        <div className="mx-auto gap-8 justify-between items-center">

          <div className="flex justify-between md:justify-around items-center mx-5 p-5">
            <Link className=" top-2 place-self-center font-bold text-5xl" to="/">W.Mingsong</Link>

             <ul className="hidden md:flex gap-8 py5 font-semibold text-base" >

                <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-all cursor-pointer"><NavLink to="/Top">Top</NavLink></li>
                <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-all cursor-pointer"><NavLink to="/Recruiter">Recuiter</NavLink></li>
                <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-all cursor-pointer"><NavLink to="/Photography">Photography</NavLink></li>
                <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-all cursor-pointer"><NavLink to="/Project">Project</NavLink></li>
            </ul>
            <button className="md:hidden w-14"
            onClick={()=> SetIsMenuOpen(!isMenuOpen)}>
               <img src={navSVG} alt="NavMenu"  />
            </button>
            <div className={`md:hidden flex-center absolute top-13 left-0 w-full bg-[#1C1C1C] transition-transform duration-300 transform ${isMenuOpen ? "-translate-x-0" : "translate-x-full"}`}>

        <ul className="flex flex-col p-4 space-y-2">
          <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-colors cursor-pointer">
            <NavLink to="/Top" onClick={() => setIsMenuOpen(false)}>Top</NavLink>
          </li>
          <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-colors cursor-pointer">
            <NavLink to="/Recruiter" onClick={() => setIsMenuOpen(false)}>Recruiter</NavLink>
          </li>
          <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-colors cursor-pointer">
            <NavLink to="/Photography" onClick={() => setIsMenuOpen(false)}>Photography</NavLink>
          </li>
          <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-colors cursor-pointer">
            <NavLink to="/Project" onClick={() => setIsMenuOpen(false)}>Project</NavLink>
          </li>
        </ul>
      </div>
          </div>

        </div>
        
    </nav>
  )
}

export default Navbar