import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Recipe from "./components/Recipe";
import Header from "./components/Header";




function App(){
    return (
        <div className='App'>
            <div>
                <h1 className='logo'>Рецепты</h1>
                <ul className='nav'>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<Header/>} />
                <Route path='/recipes/:id' element={<Recipe/>} />
            </Routes>
        </div>
    );
}


export default App;
