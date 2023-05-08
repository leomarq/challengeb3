import React from "react";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./paginas/Home";
import Simulador from "./paginas/Simulador";
import Documentos from "./paginas/Documentos";
import Informacao from "./paginas/Informacao";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Simulador' element={<Simulador/>}/>
        <Route path='/Documentos' element={<Documentos/>}/>
        <Route path='/Informacao' element={<Informacao/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
