import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { SimpleProduct } from "./components/Produtos/SimpleProduct";
import { AuthProvider } from "./context/AuthContext";
import { Cadastro } from "./Pages/Cadastro";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto my-4 min-h-[50vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/medicamentos" element={<SimpleProduct />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
