var arreglo=new Array();
arreglo[0]="The Comedown";
arreglo[1]="Chelsea Smile";
arreglo[2]="It Was Written in Blood";
arreglo[3]="Death Breath";
arreglo[4]="Football Season Is Over";
arreglo[5]="Sleep with One Eye Open";
arreglo[6]="Diamonds Aren't Forever";
arreglo[7]="The Sadness Will Never End";
arreglo[8]="No Need for Introductions, I've Read About Girls Like You on the Backs of Toilet Doors";
arreglo[9]="Suicide Season";
arreglo[10]="MOLES 4EVER";
document.write("<header class='arriba'><center><a href='albunes.html'><font size='+4' style='text-shadow:1px 1px 1px #FFF'><p class='icon icon-home'>Home</p></font></a></center></header>");
document.writeln("<section><center><h1 class='title icon icon-music'>Album Suicide Season</h1></center></section><br>")
document.writeln("<center><section class='songs'><div><br><center><p style='text-align:justify' class='parrafo'>Suicide Season es el segundo album de estudio de la banda britanica Bring Me the Horizon. Fue publicado el 29 de septiembre de 2008 por Visible Noise en el Reino Unido y Europa. La banda firmo una licencia con Epitaph Records el 11 de septiembre de 2008 para liberar el album con la etiqueta de la disquera el 18 de noviembre de 2008 en los Estados Unidos. Suicide Season es el seguimiento de la banda del primer album, Count Your Blessings.</p></center><br><img src='../IMG/Suicide.jpg' width='60%' height='80%' style='border-radius:20px'></img><br>");

document.writeln("<h2>Canciones</h2><br><table><tr><td class='arriba'>No</td><td class='arriba'>Titulo</td></tr>");
for(var i=0;i<arreglo.length;i++){
document.writeln("<tr><td class='abajo'>"+(parseInt(i)+1)+"</td><td class='abajo'>"+arreglo[i]+"</td></tr>")
}
document.writeln("</table><br><br></div><br><br></section><br><br></center>")