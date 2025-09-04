import { Link } from "react-router-dom";
export default function Navbar() {
   return (
      <nav className="navbar">
         <Link to="/">Inicio</Link>/<Link to="/login">Login</Link>/
         <Link to="/perfil">Perfil</Link>/<Link to="/articulos">Articulos</Link>
         /
      </nav>
   );
}
