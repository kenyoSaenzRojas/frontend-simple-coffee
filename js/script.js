
let font= ('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');


//body
let cuerpo=document.getElementById('cuerpo')
cuerpo.style.backgroundColor='var(--black)';
cuerpo.style.fontFamily='"DM Sans", serif';



//cabecera

const headEr = document.getElementById('titu')
//headEr.style.backgroundColor='red';


let huno= document.createElement('h1')
huno.innerHTML="Our Collection";
huno.style.color='white';
huno.style.textAlign='center';
huno.style.fontSize='32px';

headEr.appendChild(huno)

//
//div.classList.add('precio')-- para agregar desde el CSS
//

     //document.body.appendChild(huno);
let parrafo = document.createElement("p");
parrafo.innerHTML="Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.";
parrafo.style.textAlign='center';
parrafo.style.margin='auto';
//parrafo.style.width='430px';
parrafo.style.width='71%';
parrafo.style.color='#6F757C';
parrafo.style.fontSize='16px';
parrafo.style.marginBottom='20px';
parrafo.style.marginTop='10px'

headEr.appendChild(parrafo)

     //document.body.appendChild(parrafo);

//botones
let divboton = document.createElement('div')
    //document.body.appendChild(divboton)
headEr.appendChild(divboton)
divboton.style.display='inline-block';
divboton.style.width='100%';
divboton.style.textAlign='center';
divboton.style.marginBottom='30px';
//divboton.style.textAlign='center';


let btn1=document.createElement('input')
btn1.value="All products";
btn1.type='button';
//btn1.style.display='block';
//btn1.style.display='inline-block';
btn1.style.border='none';
btn1.style.width='100px';
btn1.style.margin='auto';
btn1.style.padding='10px 10px';
// btn1.style.paddingTop='12px';
// btn1.style.paddingBottom='12px';
btn1.style.borderRadius='10px'
btn1.style.color='white'
btn1.style.backgroundColor='var(--skysilver)'

btn1.style.fontWeight='600';
btn1.style.fontSize='14px';
btn1.style.fontFamily='var(fuente)';
btn1.classList.add("boton1");
divboton.appendChild(btn1)

let btn2=document.createElement('input')
btn2.value="Available Now"
btn2.type='button';
//btn2.style.display='block';
btn2.style.width='120px';
btn2.style.margin='auto';
btn2.style.fontWeight='600';
btn2.style.padding='12px';
btn2.style.marginLeft='20px';
//btn2.style.borderRadius='10px'
btn2.style.border='none';
btn2.style.color='white'
btn2.style.fontSize='14px'
btn2.style.backgroundColor='var(--silver)';
btn2.classList.add("boton2");
divboton.appendChild(btn2)


//cuerpo.appendChild(h1)  




//API

const API ="https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"

 let cafecitos = []

 async function mostrarCafes() {
    
     const response = await fetch(API)
     const cafes = await response.json()
     cafecitos = cafes

     cafecitos.forEach(cafe => {
         console.log(cafe)
         crearCafe(cafe)
     })
 }
 function crearCafe(cafe){
     //Obtenemos el div donde vamos a mostrar los cafecitos
     const cafecitos = document.getElementById('cafecitos')
     if(!cafecitos) return
    //  cafecitos.style.display='flex';
    //  cafecitos.style.flexWrap='wrap';
    //  cafecitos.style.alignItems='left';
    //  cafecitos.style.gap='45px';
    //  cafecitos.style.rowGap='60px';
    //  //cafecitos.style.width='850px';
    //  cafecitos.style.margin='auto';
     
     

     //empezamos con la construccion del cafecito
     const div = document.createElement('div')
     div.classList.add("divposicion");
     

    

    //imagenes
     const imagen = document.createElement('img')
     imagen.classList.add('cafe-image');
     imagen.src = cafe.image;
     imagen.alt = cafe.image;
     console.log(imagen)
     imagen.style.borderRadius='20px';
     imagen.style.marginBottom='5px';
    
    //nombre
     const cardheader = document.createElement('div')
     cardheader.textContent = cafe.name;
     cardheader.style.color='white';
     //flex
     cardheader.style.display='flex';
     cardheader.style.justifyContent='space-between';
     

   
    //  const hubicacion = document.getElementById('6')
    //  hubicacion.style.marginTop='10px';
       //precios
    const cardFooter = document.createElement('div')
    cardFooter.textContent=cafe.price;
    cardFooter.style.color='black';
    cardFooter.style.padding='3px 10px';
    cardFooter.style.fontSize='14px';
    //cardFooter.style.paddingLeft='10px';
    cardFooter.style.backgroundColor='#BEE3CC';
    cardFooter.style.borderRadius='5px';   
    cardFooter.classList.add("price");

    //iconos
    // var iconos=new imagen();
    // iconos.src="../icons/Star.svg";
    let imagenes = document.createElement("img");
    imagenes.src= "./icons/Star_fill.svg"
    
    //camciar la imagen de la estrella
    //imagenes.rating== null || imagenes.votes==0?
    //(imagenes.src=star_blank):(imagenes.src=star_fill)


    if (cafe.rating == null || cafe.votes == 0) {
        imagenes.src= './icons/Star.svg'
    }else{
        imagenes.src= './icons/Star_fill.svg'
    }
    
    
    
    
    //rating
    const star=document.createElement('div')
    star.style.display='flex';
    star.style.alignItems='center';
    star.style.marginTop='10px';
   
    // star.textContent=cafe.rating;
    // star.style.color='white';

    let espan = document.createElement('span')
     espan.textContent=cafe.rating;
     espan.style.color='white';
     espan.style.marginLeft='5px';
     espan.style.fontSize='16px';
     espan.style.marginRight='5px';

     let voto = document.createElement('span')
   
    // voto.textContent=cafe.rating;
     voto.textContent=cafe.votes;
     //voto.innerText="()"
     voto.style.color='var(--skysilver)';
     voto.style.fontSize='16px';
     voto.style.width='180px';
     voto.style.fontWeight='500';
    //  voto.style.marginLeft='5px';
    if (cafe.rating == null || cafe.votes == 0) {
        voto.textContent="No ratings"
    }else{
        voto.textContent= `(${cafe.votes} votes)`
    }
    
    //cafe.rating == null || cafe.votes == 0
    //? (votes.textContent = cafe.rating)
    //: (votes.textContent = "No rating");
    //

    let popular=document.createElement('span')
    popular.textContent=cafe.popular
    popular.classList.add("posicion");
    

    if (cafe.popular==true) {
        popular.textContent='Popular'
    }else{
        popular.style.display='none'
    }
    //sold out
    
    let vendido = document.createElement('span')
    vendido.style.color='var(--red)';
    vendido.style.display='inline-block';
    vendido.style.marginLeft='0px'
    vendido.style.width='100px'
    
    //vendido.style.marginLeft='60px'
    if (cafe.votes == 122) {
        vendido.textContent="Sold Out"
    }else{
        vendido.textContent= ''
    }
     
  //comentario en cada imagen
  let estrella = document.createElement('img')
  estrella.textContent=imagenes[5];
  
 // estrella.src=imagenes.src="./icons/Star.svg";

     //agregamos los hijos al contenedor//
     div.appendChild(imagen)   
     div.appendChild(cardheader)
     cardheader.appendChild(cardFooter)
     star.appendChild(imagenes)
     star.appendChild(espan) 
     star.appendChild(voto)  
     div.appendChild(star)
     star.appendChild(popular)
     star.appendChild(vendido)
    
     
       
     
    //padre
     cafecitos.appendChild(div)
 }
 mostrarCafes()



// fetch(API).then(response =>
//     //una tienda a ver si tiene cafe
//     response.json()
// ).then(data => {

//     cafecitos=data
//     console.log(cafecitos)

    //obteniendo los cafes
    // console.log(data[0].name)

    // const cafecitos=document.getElementById('cafecitos')
    // const divcafe = document.createElement('div')

    // // document.getElementById('cafecitos').appendChild(
    // //     // document.createElement('div').textContent=data[0].name

    // // )
    // divcafe.textContent=data[1].name

    // cafecitos.appendChild(divcafe)    


//})

// const API = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

// // Array para almacenar los cafés
// let cafecitos = [];

// // Trae y muestra los cafecitos en la pagina
// async function mostrarCafes() {
//     const response = await fetch(API)
//     const cafes = await response.json()
//     cafecitos = cafes

//     cafecitos.forEach(cafe => {
//         console.log(cafe)
//         crearCafe(cafe)
//     })
// }
// //crea el div que contiene el cafecito
// function crearCafe(cafe){
//     //obtener el div donde vamos a mostrar todos los cafecitos
//     const cafecitos = document.getElementById('cafecito')

//     //empezamos con la construccion del cafecito
//     const div = document.createElement('div')
    

//     const cardheader = document.createElement('div')
//     cardheader.textContent = cafe.name

//     const cardFooter = document.createElement('div')
//     cardFooter.textContent=cafe.price

//     //agregamos los hijos al contenedor
//     div.appendChild(cardheader)
//     div.appendChild(cardFooter)

//     cafecitos.appendChild(div)

//  mostrarCafes() 
// }