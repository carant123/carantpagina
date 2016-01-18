

function restaurarImagenes(){

	var x = document.getElementsByClassName("img");
	var i;

	for (i = 0; i < x.length; i++) {

    	x[i].style.height = "23%";
    	x[i].style.width = "23%" ;
    	x[i].style.padding = "20px" ;
    	x[i].style.visibility = "visible";
    	x[i].style.display = "inline-block";
	}

/*	document.getElementById("Portafolio").style.visibility = "visible";
	document.getElementById("Portafolio").style.display = "block";
	document.getElementById("Portafolio").style.opacity = "1";

	document.getElementById("Datos").style.visibility = "hidden";
	document.getElementById("Datos").style.display = "none";
	document.getElementById("Datos").style.opacity = "0";

	document.getElementById("Contacto").style.visibility = "hidden";
	document.getElementById("Contacto").style.display = "none";
	document.getElementById("Contacto").style.opacity = "0";*/

}

function MostrarModeling(){

	var Model = ["Modeling_1", "Modeling_2", "Modeling_3"];
	var Animation = ["Animation_1", "Animation_2"];

	var i;
	var j;

	for (i = 0; i < Model.length; i++) {

    	document.getElementById(Model[i]).style.width = "23%";
		document.getElementById(Model[i]).style.height = "23%";
		document.getElementById(Model[i]).style.padding = "20px";
		
	}

	for (j = 0; j < Animation.length; j++) {

    	document.getElementById(Animation[j]).style.width = "0px";
		document.getElementById(Animation[j]).style.height = "0px";
		document.getElementById(Animation[j]).style.padding = "0px";

	}
/*
	document.getElementById("Portafolio").style.visibility = "visible";
	document.getElementById("Portafolio").style.display = "block";
	document.getElementById("Portafolio").style.opacity = "1";

	document.getElementById("Datos").style.visibility = "hidden";
	document.getElementById("Datos").style.display = "none";
	document.getElementById("Datos").style.opacity = "0";

	document.getElementById("Contacto").style.visibility = "hidden";
	document.getElementById("Contacto").style.display = "none";
	document.getElementById("Contacto").style.opacity = "0";
*/

}

function MostrarAnimacion(){
	
	var Model = ["Modeling_1", "Modeling_2", "Modeling_3"];
	var Animation = ["Animation_1", "Animation_2"];
	
	var i;
	var j;

	for (i = 0; i < Model.length; i++) {

    	document.getElementById(Model[i]).style.width = "0px";
		document.getElementById(Model[i]).style.height = "0px";
		document.getElementById(Model[i]).style.padding = "0px";

	}

	for (j = 0; j < Animation.length; j++) {

    	document.getElementById(Animation[j]).style.width = "23%";
		document.getElementById(Animation[j]).style.height = "23%";
		document.getElementById(Animation[j]).style.padding = "20px";

	}

/*	document.getElementById("Portafolio").style.visibility = "visible";
	document.getElementById("Portafolio").style.display = "block";
	document.getElementById("Portafolio").style.opacity = "1";

	document.getElementById("Datos").style.visibility = "hidden";
	document.getElementById("Datos").style.display = "none";
	document.getElementById("Datos").style.opacity = "0";

	document.getElementById("Contacto").style.visibility = "hidden";
	document.getElementById("Contacto").style.display = "none";
	document.getElementById("Contacto").style.opacity = "0";*/


}





/*
function MostrarDatos(){

	document.getElementById("Portafolio").style.visibility = "hidden";
	document.getElementById("Portafolio").style.display = "none";
	document.getElementById("Portafolio").style.opacity = "0";

	document.getElementById("Datos").style.visibility = "visible";
	document.getElementById("Datos").style.display = "block";
	document.getElementById("Datos").style.opacity = "1";

	document.getElementById("Contacto").style.visibility = "hidden";
	document.getElementById("Contacto").style.display = "none";
	document.getElementById("Contacto").style.opacity = "0";

}


function MostrarContacto(){

	document.getElementById("Portafolio").style.visibility = "hidden";
	document.getElementById("Portafolio").style.display = "none";
	document.getElementById("Portafolio").style.opacity = "0";

	document.getElementById("Datos").style.visibility = "hidden";
	document.getElementById("Datos").style.display = "none";
	document.getElementById("Datos").style.opacity = "0";

	document.getElementById("Contacto").style.visibility = "visible";
	document.getElementById("Contacto").style.display = "block";
	document.getElementById("Contacto").style.opacity = "1";



}

function MostrarPortafolio(){

	document.getElementById("Portafolio").style.visibility = "visible";
	document.getElementById("Portafolio").style.display = "block";
	document.getElementById("Portafolio").style.opacity = "1";

	document.getElementById("Datos").style.visibility = "hidden";
	document.getElementById("Datos").style.display = "none";
	document.getElementById("Datos").style.opacity = "0";

	document.getElementById("Contacto").style.visibility = "hidden";
	document.getElementById("Contacto").style.display = "none";
	document.getElementById("Contacto").style.opacity = "0";


	restaurarImagenes();


}

*/



function hacerclickrestaurarImagenes(){

		var elemento = document.getElementById('B_MostrarImagenes');
		elemento.addEventListener('click', restaurarImagenes, false);
}

function hacerclickMostrarModeling(){

		var elemento = document.getElementById('B_MostrarModeling');
		elemento.addEventListener('click', MostrarModeling, false);
}

function hacerclickMostrarAnimacion(){

		var elemento = document.getElementById('B_MostrarAnimacion');
		elemento.addEventListener('click', MostrarAnimacion, false);
}

/*function hacerclickMostrarPortafolio(){

		var elemento = document.getElementById('B_Portafolio');
		elemento.addEventListener('click', MostrarPortafolio, false);
}

function hacerclickMostrarDatos(){

		var elemento = document.getElementById('B_Datos');
		elemento.addEventListener('click', MostrarDatos, false);
}

function hacerclickMostrarContacto(){

		var elemento = document.getElementById('B_Contacto');
		elemento.addEventListener('click', MostrarContacto, false);
}
*/


//escucha AddEventListener(), evento load, llamara a funcion alerta y el booleano

window.addEventListener('load', hacerclickrestaurarImagenes, false);
window.addEventListener('load', hacerclickMostrarModeling, false);
window.addEventListener('load', hacerclickMostrarAnimacion, false);
/*window.addEventListener('load', hacerclickMostrarPortafolio, false);
window.addEventListener('load', hacerclickMostrarDatos, false);
window.addEventListener('load', hacerclickMostrarContacto, false);*/