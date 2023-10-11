import React from 'react';
import './App.css';
import Navbar from './Navbar'; 
import Productos from './Productos';
import Contacto from './Contacto';
import ItemListContainer from './ItemListContainer'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Switch>
          <Route path="/productos">
            <Productos />
          </Route>
          <Route path="/contacto">
            <Contacto /> 
          </Route>
          <Route path="/">
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" /> {/* Ruta para la página de inicio */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


