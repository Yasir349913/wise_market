import { Outlet } from "react-router-dom";
import Topnavbar from "./components/Topnavbar";
import Categorynavbar from "./components/Categorynavbar";
import Footer from "./components/Footer";
import CartProvider from "./store/Cartcontext";

const App = () => {
  return (
    <CartProvider>
      <Topnavbar />
      <Categorynavbar />
      <Outlet />
      <Footer />
    </CartProvider>
  );
};

export default App;
