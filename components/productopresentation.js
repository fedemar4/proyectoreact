const ProductosPresentational = ({ productos, loading }) => {
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
      </div>
    );
  };