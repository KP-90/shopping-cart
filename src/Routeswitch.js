import { Routes, Route, HashRouter } from "react-router-dom";
import { useState } from "react";
import App from "./App";
import Home from "./Homepage/Home";
import Cart from "./Cart/Cart";

const RouteSwitch = () => {
    const [items, setItems] = useState([])
    return(
        <HashRouter>
            <Routes>
                <Route element={<App items={items} setItems={setItems}/>}>
                    <Route index path="/" element={<Home items={items} setItems={setItems}/>} />
                    <Route path="cart" element={<Cart info={items} setItems={setItems}/>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch