$(document).ready(function(){

    $("button").click(function() {
        $("#div1").fadeIn(5000); //nascer do sol
        $("#div2").fadeOut(5000); //pôr do sol
        $("#div3").fadeToggle(2000); //os dois
    })
})

// o que vai dentro da função
//(parametro), (argumento)ou 

//o evento recebe 3 argumentos
//slow
//fast
//milisegundos

