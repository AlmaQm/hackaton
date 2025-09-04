import Voluntarios from "./components/Voluntarios";
import Donaciones from "./components/Donaciones";
import Transportes from "./components/Transportes";
import Dashboard from "./components/Dashboard";
import MapaTransportes from "./components/MapaTransportes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import navbar from "./components/Navbar";

export default function App() {
   return (
      <>
         <Header />
         <Navbar />
         <div className="container py-4">
            <h1 className="text-center mb-4">Fundación Nexa – Gestión</h1>
            <Navbar />
            <Dashboard />
            <MapaTransportes />

            <div className="row g-4 mt-4">
               <div className="col-12">
                  <Voluntarios />
               </div>
               {/* <div className="col-12"><Donaciones /></div> */}
               <div className="col-12">
                  <Transportes />
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
