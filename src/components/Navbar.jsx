import { Link } from 'react-router-dom';


function Navbar() {
  return (

    <nav className='h-16 bg-green-500 flex flex-wrap mx-auto items-center w-screen'>
        <div className='font-bold decoration-0 text-3xl'>
            <a>W.Mingsong</a>
        </div>

        <div >
            <ul className='flex flex-row gap-4 ' >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Top">Top</Link></li>
                <li><Link to="/Recuiter">Recuiter</Link></li>
                <li><Link to="/Photography">Photography</Link></li>
                <li><Link to="/Project">Project</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar