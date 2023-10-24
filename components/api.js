
export function fetchData(id) {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const data = { id, mensaje: `Datos de la API para el ID ${id}` };
        const exito = true;
  
        if (exito) {
          resolve(data); 
        } else {
          reject(`Error en la llamada a la API para el ID ${id}`); 
        }
      }, 2000);
    });
  }
  