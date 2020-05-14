$(document).ready(function(){
    console.log($("#button").offset(), 'quem é o offset')
   console.log($("#button").position(), 'position left')

    // $("#button").click(function(){
    //     alert("Left:" + $(this).offset().left)// para chamar o objeto colocamos .offset(). a propriedade do objeto que vc que chamar
    // })

    //offset é uma função que retorna um objeto

    //"descer" trabalhar com ==> referencia
    $(".down").click(function(){
        $("html, body").animate({
            scrollTop: $(".up").offset().top,
        },
        5000
        );
    });

    // "subir" ==> retornando as origens
    $(".up").click(function(){
        $("html, body").animate({
            scrollTop: "0"
        },    
        5000
        );
    })

})