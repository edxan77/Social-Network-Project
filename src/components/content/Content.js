import "./content.css"
import {Route, Routes} from "react-router-dom";
import Photo from "../../pages/photos/Photo";
import Feed from "../../pages/feed/Feed";
import Settings from "../../pages/settings/Settings";


function Content() {
    return (
        <div className={"content"}>
            <Routes>
                <Route exact path={"/"} element={<Feed/>}/>
                <Route exact path={"/photo"} element={<Photo/>}/>
                <Route exact path={"/settings"} element={<Settings/>}/>
            </Routes>
        </div>
    );
}
export default Content;