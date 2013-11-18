var arreglo=new Array();
arreglo[0]="Pray for Plagues";
arreglo[1]="Tell Slater Not to Wash His Dick";
arreglo[2]="For Stevie Wonder's Eyes Only (Braille)";
arreglo[3]="A Lot Like Vegas";
arreglo[4]="Black & Blue";
arreglo[5]="Slow Dance (Instrumental)";
arreglo[6]="Liquor & Love Lost";
arreglo[7]="(I Used to Make Out With) Medusa";
arreglo[8]="Fifteen Fathoms, Counting (Instrumental)";
arreglo[9]="Off the Heezay";
arreglo[10]="Eyeless (Slipknot cover) (Hot Topic Bonus Track)";
document.write("<header class='arriba'><center><a href='albunes.html'><font size='+4' style='text-shadow:1px 1px 1px #FFF'><p class='icon icon-home'>Home</p></font></a></center></header>");
document.writeln("<section><center><h1 class='title icon icon-music'>Album Count Your Blessings</h1></center></section><br>")
document.writeln("<center><section class='songs'><div><br><center><p style='text-align:justify' class='parrafo'>Count Your Blessings es el album debut grabado en un estudio de la banda de metalcore/deathcore, Bring Me the Horizon, seguida del primer album This Is What the Edge of Your Seat Was Made For. Salio a la venta el 30 de octubre de 2006 en tiendas de todo el Reino Unido, y el 14 de agosto del 2007 en America.El disco es del genero deathcore pero tiene un tema acustico llamado Fifteen Fathoms, Counting de 1:57. Fue el primer album de estudio de la banda.</p></center><br><img src='../IMG/Count.jpg' width='60%' height='80%' style='border-radius:20px'></img><br>");

document.writeln("<h2>Canciones</h2><br><table><tr><td class='arriba'>No</td><td class='arriba'>Titulo</td></tr>");
for(var i=0;i<arreglo.length;i++){
document.writeln("<tr><td class='abajo'>"+(parseInt(i)+1)+"</td><td class='abajo'>"+arreglo[i]+"</td></tr>")
}
document.writeln("</table><br>")
document.writeln("<br></div><br><br></section><br><br></center>")