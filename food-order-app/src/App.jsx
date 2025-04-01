import Header from "./components/Header/Header.jsx";
import MealsListing from "./components/MealsListing/MealsListing.jsx";
import { CartContextProvider } from "./store/cart-context.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <MealsListing />
    </CartContextProvider>
  );
}

export default App;
