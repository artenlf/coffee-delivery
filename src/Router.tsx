import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Checkout } from './pages/Checkout';
import { Home } from "./pages/Home";
import { Sucess } from './pages/Success/index';

export function Router() {
  return (
    <Routes>
      <CartProvider>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Sucess />} />
        </Route>
      </CartProvider>
    </Routes >
  )
}