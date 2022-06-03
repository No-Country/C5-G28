//importar las secciones para que sea posible el enrutamiento.
import Home from "./layouts/Home";
import Login from './layouts/login';
import Registro from './layouts/registro';
import Posts from './layouts/Post';
import UserProfile from './layouts/userProfile';

const rutas = [
    {
        ruta: '/',
        componente: <Home />
    },
    {
        ruta: '/login',
        componente: <Login />
    },
    {
        ruta: '/registro',
        componente: <Registro />
    },
    {
        ruta: '/posts',
        componente: <Posts />
    },
    {
        ruta: '/perfil',
        componente: <UserProfile />
    },
]

export default rutas;