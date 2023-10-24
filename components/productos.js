

import React, { useState, useEffect } from 'react';
import './Productos.css';

const Productos = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const productosData = [
        {
          nombre: 'Zapatillas deportivas',
          descripcion: 'Zapatillas deportivas para correr',
          precio: '$50',
          imagen: 'zapatillasdepor.jpg',
        },
        {
          nombre: 'Botas de invierno',
          descripcion: 'Botas resistentes para el invierno',
          precio: '$80',
          imagen: 'zapatillasdeinvier.jpg',
        },
        {
          nombre: 'Sandalias de verano',
          descripcion: 'Sandalias cómodas para el verano',
          precio: '$30',
          imagen: 'sandalias.jpg',
        },
        {
          nombre: 'Zapatos formales',
          descripcion: 'Zapatos elegantes para ocasiones especiales',
          precio: '$70',
          imagen: 'zapatosformales.jpg',
        },
        {
          nombre: 'Zapatillas para caminar',
          descripcion: 'Zapatillas cómodas para caminatas largas',
          precio: '$45',
          imagen: 'zapatillascam.jpg',
        },
        {
          nombre: 'Botas de montaña',
          descripcion: 'Botas resistentes para excursiones en la montaña',
          precio: '$90',
          imagen: 'botasdemon.jpg',
        },
      ];

      setProductos(productosData);
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <div className="productos">
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        productos.map((producto, index) => (
          <div key={index} className="producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>Precio: {producto.precio}</p>
          </div>
        ))
      )}
      {children}
    </div>
  );
};

export default Productos;
