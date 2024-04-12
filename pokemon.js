
function getImagePoke(){
    const urlParams = new URLSearchParams(location.search);
    if(!urlParams.has('name')){
        return;
    }
    const nome = urlParams.get('name').toLowerCase();
    document.title = nome;

    const h1 = document.querySelector('h1');
    h1.textContent = `Pagina do ${nome}`;
    const h2 = document.querySelector('h2');
    h2.textContent = `Informações sobre ${nome}`;
    const img = document.querySelector('img');

   

    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then(res => 
            res.json()
        .then(data => {
          img.src = data.sprites.front_default
          img.alt = `Imagem do Pokémon ${nome}`
          
        }

        ))
        
       
}


function updateVisitas() {
    var data = new Date();
    data = Intl.DateTimeFormat('pt-BR', {day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}).format(data);
    if(!localStorage.getItem('visitas')){
        var count = {contador: 1,data: data};
        localStorage.setItem('visitas',JSON.stringify(count));
    } else {
        count = JSON.parse(localStorage.getItem('visitas'))
        count.contador++
        count.data = data

        localStorage.setItem('visitas',JSON.stringify(count))
    }
    console.log(count);
    document.getElementById('visitas').textContent = `Você visitou essa página ${count.contador } vezes. Última visita em ${count.data}`;
}
updateVisitas();

getImagePoke();
