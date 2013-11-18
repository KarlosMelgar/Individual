function validar(){
	var obj=new Object();
	var nombre=document.getElementById("txtNombre");
	var asunto=document.getElementById("txtAsunto");
	var email=document.getElementById("txtemail");
	var telefono=document.getElementById("txtNum");
	var mensaje=document.getElementById("txtMensaje");
	var obj= new Object();
	obj.pnombre=nombre.value
	obj.pasunto=asunto.value
	obj.pemail=email.value
	obj.ptelefono=telefono.value
	obj.mensaje=mensaje.value
	tests(obj)
	}
function tests(o)
{
	var patern='^[a-zA-Z0-9]+$'
	if (!o.pnombre.match(patern)){
		alert('Llene el nombre campos con letras y numeros')
		}else{
	patern='^[a-zA-Z0-9]+$'
	if (!o.pasunto.match(patern)){
		alert('Llene el asunto con letras y numeros')
		}else{
		patern='^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'
	if (!o.pemail.match(patern)){
		alert('Llene el email con este formato:email@hotmail.com')
		}else{
		patern='^[0-9]+$'
	if (!o.ptelefono.match(patern)){
		alert('Llene el telefono con campos')
		}else{
		patern='^[a-zA-Z0-9]+$'
	if (!o.mensaje.match(patern)){
		alert('Llene los campos con letras y numeros')
		}else{
		alert('Datos llenados exitosamente')	
			}
		}
		}
		}
	}
	
}