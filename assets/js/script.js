	var records = document.getElementById("records");
	var nombre = prompt("BIENVENIDA\n Indicanos tu nombre para personalizar el capitan: ");
	records.innerHTML = "Hola Coder, " + nombre;

// ----- DROPDOWN -------------------------------------------
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};
//__________________________________________________
var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
};


function validateButton() {
    var r = document.getElementsByName("pregunta1");
    var pregunta1 = 0;

    for(var i=0; i < r.length; i++){
       	if(pregunta1[i].checked) {
          	pregunta1 = i; 
      	}
    }

    alert("Porfavor selecciona una opciones.");
}

