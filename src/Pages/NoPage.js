const NoPage = () => {
    return <div className="nopage"> 
              <div  className="nopage__error" > 
                  <div className="nopage__error__404" > 404</div>
              </div> 
              <div className="nopage__content"> 
                  <p className="nopage__content__text"> 
                      <span>Oups! La page que </span>
                      <span> vous demandez n'existe pas.</span>
                  </p>
              </div> 
              <div className="nopage__chariot"> 
                  <p className="nopage__chariot__accueil"> retourner sur la page d'accueil</p>
              </div> 
           </div> 
  };
  
  export default NoPage;