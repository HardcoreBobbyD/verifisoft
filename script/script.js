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

//Va la función del suma y resta del 1er producto:
function suma1(){;
	totProducto1 += 1;
	total += producto1;
	totProductos += 1;
	document.getElementById("precioTotal").innerHTML = "$ " + total;
	document.getElementById("totProducto1").innerHTML = "total de productos: " + totProducto1;
	document.getElementById("totProductosGlobal").innerHTML = "TOTAL DE PRODUCTOS: " + totProductos;
	return total;
	return totProductos;
}

function resta1(){
	if (total > 0) {
		total -= producto1;
		document.getElementById("precioTotal").innerHTML = "$ " + total;		
	};
	if (totProducto1 > 0) {
		totProducto1 -= 1;
		document.getElementById("totProducto1").innerHTML = "total de productos: " + totProducto1;		
	};
	return total;
	return totProductos;
}

//Va la función del suma y resta del 2do producto:
