import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}
