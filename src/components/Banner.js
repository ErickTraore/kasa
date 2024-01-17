import '../sass/mains.scss';
import logoAll from '../assets/logo/LOGO.png';

function Banner() {
    return( 
        <div className="group">
             <div class="group__logo">
                <img  src={`${logoAll}`} alt=""
                />
            </div>
            <div className="group__navbar"> 
                <div class="group__navbar__acueil">
                  <p>Accueil</p>
                </div>
                <div className="group__navbar__apropos">
                <p>A Propos</p>

                  
                </div>
          
            </div> 
        </div>
  )
}

export default Banner