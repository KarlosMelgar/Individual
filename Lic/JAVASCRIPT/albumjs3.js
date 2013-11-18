var arreglo=new Array();
arreglo[0]="Crucify Me";
arreglo[1]="Anthem";
arreglo[2]="It Never Ends";
arreglo[3]="Fuck";
arreglo[4]="Don't Go";
arreglo[5]="Home Sweet Hole";
arreglo[6]="Alligator Blood";
arreglo[7]="Visions";
arreglo[8]="Blacklist";
arreglo[9]="Memorial";
arreglo[10]="Blessed with a Curse";
arreglo[11]="The Fox and the Wolf";
arreglo[12]="Chelsea Smile - En vivo desde el Tour 2010";
arreglo[13]="The Sadness Will Never End Skrillex remix";
document.write("<header class='arriba'><center><a href='albunes.html'><font size='+4' style='text-shadow:1px 1px 1px #FFF'><p class='icon icon-home'>Home</p></font></a></center></header>");
document.writeln("<section><center><h1 class='title icon icon-music'>Album There Is a Hell, Believe Me I've Seen It. There Is a Heaven, Let's Keep It a Secret</h1></center></section><br>")
document.writeln("<center><section class='songs'><div><br><center><p style='text-align:justify' class='parrafo'>There Is a Hell, Believe Me I've Seen It. There Is a Heaven, Let's Keep It a Secret es el tercer album de la banda britanica de metalcore, Bring Me the Horizon, contando con la participacion del nuevo guitarrista Jona Weinhofen. El lanzamiento del material ocurrio el 4 de octubre de 2010 en Europa y el 5 de octubre en Estados Unidos bajo el sello discografico de Visible Noise Records. La inspiracion para el album partio de letras personales que el propio Sykes describe como el tipo de cosas que no le cuenta a la gente. Este material conto con la produccion de Fredrik Nordstrom y las grabaciones hechas en los IF Studios durante al menos ocho meses, asimismo con pequeñas grabaciones hechas en Los Angeles donde se incluyeron voces alternas de Valerie Anne Poxleitner (Lights) y Josh Franceschi.</p></center><br><img src='../IMG/there.jpg' width='60%' height='80%' style='border-radius:20px'></img><br>");

document.writeln("<h2>Canciones</h2><br><table><tr><td class='arriba'>No</td><td class='arriba'>Titulo</td></tr>");
for(var i=0;i<arreglo.length;i++){
document.writeln("<tr><td class='abajo'>"+(parseInt(i)+1)+"</td><td class='abajo'>"+arreglo[i]+"</td></tr>")
}
document.writeln("</table><br><br></div><br><br></section><br><br></center>")