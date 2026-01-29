import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navSVG } from '../utils';

function Navbar() {

  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  return (
    <nav>
      <div>
          <ul className='flex w-full justify-center gap-8 text-gray-500'>
            <li className=" "><NavLink to="/Top">Top</NavLink></li>
            <li className=" "><NavLink to="/Recruiter">Recuiter</NavLink></li>
            <li className=" "><NavLink to="/Photography">Photography</NavLink></li>
            <li className=" "><NavLink to="/Project">Project</NavLink></li>
          </ul>
          {/* <button onClick={()=> SetIsMenuOpen(!isMenuOpen)}>
            <img src={navSVG}/>
          </button>
          <div className={`md:hidden flex-center absolute top-13 left-0 w-full bg-[#1C1C1C] transition-transform duration-300 transform ${isMenuOpen ? "-translate-x-0" : "translate-x-full"}`}>

            <ul className="flex flex-col p-4 space-y-2">
              <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-colors cursor-pointer">
                <NavLink to="/Top" onClick={() => SetIsMenuOpen(false)}>Top</NavLink>
              </li>
              <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-colors cursor-pointer">
                <NavLink to="/Recruiter" onClick={() => SetIsMenuOpen(false)}>Recruiter</NavLink>
              </li>
              <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-colors cursor-pointer">
                <NavLink to="/Photography" onClick={() => SetIsMenuOpen(false)}>Photography</NavLink>
              </li>
              <li className="p-3 hover:bg-[#708238] hover:text-[#3b3b3b] rounded-md transition-colors cursor-pointer">
                <NavLink to="/Project" onClick={() => SetIsMenuOpen(false)}>Project</NavLink>
              </li>
            </ul>
            </div> */}
      </div>
    </nav>
)}

export default Navbar