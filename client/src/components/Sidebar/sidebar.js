import React from 'react';
import './sidebar.css';

//importando Link desde react route para poder navegar entre las secciones
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return (
        <nav className="main-menu" style={{position: 'fixed'}}>
            <ul>
            <div className="grid">
                <div>
                    <li>
                        <Link to="/">
                            <i className="fa">
                            <img src="../LogoF.png" alt="" className="logo" />
                            </i>
                            <span className="nav-text" style={{padding: '10px'}}>
                                JuniorCoderBook
                            </span>
                        </Link>
                    </li>
                </div>
                <div>
                    <li>
                        <Link to="/">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">
                                Inicio
                            </span>
                        </Link>
                    
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                        <i className="fa fa-bookmark" aria-hidden="true"></i>
                            <span className="nav-text">
                                Elementos guardados
                            </span>
                        </a>
                        
                    </li>
                    <li className="has-subnav">
                        <Link to="/posts">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            <span className="nav-text">
                                Post
                            </span>
                        </Link>
                        
                    </li>
                    <li className="has-subnav">
                        <Link to="/perfil">
                        <i className="fa fa-users" aria-hidden="true"></i>
                            <span className="nav-text">
                                Usuarios
                            </span>
                        </Link>
                    
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-bell" aria-hidden="true"></i>
                            <span className="nav-text">
                                Notificaciones
                            </span>
                        </a>
                    </li>
                </div>

                <div className="logout">
                    <li>
                        <a href="">
                            <i className="fa">
                            <img src="../profile 1.png" alt="" className="logo2" />
                            </i>
                            <span className="nav-text" style={{padding: '10px'}}>
                                Julia Rodriguez
                            </span>
                        </a>
                    </li> 
                </div>
            </div>    
            </ul>
        </nav>
    )
}

export default Sidebar;