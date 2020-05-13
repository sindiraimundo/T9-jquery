//1.FAÇA O MENU LATERAL APAREÇA
//2.FAÇA O MENU LATERAL DESAPAREÇA
$(document).ready(function(){

    // $("#botaoAbrir").click(function(){
    //     $("#menulateral").slideDown(1000)
    // })

    // $("#botaoFechar").click(function(){
    //     $("#menulateral").slideUp(500)
    // })

    // CORREÇÃO
    //Resolvendo somente com CSS
   
        // $("#botaoAbrir").click(function() {
        //     $("#menulateral").css("display", "block");
        //     $(".div-botao").css("margin-left", "250px")
        // })
        // $("#botaoFechar").click(function() {
        //     $("#menulateral").css("display", "none");
        //     $(".div-botao").css("margin-left", "0px")
        // })

    //dá pra resolver com hide()/show(), fadein(), fadeOut(), toggle()
    //Resolvendo somente com TOGGLE
    $("#botaoAbrir").click(function() {
        $("#menulateral").toggle()
        $(".div-botao").css("margin-left", "250px")
    })
    $("#botaoFechar").click(function() {
        $("#menulateral").hide()
        $(".div-botao").css("margin-left", "0px")
    })
    
})