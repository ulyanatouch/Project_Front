import "./App.scss";
import { Header } from "../src/Layout/Header/Header";
import { Footer } from "../src/Layout/Footer/Footer";
import { CheckoutBlock } from "./Components/CheckoutBlock/CheckoutBlock";
import { DiscountBlock } from "./Components/DiscountBlock/DiscountBlock";
import { Categories } from "./Components/Categories/Categories";
import { Sales } from "./Components/Sales/Sales";

function App() {
  return (
    <div>
      <Header />
      <CheckoutBlock />
      <Categories />
      <DiscountBlock />
      <Sales />
      <Footer />
    </div>
  );
}

export default App;
