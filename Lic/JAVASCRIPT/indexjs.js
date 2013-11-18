window.onload=function(){
	alert('Bienvenido')
	var elemento=new Object();
	elemento.div=document.getElementById("imgs")
	elemento.title=document.getElementById("texto")
	elemento.texto=document.createTextNode("BRING ME THE HORIZON")
	elemento.title.className="titulo"
	elemento.title.appendChild(elemento.texto);
	elemento.title.appendChild(document.createElement("br"));
	var lbl=document.createElement('label')
	var text=document.createTextNode('Entra aqui')
	lbl.appendChild(text);
	lbl.style.fontFamily="Calibri"
	elemento.title.appendChild(lbl);
	elemento.centrar.appendChild(elemento.title);
	div.appendChild(elemento.centrar);
	}
function change(){
	var img=document.getElementById("Imagen");
	img.style.borderColor='#F06';
	img.style.backgroundImage='url(../IMG/Album2.jpg)';
	}
function change2(){
	var img=document.getElementById("Imagen");
	img.style.backgroundImage='url(../IMG/Album.jpg)';
	img.style.borderColor='white';
	}
function changetitle(){
	var title=document.getElementById("texto")
	title.style.opacity="0.9";
	title.style.backgroundColor="#C96"
	title.style.color="white"
	}
function changetitle2(){
	var title=document.getElementById("texto")
	title.style.opacity="1.0";
	title.style.backgroundColor="white"
	title.style.color="black"
	}