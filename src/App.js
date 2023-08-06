import { useState } from "react";
import birdData from "./data/birds";
import BirdList from "./components/birdlist";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App () {
  const [bird, setBird] = useState(birdData);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h1>Hello, world!</h1>
      <div className="birds"><BirdList bird={ bird } setCart={ setCart }/></div>
      <Cart cart={ cart } setCart={ setCart } />
      <Checkout cart={ cart } setCart={ setCart} />
    </div>
  );
};

export default App;
