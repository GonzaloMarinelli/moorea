import './App.css';
import React  from 'react';
import { NavBar } from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import {ItemListContainer, ItemList} from './components/container/ItemListContainer'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer titulo='Soy un titulo'/>
        <ItemList/>
    </div>
  );
}

export default App
