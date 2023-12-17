import './App.scss';
import { Header } from "../src/Layout/Header/Header";
import { Footer } from "../src/Layout/Footer/Footer";
import { CheckoutBlock } from './Components/CheckoutBlock/CheckoutBlock';



function App() {
  return (
    <div className="App">
      <Header/>
      <CheckoutBlock/>
      <Footer/>
    </div>
  );
}

export default App;
