import React,{useContext,useState} from "react";
import "./sidebar.css";

//importando Link desde react route para poder navegar entre las secciones
import { Link } from "react-router-dom";
import { StoreContext } from "../../store/storeProvider";
import { storeReducer, types } from "../../store/storeReducer";
const Sidebar = () => {
  const {user,dispatch} = useContext(StoreContext);
   

   if (user.length === 0) {
    return;
  }
   if (user.user.id === null){
     return;
   }
   console.log(user.user.urlProfile)
  return (
    <nav className="main-menu" style={{ position: "fixed" }}>
      <ul>
        <div className="grid">
          <div>
            <li>
              <Link to="/home">
                {/* <i className="fa"> */}
                <img src="../LogoF.png" alt="" style={{ marginTop:'20px' }} className="logo" />
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
              <Link to="/home">
                <i className="fa fa-home fa-2x"></i>
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to={"/guardados"}>
                <i className="fa fa-bookmark" aria-hidden="true"></i>
                <span className="nav-text">Elementos guardados</span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="/posts">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                <span className="nav-text">Post</span>
              </Link>
            </li>
            {/* <li className="has-subnav">
              <Link to="/perfil">
                <i className="fa fa-users" aria-hidden="true"></i>
                <span className="nav-text">Usuarios</span>
              </Link>
            </li> */}
            <li>
              <a href="#">
                <i className="fa fa-bell" aria-hidden="true"></i>
                <span className="nav-text">Notificaciones</span>
              </a>
            </li>
          </div>

          <div className="logout"  onClick={() => {dispatch({type:types.authLogOut})}} >
            <li>
              <a href="/">
                {/* <i className="fa"> */}
                <img src={user.user.urlProfile} alt="" style={{ marginTop: "22px"}} className="logo2" />
                {/* </i> */}
                <span className="nav-text" style={{ padding: "10px",width:'250px',height:'91px' }}>
                  Log-out
                </span>
              </a>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
