window.onload=function(){
	var herencia=new Object();
	herencia.autor=document.createTextNode("Autor: Carlos Eduardo Moreno Melgar");
	herencia.saltolinea=document.createElement("br");
	herencia.aprendizaje=document.createTextNode("En el ciclo II, en la materia lenguaje interpretado al cliente a prendi el lenguaje javascript en el cual aprendi su sintaxis a declarar las etiquetas para poder abrir lineas de codigo en este lenguaje, ademas a escribir en la pagina web(document.write) asi como declarar variables concatenar cadenas sintaxis basicas para estructuras repetitivas switch if-else el uso de distintas herramientas(funciones) que ya posee el lenguaje como charAt, parseInt, lenght ... ademas el uso de arreglos, uso de expresiones regulares y DOM, alojar la aplicacion en github objetos y distintos eventos.");
	var parrafo=document.getElementById("info")
	parrafo.appendChild(herencia.autor)
	parrafo.appendChild(herencia.saltolinea)
	parrafo.appendChild(herencia.aprendizaje);
	}