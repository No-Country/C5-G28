import React,{useContext} from "react";
import "./sidebar.css";

//importando Link desde react route para poder navegar entre las secciones
import { useLocation,NavLink } from "react-router-dom";
import { StoreContext } from "../../store/storeProvider";
import { types } from "../../store/storeReducer";
const Sidebar = () => {
  const {user,dispatch} = useContext(StoreContext);
  const location = useLocation();

   if ( 
     user.id === undefined || 
     user.id === null || 
     user === null || 
     location.pathname === '/' ||
     location.pathname === '/registrarse' ||
     location.pathname === '/verificacion' ||
     location.pathname === '/recuperarpassword') {
    return;
  }
  return ( 
    <nav className="main-menu animate__animated animate__fadeInLeft animate__slow" style={{ position: "fixed",borderRadius:'0 10px 10px 0' }}>
      <ul>
        <div className="grid">
          <div>
            <li>
              <NavLink to="/">
                {/* <i className="fa"> */}
                <img src="../LogoF.png" alt="" className="logo" />
                {/* </i> */}
                <span className="nav-text" style={{ height:'91px' }}>
                  JuniorCoderBook
                </span>
              </NavLink>
             {/*  <NavLink to="/verificacion">Veri</NavLink> */}
            </li>
          </div>
          <div>
            <li>
              <NavLink to="/home">
                <i className="fa fa-home" style={{ fontSize:'40px !important' }}></i>
                <span className="nav-text">Home</span>
              </NavLink>
            </li>
{/*             <li className="has-subnav">
              <NavLink to={"/guardados"} className={()=>{ if(active === 'guardados'){return 'active'}}}>
                <i className="fa fa-bookmark" aria-hidden="true"></i>
                <span className="nav-text">Elementos guardados</span>
              </NavLink>
            </li> */}
            <li className="has-subnav">
              <NavLink to="/posts">
                <i className="fa fa-pencil-square-o padding-left" style={{paddingLeft:'55px !important'}} aria-hidden="true"></i>
                <span className="nav-text">Post</span>
              </NavLink>
            </li>
             <li className="has-subnav">
              <NavLink to="/perfil">
                <i className="fa fa-gear"  aria-hidden="true"></i>
                <span className="nav-text">Configuracion</span>
              </NavLink>
            </li> 
{/*             <li>
            <NavLink to="/notification">
                <i className="fa fa-bell" aria-hidden="true"></i>
                <span className="nav-text">Notificaciones</span>
                </ NavLink >
            </li> */}
            <li>
            <NavLink to="/notification" onClick={() => {dispatch({type:types.authLogOut})}}>
                <i className="fa fa-sign-out padding-left" aria-hidden="true"></i>
                <span className="nav-text">Log out</span>
                </ NavLink >
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
