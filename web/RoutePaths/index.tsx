import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Main from "../pages/Main";
import User from "../pages/User";

export const RoutePaths = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="user" element={<User/>}/>
                <Route path="admin" element={<Admin/>}/>
            </Route>
        </Routes>
    );
}