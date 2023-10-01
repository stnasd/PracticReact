import AnimatedRoutes from "./AnimatedRoutes";
import AppHeader from "../header/AppHeader";
import Spinner from "../Spinner/Spinner";
import { useAuth } from "../hooks/auth.hook";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";

function App() {
    useAuth();
    return (
        <Router>
            <div className="app">
                <AppHeader />
                <Suspense fallback={<Spinner />}>
                    <AnimatedRoutes />
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
