import { githubIcon, emailIcon,linkedinIcon, instaIcon } from "../utils"

export function Social(){
    return(
        <>
        <a href="https://github.com/Ricesucooker" target="_blank" rel="noopener"><img src={githubIcon} alt='Github' className='social-icon' /></a>
        <a href="mailto:wmingsong.dev@gmail.com"><img src={emailIcon} alt='Email' className='social-icon' /></a>
        <a href="https://www.linkedin.com/in/woraphong-mingsong" target="_blank" rel="noopener"><img src={linkedinIcon} alt='linkedin' className='social-icon' /></a>
        <a href="https://www.instagram.com/matchaxmoments" target="_blank" rel="noopener"><img src={instaIcon} alt='Instagram' className='social-icon' /></a>
        </>
    )
}