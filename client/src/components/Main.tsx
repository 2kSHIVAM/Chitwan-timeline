import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

export default function Main(){
    return (
        <div className={'grid relative grid-rows-appBody z-10'}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
            <Footer/>
        </div>
)
}