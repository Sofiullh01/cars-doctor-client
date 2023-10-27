import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navber from "../Shared/Navber";


const MainRoute = () => {
    return (
        <div>
            <Navber/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainRoute;