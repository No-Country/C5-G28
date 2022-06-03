import logo from "./logo.svg";
import "./App.css";
import Sidebar from './components/Sidebar/sidebar'; 

//importar las rutas para mantener condigo limpio.
import rutas from "./rutas";

//importando react router para especificar las rutas a las secciones 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Sidebar />
      <Routes>
        {rutas.map((r, key) => (
          <Route key={key} path={r.ruta} element={r.componente} />
        ))}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
