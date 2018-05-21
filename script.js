
        function Sumar() {
        	console.log(document.getElementById('costo1').value);
            var n1 = document.getElementById('costo1').value;
            var n2 = document.getElementById('costo2').value;
            var n3 = document.getElementById('costo3').value;
            var suma = parseInt(n1) + parseInt(n2) + parseInt(n3);
            alert("La suma es: "+suma)
        }

var counter = 1;
    
        $(document).ready(function() {
    
            $("#addMe").click(function(){
                counter++;
    
                $("#theCount").text(counter);
            });
    
        });



var textoqueseguardara;

textoqueseguardara = input.value 

// guardar datos domicilio
localStorage.setItem("nombre", "dato");

 // leer datos
 var miDato = localStorage.getItem("nombre");