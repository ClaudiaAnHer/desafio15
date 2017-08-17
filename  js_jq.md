var calcularIMC = function(peso, estatura){
 	return peso / (estatura * estatura);
 }

 var interpretarIMC = function(peso, estatura){
 	var imc = calcularIMC(peso, estatura);
 	if (imc > 24){
 		return "sobrepeso";
 	} else if (imc > 19) {
 		return "ok";
 	} else {
 		return "bajo peso";
 	}
 }

 resultado = InterpretarIMC(95);
 console.log(resultado);
 