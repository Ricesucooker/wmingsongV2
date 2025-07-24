import {useState, useEffect} from 'react';
import Loadingscreen from '../../components/Loadingscreen.jsx';

import {iconCat, iconElaina, iconPaimon, iconNobrain} from "../../utils/index.js";

const loadscreen_session_key = 'hasVisitedWhosWatching';

function Whoswatching() {

    const [loading, setLoading] = useState(() =>{
        return sessionStorage.getItem(loadscreen_session_key) ===(null);
    });

    const[isContentVisable, setisContentVisable] = useState(false)

    useEffect(()=>{
        if(loading){   
            const loadingTimer = setTimeout(()=>{
                setLoading(false);
                sessionStorage.setItem(loadscreen_session_key, 'true');
            },3000);
            return ()=> clearTimeout(loadingTimer);}
        },[loading]);

    useEffect(() =>{
        if(!loading){
            const animationDelay = setTimeout(() =>{
                setisContentVisable(true);
            },150);
            return () => clearTimeout(animationDelay);
        }
    }, [loading]);

    if(loading){
        return <Loadingscreen />;
    }

  return (
    <div className={`size-svh flex-center w-screen ${isContentVisable?"animate-fadeInscale" : "opacity-0"}`}>
        <div className="container">
            <h1 className='text-3xl'>Hi, who's watching?</h1>
            <div className="profile-container">
                <div className="profile">
                    <a href="/Top">
                    <div className="profile-icon profile1">
                    <img src={iconElaina} alt='icon1' className="icon-size" />
                    <div>About Top</div>
                    </div>
                    </a>
                    </div>
                <div className="profile">
                    <a href="/Recuiter">
                    <div className="profile-icon profile2">
                        <img src={iconPaimon} alt="icon2" className="icon-size"/>        
                    </div>
                    <div>Recuiter</div>
                    </a>
                </div>
                <div className="profile">
                    <a href="/Photography">
                    <div className="profile-icon profile3">
                        <img src={iconCat} alt="icon3" className="icon-size" />
                        <div>Photography</div>
                    </div>
                    </a>
                </div>
                <div className="profile">
                    <a href="Project">
                    <div className="profile-icon profile4">
                        <img src={iconNobrain} alt="icon4" className="icon-size" />
                        <div>Project</div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Whoswatching