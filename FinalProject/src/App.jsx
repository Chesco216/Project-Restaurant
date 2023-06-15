import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import MenuHome from "./screens/MenuHome";
import Reseñas from "./screens/Reseñas";
import MediumSize from "./screens/MediumSize";
import BigSize from "./screens/BigSize";
import FamiliarSize from "./screens/FamiliarSize";
import StadiumSize from "./screens/StadiumSize";
import TamPizzas from "./screens/TamPizzas";
import ForYou from "./screens/ForYou";
import Drinks from "./screens/Drinks";
import Vegetarian from "./screens/Vegetarian";
import EcoMenu from "./screens/EcoMenu";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Menu from "./screens/Menu";
import MiPedido from "./screens/MiPedido";
import Frequent from "./screens/Frequent";
import { OrderHistory } from "./screens/OrderHistory";
import { OrderView } from "./screens/OrderView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuHome />} />
          <Route path="/menu/menu1" element={<ForYou />} />
          <Route path="/menu/menu2" element={<TamPizzas />} />
          <Route path="/menu/menu3" element={<Drinks />} />
          <Route path="/menu/menu4" element={<Vegetarian />} />
          <Route path="/menu/menu5" element={<EcoMenu />} />
          <Route path="/resenias" element={<Reseñas />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu/mediana" element={<MediumSize />} />
          <Route path="/menu/grande" element={<BigSize />} />
          <Route path="/menu/familiar" element={<FamiliarSize />} />
          <Route path="/menu/stadium" element={<StadiumSize />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Menu />} />
          <Route path="/account/mipedido" element={<MiPedido />} />
          <Route path="account/frecuentes" element={<Frequent />} />
          <Route path="account/historial" element={<OrderHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <<<<<<< HEAD
// import  useState  from "react";
// import "./App.css";
// <<<<<<< HEAD
// import Home from "./screens/Home";
// import MenuHome from "./screens/MenuHome";
// import InfoScreen from "./screens/InfoScreen";
// import LeftMenu from "../src/components/LeftMenu";
// =======
// import { useState } from 'react'
// import './App.css'
// import S1 from './screens/S1'
// import { Reseñas } from './screens/Reseñas';
// import { Horarios } from './screens/Horarios';
// import { Ubicacion } from './screens/Ubicacion';
// import { PediHeader } from './components/PediHeader';
// import { MiPedido } from './screens/MiPedido';
// import { TamPizzas } from './screens/TamPizzas';
// >>>>>>> Tatiana

// function App() {
//   return (
//     <div>
// <<<<<<< HEAD
//       <Home/>
//       {/* <MenuHome /> */}
//       {/* <LeftMenu /> */}
//       {/* <InfoScreen /> */}
// =======
// import S1 from "./screens/S1";
// <<<<<<< HEAD
// import Vegetarian from "./screens/Vegetarian";
// import BigSize from "./screens/BigSize";
// import StadiumSize from "./screens/StadiumSize";
// import FamiliarSize from "./screens/FamiliarSize";
// import MediumSize from "./screens/MediumSize";
// import { Drinks } from "./screens/Drinks";
// import EcoMenu from "./screens/EcoMenu";
// import ForYou from "./screens/ForYou";
// function App() {
//   return (
//     <div>
//       {/* <S1 /> */}
//       {/*
//       <FamiliarSize />
//       <StadiumSize />
//       <BigSize/>
//       <Drinks />
//       <Vegetarian />
//       <EcoMenu />
//       <ForYou />
//       */}
//       <MediumSize />
// >>>>>>> Janna
// =======
// import Login from "./screens/Login"
// import Register from "./screens/Register";
// import Pagos from "./screens/Pagos"
// import Share from "./screens/Share"
// import Singin from "./screens/Singin"
// import Menu from  "./screens/Menu"
// function app() {
//   return (
//     <div>
//       {/*<S1 />*/}
//        <Login/>
//       {/*<Register/>*/}
//       {/* <Pagos/> */}
//       {/* <Share/> */}
//       {/* <Singin/> */}
//       {/* <Menu/> */}
// >>>>>>> 538255839df41cc379fbe56955f9a1d02916d588
// >>>>>>> Jheison
// =======
//      {/* <TamPizzas/>*/}
//     <MiPedido/>
//      {/*<Reseñas/>*/}
//         {/*<Horarios/>*/}
//       {/*<Ubicacion/>*/}
// >>>>>>> Tatiana
//     </div>
//   );
// }

// <<<<<<< HEAD
// export default app;
// =======
// export default App;
// >>>>>>> Tatiana
