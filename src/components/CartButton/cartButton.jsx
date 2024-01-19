import { useContext } from "react";
import "./cartButton.css";
import { IoCartOutline } from "react-icons/io5";
import AppContext from "../../Context/AppContext";

function CartButton({ product }) {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart-button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <IoCartOutline />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
}

export default CartButton;
