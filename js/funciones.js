const modal = document.querySelector(".modal");
const imagenes = document.querySelectorAll(".galeria a"); //.galeria a porque son a los enlaces a los que se les hara click
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal button");
let imgActual = 0; //se pone número 0 porque cualquiera de las imgs puede ser la primera en abrirse
let rutasImg = [] //esto sustituye al href



		
//.galeria a porque son a los enlaces a los que se les hara click


//Ejercicio: al hacer click en cualquiera de las imagenes chiquitas, la clase visible se le pone a la modal


	imagenes.forEach((imagen,indice) => {

		rutasImg.push(imagen.getAttribute("href"));

			imagen.addEventListener("click", function(evento){
			evento.preventDefault();
		
			imgActual = indice;
			imgModal.setAttribute("src",rutasImg[imgActual]);

			modal.classList.add("visible");
			});
	});


//Ejercicio: al hacer click en la modal, se le quite la clase visible.

	modal.addEventListener("click", function() {
			modal.classList.remove("visible");
	});

//Ejercicio: navegación entre las imágenes

	flechas.forEach((flecha,indice) => {
		flecha.addEventListener("click", evento => {
			evento.stopPropagation();
			
			if(indice == 0){ //flecha anterior
				imgActual = imgActual > 0 ? imgActual - 1 : imagenes.length;
			}else{
				imgActual = imgActual < imagenes.length - 1 ? imgActual + 1 : 0//flecha siguiente
			}
			imgModal.setAttribute("src",rutasImg[imgActual]);
		});
	});


