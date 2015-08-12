var producto1 = 300;
var totProducto1 = 0;
var producto2 = 400;
var totProducto2 = 0;
var producto3 = 500;
var totProducto3 = 0;
var producto4 = 600;
var totProducto4 = 0;

var total = 0;
var totProductos = 0;

//Va la función de suma y resta del 1er producto:
function suma1(){
	totProducto1 += 1;
	total += producto1;
	totProductos += 1;
	document.getElementById("precioTotal").innerHTML = "$ " + total;
	document.getElementById("totProducto1").innerHTML = "total de productos 1: " + totProducto1;
	document.getElementById("totProductosGlobal").innerHTML = "TOTAL DE PRODUCTOS: " + totProductos;
	return total;
	return totProductos;
}

function resta1(){
	if (totProducto1 > 0) {
		total -= producto1;
		document.getElementById("precioTotal").innerHTML = "$ " + total;		
	
		totProducto1 -= 1;
		document.getElementById("totProducto1").innerHTML = "total de productos 1: " + totProducto1;		
	
		totProductos -= 1;
		document.getElementById("totProductosGlobal").innerHTML = "TOTAL DE PRODUCTOS: " + totProductos;
	};
	return total;
	return totProductos;
}

//Va la función del suma y resta del 2do producto:
function suma2(){;
	totProducto2 += 1;
	total += producto2;
	totProductos += 1;
	document.getElementById("precioTotal").innerHTML = "$ " + total;
	document.getElementById("totProducto2").innerHTML = "total de productos 2: " + totProducto2;
	document.getElementById("totProductosGlobal").innerHTML = "TOTAL DE PRODUCTOS: " + totProductos;
}

function resta2(){
	if (totProducto2 > 0) {
		total -= producto2;
		document.getElementById("precioTotal").innerHTML = "$ " + total;		
	
		totProducto2 -= 1;
		document.getElementById("totProducto2").innerHTML = "total de productos 2: " + totProducto2;		
	
		totProductos -= 1;
		document.getElementById("totProductosGlobal").innerHTML = "TOTAL DE PRODUCTOS: " + totProductos;
	};
}

//Va la función del suma y resta del 3er producto:
function suma3(){;
	totProducto3 += 1;
	total += producto3;
	totProductos += 1;
	document.getElementById("precioTotal").innerHTML = "$ " + total;
	document.getElementById("totProducto3").innerHTML = "total de productos 3: " + totProducto3;
	document.getElementById("totProductosGlobal").innerHTML = "TOTAL DE PRODUCTOS: " + totProductos;
	return total;
	return totProductos;
}

function resta3(){
	if (totProducto3 > 0) {
		total -= producto3;
		document.getElementById("precioTotal").innerHTML = "$ " + total;		
	
		totProducto3 -= 1;
		document.getElementById("totProducto2").innerHTML = "total de productos 3: " + totProducto3;		
	
		totProductos -= 1;
		document.getElementById("totProductosGlobal").innerHTML = "TOTAL DE PRODUCTOS: " + totProductos;
	};
}

//Va la función del suma y resta del 4to producto:
function suma4(){;
	totProducto4 += 1;
	total += producto4;
	totProductos += 1;
	document.getElementById("precioTotal").innerHTML = "$ " + total;
	document.getElementById("totProducto4").innerHTML = "total de productos 4: " + totProducto4;
	document.getElementById("totProductosGlobal").innerHTML = "TOTAL DE PRODUCTOS: " + totProductos;
	return total;
	return totProductos;
}

function resta4(){
	if (totProducto4 > 0) {
		total -= producto4;
		document.getElementById("precioTotal").innerHTML = "$ " + total;		
	
		totProducto4 -= 1;
		document.getElementById("totProducto4").innerHTML = "total de productos 4: " + totProducto3;		
	
		totProductos -= 1;
		document.getElementById("totProductosGlobal").innerHTML = "TOTAL DE PRODUCTOS: " + totProductos;
	};
}

//Pop Up con datos de Facturación
function popUp() { 
	//alert("ZUPO!");
	window.open(datosFiscales.html,'name','height=200,width=150')
} 