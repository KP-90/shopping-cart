import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}