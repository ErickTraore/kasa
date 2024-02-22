import { Outlet } from "react-router-dom";
import logoAll from '../assets/logo/LOGO.png';
import '../sass/mains.scss';
import NavBar from "./NavBar";
import Footer from "./Footer"

const Layout = () => {

return (
    <>
      <div className="layout">
          <div className="layout__heading">
                <div className="layout__heading__logo">
                    <img  src={`${logoAll}`} alt=""
                    />
                </div>
                <div className="layout__heading__navbar"> 
                      <NavBar />
                </div>
          </div>
      </div>
      < Outlet />
      < Footer />
    </>
  )
};

export default Layout;