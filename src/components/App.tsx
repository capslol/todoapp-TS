import React, { FC, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Register from "./Register";
import Logo from "react-query/types/devtools/Logo";
import Login from "./Login";
import Home from "./Home";

const url = 'https://jsonplaceholder.typicode.com/todos'

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/register'} element={<Register/>}></Route>
            <Route path={'/login'} element={<Login/>}></Route>
            <Route path={'/home'} element={<Home/>}></Route>
        </Routes>

    );
};

export default App;