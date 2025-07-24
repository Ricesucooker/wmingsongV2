import { Route, Routes } from "react-router-dom";

import Whoswatching from "./pages/whoswatching/Whoswatching.jsx";
import Top from "./pages/top/Top.jsx";
import Recuiter from "./pages/recuiter/Recuiter.jsx";
import Photography from "./pages/photography/Photography.jsx";
import Project from "./pages/project/Project.jsx";

function Approute(){
    return(
        <Routes>
            <Route path="/" element={<Whoswatching />}/>
            <Route path="top" element={<Top />}></Route>
            <Route path="recuiter" element={<Recuiter />} />
            <Route path="photography" element={<Photography />}/>
            <Route path="project" element={<Project />} />
        </Routes>
    )

}
export default Approute;