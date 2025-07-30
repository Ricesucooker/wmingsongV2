import { NavLink, Link } from 'react-router-dom';
import "./navstyle.css";

function Navbar() {
  return (

    <nav>
       
        <div className="wming">
            W.Mingsong
        </div>

        <div>
            <ul >
                <li><Link to="/">Home</Link></li>
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