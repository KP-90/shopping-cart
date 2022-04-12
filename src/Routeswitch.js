import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Homepage/Home";
import Cart from "./Cart/Cart";

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch