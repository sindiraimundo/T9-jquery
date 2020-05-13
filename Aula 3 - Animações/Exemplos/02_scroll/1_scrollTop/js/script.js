//problema - eu quero ir para o topo

$(document).ready(function(){

    $("#buttonTop").click(function(){
        $("html, body").animate({// chamar os dois elementos para garantir que funcione em todos os navegadores e versões
            scrollTop: "0"
        }, 3000)//milisegundos
    })




})