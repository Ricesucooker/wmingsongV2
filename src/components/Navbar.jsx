import { NavLink, Link } from 'react-router-dom';
import "./navstyle.css";

function Navbar() {
  return (

    <nav className='sticky top-0 z-50 p-4 w-full'>
       
        <div className="wming">
            <Link to="/">W.Mingsong</Link>
        </div>

        <div>
            <ul >
                <li><NavLink to="/Top">Top</NavLink></li>
                <li><NavLink to="/Recuiter">Recuiter</NavLink></li>
                <li><NavLink to="/Photography">Photography</NavLink></li>
                <li><NavLink to="/Project">Project</NavLink></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar