$(document).ready(function(){

	var Model = ["#Modeling_1", "#Modeling_2", "#Modeling_3"];
	var Animation = ["#Animation_1", "#Animation_2"];
	var i;
	var j;

    $("#B_Datos").click(function(){
        $("#Datos").fadeIn("slow");
        $("#Portafolio").hide();
        $("#Contacto").hide();
    });

    $("#B_Portafolio").click(function(){
        $("#Datos").hide();
        $("#Portafolio").fadeIn("slow");
        $("#Contacto").hide();
    });

    $("#B_Contacto").click(function(){
        $("#Datos").hide();
        $("#Portafolio").hide();
        $("#Contacto").fadeIn("slow");
    });




    $("#B_MostrarImagenes").click(function(){
    	
		$("#Portafolio").show();
		$("#Contacto").hide();
		$("#Datos").hide();

/*		for (i = 0; i < Model.length; i++) {

			$(Model[i]).animate({
		        width: '23%',
		        height: '23%',
		        padding: '20px'
		    });
			
		}


		for (j = 0; j < Animation.length; j++) {

			$(Animation[j]).animate({
		        width: '23%',
		        height: '23%',
		        padding: '20px'
		    });
			
		}*/

	}); 




	$("#B_MostrarModeling").click(function(){
    	
		$("#Portafolio").show();
		$("#Contacto").hide();
		$("#Datos").hide();

/*		for (i = 0; i < Model.length; i++) {
			var div = $(Model[i]);
			div.animate({
		        width: '23%',
		        height: '23%',
		        padding: '20px'
		    });
			
		}


		for (j = 0; j < Animation.length; j++) {

			$(Animation[j]).animate({
		        width: '0px',
		        height: '0px',
		        padding: '0px'
		    });
			
		}*/

	}); 




	$("#B_MostrarAnimacion").click(function(){
    	
		$("#Portafolio").show();
		$("#Contacto").hide();
		$("#Datos").hide();


/*		for (i = 0; i < Model.length; i++) {

			$(Model[i]).animate({
		        width: '0px',
		        height: '0px',
		        padding: '0px'
		    });
			
		}


		for (j = 0; j < Animation.length; j++) {

			$(Animation[j]).animate({
		        width: '23%',
		        height: '23%',
		        padding: '20px'
		    });
			
		}*/

	}); 





});