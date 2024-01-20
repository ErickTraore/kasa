import '../sass/mains.scss';
import logoAll from '../assets/logo/LOGOcalc.png';
import coppright from  '../assets/logo/copright.png'
function Footer() {
    return( 
        <div className="footer">
             <div class="footer__logo">
                <img  src={`${logoAll}`} alt=""
                />
            </div>
            <div class="footer__coppright">
                <img src={`${coppright}`} alt="" />
            </div>
        </div>
  )
}
export default Footer;
