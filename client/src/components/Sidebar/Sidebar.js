import React,{useContext,useState} from "react";
import "./sidebar.css";

//importando Link desde react route para poder navegar entre las secciones
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../../store/storeProvider";
import { types } from "../../store/storeReducer";
const Sidebar = () => {
  const {user,dispatch} = useContext(StoreContext);
  const location = useLocation();
  const [active, setaActive] = useState('home');
  const setNavActive = (activo) =>{
    console.log(activo)
  }
   if ( user.id === undefined || user.id === null || user === null || location.pathname === '/') {
    return;
  }
   console.log(user.urlProfile)
  return (
    <nav className="main-menu" style={{ position: "fixed",borderRight:'4px solid' }}>
      <ul>
        <div className="grid">
          <div>
            <li>
              <Link to="/home">
                {/* <i className="fa"> */}
                <img src="../LogoF.png" alt="" className="logo" />
                {/* </i> */}
                <span className="nav-text" style={{ height:'91px' }}>
                  JuniorCoderBook
                </span>
              </Link>
             {/*  <Link to="/verificacion">Veri</Link> */}
            </li>
          </div>
          <div>
            <li>
              <Link to="/home" className={setNavActive('home')}>
                <i className="fa fa-home" style={{ fontSize:'40px !important' }}></i>
                <span className="nav-text">Home</span>
              </Link>
            </li>
{/*             <li className="has-subnav">
              <Link to={"/guardados"} className={()=>{ if(active === 'guardados'){return 'active'}}}>
                <i className="fa fa-bookmark" aria-hidden="true"></i>
                <span className="nav-text">Elementos guardados</span>
              </Link>
            </li> */}
            <li className="has-subnav">
              <Link to="/posts">
                <i className="fa fa-pencil-square-o padding-left" style={{paddingLeft:'55px !important'}} aria-hidden="true"></i>
                <span className="nav-text">Post</span>
              </Link>
            </li>
             <li className="has-subnav">
              <Link to="/perfil">
                <i className="fa fa-gear"  aria-hidden="true"></i>
                <span className="nav-text">Configuracion</span>
              </Link>
            </li> 
{/*             <li>
            <Link to="/notification">
                <i className="fa fa-bell" aria-hidden="true"></i>
                <span className="nav-text">Notificaciones</span>
                </ Link >
            </li> */}
            <li>
            <Link to="/notification" onClick={() => {dispatch({type:types.authLogOut})}}>
                <i className="fa fa-sign-out padding-left" aria-hidden="true"></i>
                <span className="nav-text">Log out</span>
                </ Link >
            </li>
          </div>

{/*           <div className="logout"  onClick={() => {dispatch({type:types.authLogOut})}} >
            <li>
              <a href="/">

                <img src={user.urlProfile} alt="" style={{ marginTop: "22px"}} className="logo2" />

                <span className="nav-text" style={{ padding: "10px",width:'250px',height:'91px' }}>
                  Log-out
                </span>
              </a>
            </li>
          </div> */}
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
