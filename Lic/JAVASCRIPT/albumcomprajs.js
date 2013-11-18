var params = location.search.match(/[a-z_]\w*(?:=[^&]*)?/gi);
var num=parseInt(params[0].charAt(2));
var a=confirm('Esta seguro que desea comprar album')

document.write("<header class='arriba'><center><a href='Index.html'><font size='+4' style='text-shadow:1px 1px 1px #FFF'><p class='icon icon-home'>Home</p></font></a></center></header>");
document.writeln("<section><center><h1 class='title icon icon-music'>Album Sempiternal - Precio $40.60</h1></center></section><br>")
if(!a==true){
document.writeln("<center><section class='songs'><div><br><center><p style='text-align:justify' class='parrafo'>No ha comprado el producto puede retorna en la casita de arriba</p></center><br><img src='../IMG/Sempiternal.jpg' width='60%' height='80%' style='border-radius:20px'></img><br><br></div><br><br></section><br><br></center>")
	}else{
var cantidad=0;
do{
cantidad=prompt('Ingrese la cantidad a llevar','');
var patern='^[0-9]+$';
if (!cantidad.match(patern)){
		alert('La cantidad deben ser numeros')
		var2=0;
}
else{
		var2=1;	
}
}while(var2==0);
document.writeln("<center><section class='songs'><div><br><center><p style='text-align:justify' class='parrafo'>Su compra ha sido realizada con exito su total a pagar es de: $"+parseFloat(parseFloat(cantidad)*parseFloat(40.60))+"</p></center><br><img src='../IMG/Sempiternal.jpg' width='60%' height='80%' style='border-radius:20px'></img><br><br></div><br><br></section><br><br></center>")
	}