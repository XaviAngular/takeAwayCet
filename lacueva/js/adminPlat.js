var debug=true;
$( document ).ready(function(){
	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown();
	$('.modal').modal();
	cargaListado();
//Fin documentReady			
})

function cargaListado(){
	var urlGet="../php/listaPlat.php";
	$.ajax({
		dataType:'JSON',
		type:'GET',
		url:urlGet,
		success: function(resultado){			
		if (debug) console.warn(resultado.respuesta);
		Materialize.toast('Listado cargado', 2000);
		var myBody="";
		$.each(resultado.lista, function(k,v) {
			var plato={
				precio:v.precio,
				nombre:v.nombre
			};
	if (debug)console.log(v.precio);
	myBody+="<tr>";
	myBody+="<td>"+v.nombre+"</td>";
	myBody+="<td>"+v.precio+"</td>";
	myBody+="<td> <img src='../"+v.img+"' width='100px'></td>";
	myBody+="<td>"+v.activado+"</td>";
	myBody+="<td><i class='material-icons ver' onclick='openModal("+JSON.stringify(v)+")'>visibility</i></td>";
	myBody+="</tr>";
		})
		console.log(myBody);
		$('#listado tbody').html(myBody);
					
				},
		error: function(resultado){
					alert('errooooooooor');
		}
		
	})
}

function openModal(plato){
	if(debug) console.log(plato);
	$('.titulo').html(plato.nombre);
	$('.card-reveal p').html(plato.descripcion);
	$('.card-content p a').html(plato.precio);
	$('.activator').attr('src','../'+plato.img)
	$('#modal1').modal('open');	
}















