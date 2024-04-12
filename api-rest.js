// // creamos una funcion para llamar a la API

// const container = document.getElementById('container');
// const formSearch = document.querySelector('#form-search')


// //* si trabajamos con async tiene que haber un await (trabajan juntos)
// const getCharacters = async () => {
//     try{
//         const response = await fetch("https://rickandmortyapi.com/api/character") //* llamamos a la peticion
//         const data = await response.json() //* aca formatemos a json
//     // console.log(data.info) // aca la vemos por consola
//     // console.log(data.results) // aca la vemos por consola
//     container.appendChild(generateRow(data.results));
//     } catch (error) {
//         throw new Error(error);
//     }
// };

// const searchChacarterByName = (charaterName) => {
//     console.log(charaterName)
//     getCharacters(charaterName);
// }
// // const getCharacters = async () => {
// //     try{
// //         const response = await fetch("https://rickandmortyapi.com/api/location") //* llamamos a la peticion
// //         const datas = await response.json() //* aca formatemos a json
// //     console.log(data.info) // aca la vemos por consola
// //     // console.log(data.results) // aca la vemos por consola
// //     container.appendChild(generateRow(data.results));
// //     } catch (error) {
// //         throw new Error(error);
// //     }
// // };

// const generateRow = (characters) => {
//     const row = document.createElement("div");
//     // Creamos un div vacio const row = <div></div>
//     row.className = "row"; //* agregamos la clase row al div con el className
//     row.innerHTML = ``;
    
//     characters.map(character => {
//         row.innerHTML = row.innerHTML + generateCardBootstrap(character);
//         // console.log(character);
//         generateCardBootstrap(character);
        
//     })
//     // console.log(row)
//     return row
// };

// const generateCardBootstrap = (character) => {
//     const statusColor = character.status.toLowerCase() === 'alive' ? 'green': character.status.toLowerCase() === 'unknown'? 'grey' : 'red' ;
//     // console.log(statusColor)
//     // console.log(character.name);
//     // console.log(character.image);
//     return `
//     <div class="card mx-auto mt-3 " style="max-width: 659px">
//         <div class="row g-col-2">
//             <div class="col-md-5">
//             <img src="${character.image}" class="img-fluid rounded-start " alt="imagen de ${character.name}">
//             </div>
//             <div class="col-md-6">
//             <div class="card-body">
//                 <h5 class="card-title fw-bold ">${character.name}</h5>
//                 <p class="card-text"><span class="status-indicator" style="background-color:${statusColor}"></span>  ${character.status} - ${character.species}</p>
//                 <p class="card-text location"> <span class="span__page">Last known location:${character.location.name}</span></p>
//                 <p class="card-text location"><span class="span__page">First seen in: ${character.origin.name} </span> </p>
//             </div>
//             </div>
//         </div>
//         </div>
//     `;

// };

// //*FORMULARIO
// formSearch.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const characterSearch = document.querySelector('#search-character').value;
// });

// getCharacters();
    // <div class="col-1 card mt-5 mx-auto m-3 " style="width: 18rem">
    //     <img src="${character.image}" class="card-img border-start " alt="imagen de ${character.name}">
    //     <div class="card-body">
    //         <h5 class="card-title fw-bold">${character.name}</h5>
    //         <p class="card-text">
    //             <span class="status-indicator" style="background-color:${statusColor}"></span>
    //             ${character.status} - ${character.species}
    //         </p>
    //         <p class=""> Last known location:
    //         ${character.location.name}</p>
    //     </div>
    // </div>



const container = document.getElementById('container');
const formSearch = document.getElementById('form-search');

const getCharacters = async (characterName) => {
    try {
        let url = "https://rickandmortyapi.com/api/character";
        if (characterName) {
            url += `?name=${characterName}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos resultados
        container.appendChild(generateRow(data.results));
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
    }
};

const searchChacarterByName = (characterName) => {
    getCharacters(characterName);
};

const generateRow = (characters) => {
    const row = document.createElement("div");
    row.className = "row";
    characters.forEach(character => {
        row.innerHTML += generateCardBootstrap(character);
    });
    return row;
};

const generateCardBootstrap = (character) => {
    const statusColor = character.status.toLowerCase() === 'alive' ? 'green' : character.status.toLowerCase() === 'unknown' ? 'grey' : 'red';
    return `
    <div class="card mx-auto mt-3 " style="max-width: 659px">
        <div class="row g-col-2">
            <div class="col-md-5">
                <img src="${character.image}" class="img-fluid rounded-start " alt="imagen de ${character.name}">
            </div>
            <div class="col-md-6">
                <div class="card-body">
                    <h5 class="card-title fw-bold ">${character.name}</h5>
                    <p class="card-text"><span class="status-indicator" style="background-color:${statusColor}"></span>  ${character.status} - ${character.species}</p>
                    <p class="card-text location"> <span class="span__page">Last known location:${character.location.name}</span></p>
                    <p class="card-text location"><span class="span__page">First seen in: ${character.origin.name} </span> </p>
                </div>
            </div>
        </div>
    </div>
    `;
};

formSearch.addEventListener('submit', function (event) {
    event.preventDefault();
    const characterSearch = document.querySelector('#search-character').value;
    searchChacarterByName(characterSearch);
});

// Cargar todos los personajes al cargar la página
getCharacters();
