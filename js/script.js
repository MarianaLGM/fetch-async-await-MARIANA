//1.lista de Pokémon `https://pokeapi.co/api/v2/pokemon`
    //limitar la cantidad ?limit=10

//2.pintar pokemons HTML

//3. paginación

/*4.Búsqueda de Pokémon por nombre. 
    -Si no exite deberá aparecer un mensaje de "pokemon no encontrado"
    -documentación de pokemon `https://pokeapi.co/docs/v2`*/

/*BONUS Crea una segunda página donde se guarden tus pokemon favoritos.
   - Crea una segunda página donde se guarden tus pokemon favoritos.
   - Al clickar en un pokemon en index.html este tendrá que guardarse en localStorage y en la otra página saldrán esos pokemon que se han guardado previamente
   - Cada pokemon, si se ha añadido a favoritos `localStorage`, tendrá que tener una marca como que ya está añadido. Si se vuelve a clickar desaparcera la marca y de favoritos `localStorage`
   - Puedes usar un script nuevo que solo traiga esos pokemon de favoritos*/

const searchBtn= document.getElementById("searchBtn"); //buscador pokémons

const resetBtn= document.getElementById("resetBtn");//resetear
const app= document.getElementById("app");//listado pokemon



//1.
function pokemons (){
    //const characterList=document.getElementById ("character-list");
    app.innerHTML=""
    fetch("https://pokeapi.co/api/v2/pokemon?offset=10&limit=10")
      .then((response)=>response.json()) //respuesta del servidor 
      .then((data)=>{
        console.log(data)//OK
        console.log(data.results)  

//2.
    data.results.forEach((elements) => {
        const newPokeContenedor =document.createElement("div") //creo un nuevo contenedor donde voy a meter todos esos datos api 
        newPokeContenedor.classList.add ("nuevoDiv")
        //añado imagen y name
        newPokeContenedor.innerHTML= `  
         <img src="${elements.url[
            0]}" alt="${elements.name}" id="pokemon"/>
         <h3>${elements.name}</h3>
       `; 
       app.appendChild(newPokeContenedor);
      });
    })
    
}

pokemons();//OK

//imagen //"https://pokeapi.co/api/v2/pokemon/1/"....2,3,4 y así sucesivamente

//3.

//paginación
const prevBtn= document.getElementById("prevBtn");//pág. anterior
const nextBtn= document.getElementById("nextBtn");//pág. siguiente

let paginaActual=1;

	// Incrementar "paginaActual"
function avanzarPagina() {
	paginaActual = paginaActual + 1;
}
   
function retrocederPagina() {   // Disminuye "paginaActual"
  paginaActual = paginaActual - 1; 
    if (paginaActual === 1) {    //quitar la opción una vez que esta en pag 1 que siga hacia atrás
    prevBtn.setAttribute("disabled", true);
    } else {
    nextBtn.removeAttribute("disabled");
    }
    
}
    prevBtn.addEventListener("click", retrocederPagina);
    nextBtn.addEventListener("click", avanzarPagina);

  //.catch (error) maneja el error
  //.finaly

  