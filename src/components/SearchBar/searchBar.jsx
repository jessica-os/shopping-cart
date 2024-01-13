import { useState, useContext } from "react";

import "./searchBar.css";
import { BsSearch } from "react-icons/bs";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

function Searchbar() {
   const {setProducts, setLoading}= useContext(AppContext)
  const [searchValue, setSearchValue] = useState("");

 

  const handleSearch = async (e) => {
    e.preventDefault();
     setLoading(true)

    const products = await fetchProducts(searchValue);

    setProducts(products)
    setLoading(false)
    setSearchValue("");
  };
  return (
    <form className="search-bar" onSubmit={handleSearch}>
    {name}
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search-input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className="search-button">
        <BsSearch />
      </button>
    </form>
  );
}
export default Searchbar;
