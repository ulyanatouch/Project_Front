import "./App.scss";
import { Header } from "../src/Layout/Header/Header";
import { Footer } from "../src/Layout/Footer/Footer";
import { CheckoutBlock } from "./Components/CheckoutBlock/CheckoutBlock";
import { DiscountBlock } from "./Components/DiscountBlock/DiscountBlock";

function App() {
  return (
    <div>
      <Header />
      <CheckoutBlock />
      <DiscountBlock />
      <Footer />
    </div>
  );
}

export default App;
