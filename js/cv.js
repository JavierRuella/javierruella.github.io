//color header//
const header = document.querySelector('header');

setInterval(() => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  header.style.backgroundColor = '#' + randomColor;
}, 1000);

//nombre//
var informacion = document.getElementById("Nombre");

informacion.addEventListener("mouseover", function() {
	var informacion2 = document.createElement("span");
	informacion2.className = "informacion2";
	informacion2.innerHTML = "Juan Perez";

	informacion.appendChild(informacion2);
});

informacion.addEventListener("mouseout", function() {
	var informacion2 = document.querySelector(".informacion2");
	informacion.removeChild(informacion2);
});

//dni//
var informacion3 = document.getElementById("DNI");

informacion3.addEventListener("mouseover", function() {
    var informacion2 = document.createElement("span");
    informacion2.className = "informacion2";
    informacion2.innerHTML = "40.265.325";

    informacion3.appendChild(informacion2);
});

informacion3.addEventListener("mouseout", function() {
    var informacion2 = document.querySelector(".informacion2");
    informacion3.removeChild(informacion2);
});

//direccion//
var informacion4 = document.getElementById("Direccion");

informacion4.addEventListener("mouseover", function() {
    var informacion2 = document.createElement("span");
    informacion2.className = "informacion2";
    informacion2.innerHTML = "calle sarmiento 2563";

    informacion4.appendChild(informacion2);
});

informacion4.addEventListener("mouseout", function() {
    var informacion2 = document.querySelector(".informacion2");
    informacion4.removeChild(informacion2);
});

//contacto//
var informacion5 = document.getElementById("Contacto");

informacion5.addEventListener("mouseover", function() {
    var informacion2 = document.createElement("span");
    informacion2.className = "informacion2";
    informacion2.innerHTML = "Cel:(341)3526895, correo: juanperez @gmail.com";

    informacion5.appendChild(informacion2);
});

informacion5.addEventListener("mouseout", function() {
    var informacion2 = document.querySelector(".informacion2");
    informacion5.removeChild(informacion2);
});

//menu de datos personales//
const titles = document.querySelectorAll('.hacerclick');
const sections = document.querySelectorAll('.seccion');

for (let i = 0; i < titles.length; i++) {
  const titulo = titles[i];
  const section = sections[i];

  titulo.addEventListener('click', () => {
    for (let j = 0; j < sections.length; j++) {
      sections[j].classList.add('oculto');
    }
    section.classList.remove('oculto');
  });
}
