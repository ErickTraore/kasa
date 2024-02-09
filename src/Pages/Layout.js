import { Outlet, Link } from "react-router-dom";
import logoAll from '../assets/logo/LOGO.png';
import '../sass/mains.scss';
const Layout = () => {
  return (
    <>
      <div className="group">
            <div class="group__logo">
                <img  src={`${logoAll}`} alt=""
                />
            </div>
            <div className="group__navbar"> 
                    <div class="group__navbar__acueil">
                        <Link to="/">Accueil</Link>
                    </div>
                    <div className="group__navbar__apropos">
                        <Link to="/Apropos ">A Propos</Link>
                    </div>
            </div>
        </div>
   

      <Outlet />
    </>
  )
};

export default Layout;