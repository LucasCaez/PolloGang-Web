import Barra from "../componentes/barra";
import './css/404.css'



function PageNotFound() {
  return (

<>

 
 <div className="error404">
<div className="info">
<h1>Error <span style={{ color:"#ffde59"}}>404</span></h1>
 <a>Página no encontrada</a><br></br>
 <a href="/" style={{ color:"#ff9759"}}><i class="fa-sharp fa-solid fa-arrow-left" style={{color:"#ff9759"}}></i> volver</a>
</div>
 </div>
 
 </>
  );
}

export default PageNotFound;
