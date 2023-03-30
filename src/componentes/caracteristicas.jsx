import './css/caracteristicas.css'


function Caracteristicas() {

  return (
    <div className='Caracteristicas'>

      <h1 id='c-2'>CARACTERÍSTICAS</h1>

      <div className="in">
        <div className="i">
          <h1 id='c-1'>CARACTERÍSTICAS</h1>

          <div className="info">
            <i class="fa-brands fa-youtube"></i>
            <h3>+600 <span style={{ color: "#ffde59" }}>subs</span></h3>
          </div>

          <div className="info">
            <i class="fa-solid fa-eye"></i>
            <h3>+50.000 <span style={{ color: "#ffde59" }}>views</span></h3>
          </div>

          <div className="info">
            <i class="fa-brands fa-discord"></i>
            <h3>+1000 <span style={{ color: "#ffde59" }}>miembros</span></h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Caracteristicas;
