import { fetchData } from './promises.js';

const ids = [1, 2, 3, 4, 5];

async function fetchAllData(ids) {
  try {
    const results = await Promise.all(ids.map(id => fetchData(id)));
    console.log("Resultados:", results);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchAllData(ids);