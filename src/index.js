import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MenuContext, MenuProvider } from "./contexts/menu-context";
import { CartContext, CartProvider } from "./contexts/cart-context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { MenuContext };
export { CartContext };

root.render(
  <StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </MenuProvider>
    </BrowserRouter>
  </StrictMode>
);
