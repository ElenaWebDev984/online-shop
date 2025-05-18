import './App.css'
import {Header} from "./Header.tsx";
import {BestSellers} from "./BestSellers.tsx";
import {Route, Routes} from "react-router";

function App() {
    return (
        <div className="appContainer">
            <Header />
            <Routes>
                <Route path={'/'} element={<BestSellers/>} />
            </Routes>
        </div>
    )
}

export default App