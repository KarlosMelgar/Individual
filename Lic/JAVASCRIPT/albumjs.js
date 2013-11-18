var arreglo=new Array();
arreglo[0]="Can You Feel My Heart";
arreglo[1]="The House of Wolves";
arreglo[2]="Empire (Let Them Sing)";
arreglo[3]="Sleepwalking";
arreglo[4]="Go to Hell, for Heaven's Sake";
arreglo[5]="Shadow Moses";
arreglo[6]="And the Snakes Start to Sing";
arreglo[7]="Seen It All Before";
arreglo[8]="Antivist";
arreglo[9]="Crooked Young";
arreglo[10]="Hospital for Souls";
var array=new Array()
array[0]="Join the Club";
array[1]="Chasing Rainbows";
array[2]="Deathbeds";
document.write("<header class='arriba'><center><a href='albunes.html'><font size='+4' style='text-shadow:1px 1px 1px #FFF'><p class='icon icon-home'>Home</p></font></a></center></header>");
document.writeln("<section><center><h1 class='title icon icon-music'>Album Sempiternal</h1></center></section><br>")
document.writeln("<center><section class='songs'><div><br><center><p style='text-align:justify' class='parrafo'>Es el cuarto album de estudio, va a ser publicado el 1 de abril de 2013 en todo el mundo bajo el sello discografico Sony Music y el 2 de abril en Estados Unidos y Canada.</p></center><br><img src='../IMG/Sempiternal.jpg' width='60%' height='80%' style='border-radius:20px'></img><br>");

document.writeln("<h2>Canciones</h2><br><table><tr><td class='arriba'>No</td><td class='arriba'>Titulo</td></tr>");
for(var i=0;i<arreglo.length;i++){
document.writeln("<tr><td class='abajo'>"+(parseInt(i)+1)+"</td><td class='abajo'>"+arreglo[i]+"</td></tr>")
}
document.writeln("</table><br>")
document.writeln("<br><h2>Edici&oacute;n deluxe - The Deathbeds EP</h2><br><table><tr><td class='arriba'>No</td><td class='arriba'>Titulo</td></tr>")
var contador=0;
while(contador<array.length){
document.writeln("<tr><td class='abajo'>"+(parseInt(contador)+1)+"</td><td class='abajo'>"+array[contador]+"</td></tr>");
contador=parseInt(contador)+1;
}
document.writeln("</table><br><br><h2>Pista adicional japonesa</h2><br><table><tr><td class='arriba'>No</td><td class='arriba'>Titulo</td></tr>");
array.push("Sleepwalking");
contador=0;
do{
document.writeln("<tr><td class='abajo'>"+(parseInt(contador)+1)+"</td><td class='abajo'>"+array[contador]+"</td></tr>");
contador=parseInt(contador)+1;
}while(contador<array.length);
array.pop();
array.push("The studio tapes");
document.writeln("</table><br><br><h2>Pista adicional edici&oacute;n iTunes deluxe</h2><br><table><tr><td class='arriba'>No</td><td class='arriba'>Titulo</td></tr>");
for(var i=0;i<array.length;i++){
switch(i){
	case 0:
document.writeln("<tr><td class='abajo'>1</td><td class='abajo'>"+array[0]+"</td></tr>");
break;
	case 1:
	document.writeln("<tr><td class='abajo'>2</td><td class='abajo'>"+array[1]+"</td></tr>");
break;
	case 2:
	document.writeln("<tr><td class='abajo'>3</td><td class='abajo'>"+array[2]+"</td></tr>");
break;
	case 3:
	document.writeln("<tr><td class='abajo'>4</td><td class='abajo'>"+array[3]+"</td></tr>");
break;
		}
}
document.writeln("</table><br></div><br><br></section><br><br></center>")