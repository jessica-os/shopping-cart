import Searchbar from "../SearchBar/searchBar";
import "./header.css";
import CartButton from "../CartButton/cartButton";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Searchbar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
