import { Link,  } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/">Catálogo</Link>
        <Link to="/cart">Carrinho</Link>
      </div>

    </>
  );
};

export default Navbar;
