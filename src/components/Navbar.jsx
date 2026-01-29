import React  from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav>
      <div>
          <ul className='flex w-full justify-center gap-8 text-gray-500'>
            <li className=" "><NavLink to="/Top">Top</NavLink></li>
            <li className=" "><NavLink to="/Recruiter">Recuiter</NavLink></li>
            <li className=" "><NavLink to="/Photography">Photography</NavLink></li>
            <li className=" "><NavLink to="/Project">Project</NavLink></li>
          </ul>
      </div>
    </nav>
)}

export default Navbar