import { Route, Routes } from "react-router-dom";

import Whoswatching from "./pages/whoswatching/Whoswatching.jsx";
import Top from "./pages/top/Top.jsx";
import Recruiter from "./pages/recuiter/Recruiter.jsx";
import Photography from "./pages/photography/Photography.jsx";
import Project from "./pages/project/Project.jsx";
import Notfound from "./pages/Notfound.jsx";

function Approute(){
    return(
        <Routes>
            <Route path="/" element={<Whoswatching />}/>
            <Route path="top" element={<Top />}></Route>
            <Route path="recruiter" element={<Recruiter />} />
            <Route path="photography" element={<Photography />}/>
            <Route path="project" element={<Project />} />
            <Route path="*" element={<Notfound/>} />
        </Routes>
    )

}
export default Approute;