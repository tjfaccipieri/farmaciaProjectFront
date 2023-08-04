import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cadastro } from "./Pages/Cadastro";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { PerfilLayout } from "./Pages/Perfil/PerfilLayout";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { SimpleProduct } from "./components/Produtos/SimpleProduct";
import { AuthProvider } from "./context/AuthContext";
import { DadosBase } from "./Pages/Perfil/DadosBase";
import { AlterarSenha } from "./Pages/Perfil/AlterarSenha";
import { Cartoes } from "./Pages/Perfil/Cartoes";
import { AdminLayout } from "./Pages/Admin/AdminLayout";
import { CadastroMarcas } from "./Pages/Admin/CadastroMarcas";
import {ToastContainer} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto my-4 min-h-[50vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/perfil" element={<PerfilLayout />}>
              <Route path='' element={<DadosBase />} />
              <Route path='alterarsenha' element={<AlterarSenha />} />
              <Route path='cartoes' element={<Cartoes />} />
            </Route>
            <Route path="/adminPage" element={<AdminLayout />}>
              <Route path='' element={<span> pagina adm </span>} />
              <Route path='categorias' element={<CadastroMarcas />} />
              <Route path='marcas' element={<CadastroMarcas />} />
              <Route path='produtos' element={<CadastroMarcas />} />
              <Route path='usuarios' element={<CadastroMarcas />} />
            </Route>
            <Route path="/medicamentos" element={<SimpleProduct />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
