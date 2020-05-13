//1.FAÇA O MENU LATERAL APAREÇA
//2.FAÇA O MENU LATERAL DESAPAREÇA
$(document).ready(function(){

    $("#botaoAbrir").click(function(){
        $("#menulateral").slideDown(1000)
    })

    $("#botaoFechar").click(function(){
        $("#menulateral").slideUp(500)
    })

})