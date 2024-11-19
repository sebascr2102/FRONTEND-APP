// importar los metodos de api.js  
import { getjoyeria, getjoyeriaByID, updatejoyeria, deletejoyeria } from "./api";

// traer todos los productos y mostrarlos en las pagina pricipal 
document.addEventListener("DOMContentLoaded", async () => {
    const joyerialist = document.getElementById("joyeria-list");

    const products = await getjoyeria();
joyerialist.innerHTML = products.map(products =>`
    <div class="col-xs-12-sm-6 col-md-3 card">
        <div class="card-body d-flex flex-column justify-content-end">
         <h5 class="card-title">${joyeria.name}</h5>
         <p class="card-text">${joyeria.price}</p>
         <a onclick="viewjoyeria(${joyeria.id})" class="btn btn-primary">ver mas</a>
        </div
    </div>
    `).join("");
    
});