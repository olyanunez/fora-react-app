import Dashboard from "./app/modules/Dashboard/Dashboard";
import Login from "./app/modules/Usuarios/Login";
import UsuarioCrear from "./app/modules/Usuarios/UsuarioCrear";
import LandingPage from "./app/modules/LandingPages/LandingPage";
import Categorias from "./app/modules/CategoriasEstablecimientos/Categorias";
import RedirecionarALogin from "./Components/Utils/RedireccionarALogin";

/*
    Tipos de Rutas
    1 - Menus
    2 - Menus Opciones
    3 - Atajos
    4 - Paginas de Acceso por URL
*/

const rutas = [
    {name: 'Dashboard', path:'/Dashboard', tipo: 1,exact: true, componente: Dashboard},
    {name: 'Landig Page', path:'/LandingPage',tipo: 4, componente: LandingPage},
    {name: 'Login', path:'/Login',tipo: 4, componente: Login},

    {name: 'Mi cuenta', path:'/Usuario/MiCuenta',tipo: 2, componente: UsuarioCrear},
    {name: 'Mis preferencias', path:'/Usuario/MisPreferencias',tipo: 2, componente: UsuarioCrear},
    {name: 'Mis resevaciones', path:'/Usuario/MisReservaciones', tipo: 3,exact: true, componente: UsuarioCrear},
    {name: 'Visitados', path:'/Usuario/EstablecimientosVisitados', tipo: 3,exact: true, componente: UsuarioCrear},
    {name: 'Usuario', path:'/Usuario', tipo: 1,exact: true, componente: UsuarioCrear},

    // {name: 'Crear Genero', path:'/establecimientos/crear', componente: CrearGenero},
    // {name: 'Editar Genero', path:'/establecimientos/editar/:id(\\d+)', componente: EditarGenero},
    // {name: 'Establecimientos', path:'/establecimientos', componente: IndiceGeneros, exact: true},
    {name: 'Todos', path:'/Establecimientos', tipo: 2, exact: true, componente: UsuarioCrear},
    {name: 'Tipos establecimientos', path:'/Establecimientos/TiposEstablecimientos', tipo: 2,exact: true, componente: Categorias},
    {name: 'Establecimientos', path:'/Establecimientos', tipo: 1, exact: true, componente: UsuarioCrear},

    {name:'', path:'/', componente: Login, exact: true},
    {name:'', path: '*', componente: RedirecionarALogin}
]

export default rutas;