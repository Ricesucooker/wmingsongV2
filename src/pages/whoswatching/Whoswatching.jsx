import {useState, useEffect} from 'react';
import Loadingscreen from '../../components/Loadingscreen.jsx';

import {iconMe, iconPhoto, iconRecrui, iconProject} from "../../utils/index.js";

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
            },175);
            return () => clearTimeout(animationDelay);
        }
    }, [loading]);

    if(loading){
        return <Loadingscreen />;
    }

  return (
    <div className={`size-svh flex-center text-green-700 w-screen ${isContentVisable?"animate-fadeInscale" : "opacity-0"}`}>
        <div className="container">
            <h1 className='text-3xl'>Hi, pick a card?</h1>
            <div className="profile-container">
                <div className="profile">
                    <a href="/Top">
                    <div className="profile-icon profile1">
                    <img src={iconMe} alt='icon1' className="icon-size" />
                    <div>About Top</div>
                    </div>
                    </a>
                    </div>
                <div className="profile">
                    <a href="/Recruiter">
                    <div className="profile-icon profile2">
                        <img src={iconRecrui} alt="icon2" className="icon-size"/>        
                    </div>
                    <div>Recruiter</div>
                    </a>
                </div>
                <div className="profile">
                    <a href="/Photography">
                    <div className="profile-icon profile3">
                        <img src={iconPhoto} alt="icon3" className="icon-size" />
                        <div>Photography</div>
                    </div>
                    </a>
                </div>
                <div className="profile">
                    <a href="Project">
                    <div className="profile-icon profile4">
                        <img src={iconProject} alt="icon4" className="icon-size" />
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