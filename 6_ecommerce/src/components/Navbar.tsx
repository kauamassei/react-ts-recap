import { Link, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Cart from "./Cart"

const Navbar = () => {
  return (
    <>
    <div>
        <Link to='/'>Catálogo</Link>
        <Link to='/cart'>Carrinho</Link>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    </div>
    </>
  )
}

export default Navbar