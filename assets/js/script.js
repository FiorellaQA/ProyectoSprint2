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