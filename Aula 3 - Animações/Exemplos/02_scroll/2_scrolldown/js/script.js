$(document).ready(function(){
    console.log($("#button").offset(), 'quem é o offset')

    $("#button").click(function(){
        alert("Left:" + $(this).offset().left)// para chamar o objeto colocamos .offset(). a propriedade do objeto que vc que chamar
    })

    //offset é uma função que retorna um objeto

})