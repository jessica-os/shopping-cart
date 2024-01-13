import Cart from "./components/Cart/cart";
import Header from "./components/Header/header";
import Products from "./components/Products/products";
import Provider from './Context/Provider';


function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart/>
    </Provider>
  );
}

export default App;
