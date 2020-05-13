
  // 1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"
    $(document).ready(function(){
      $("body").css("font-family", "Arial, sans-serif")
  
   
  // 2. Preencha os spans do html utilizando JQuery, adicionando informações suas. 
  // ATENÇÃO! As informações devem estar estar guardadas em variáveis!
      var nickName = "Sindi Raimundo da Silva"
      var favoritos = "Senhor dos anéis', 'Harry Potter' e 'Um olhar do Paraíso'"
      var cidade = "São Paulo"
      $("#nickname").text(nickName)
      $("#favoritos").text(favoritos)
      $("#cidade").text(cidade)

  // 3. Imagine que você muda com frequencia de opinião sobre um dos seus filmes favoritos. 
  // Sendo assim, crie uma variável "favDoMomento" com esse filme
    //  var favDoMomento = "Vingadores"
    //  $("#favoritos").dados(favDoMomento)
  // 3. selecione o h1 e altere seu texto para "sobre mim". Acrescente também a classe 'titulo' para que ele 
  // fique bacanudo
      $("h1").text("Sobre Mim")
      $("h1").addClass("titulo")
  // 4. Adicione as classes 'list' e 'item-list' na lista e nos itens de lista, utilizando JQuery
      $("li").removeClass("wrongClass")
      $("li").addClass("list")
      $("span").addClass("item-list")

     
  // 5. Adicionei uma classe errada! Suma com a classe 'wrongClass', utilizando JQuery
})

  //CORREÇÃO
  // $(document).ready(function(){

  //   let nickName = "Sindi Raimundo da Silva"
  //   let favoritos = "Senhor dos anéis', 'Harry Potter' e 'Um olhar do Paraíso'"
  //   let cidade = "São Paulo"
  //   let favDoMomento = "Vingadores"

  //   $("body").css("font-family", "Arial, sans-serif")

    
  //   $("#nickname").text(nickName)
  //   $("#favoritos").text([favoritos, favDoMomento])// text recebe mais de um argumento
  //   $("#cidade").text(cidade)

  //   $("h1")
  //   .text("Sobre mim")
  //   .addClass("titulo")

  //   $("li").addClass("list")
  //   $("span").addClass("item-list")
 
  //   //solução mais simples de remover classe
  //   //$("li").removeClass("wrongClass")

  //   //removendo a classe de acordo com a occorrencia da minha lista (forma mais especifica)
  //  $("li").eq(0).removeClass("wrongClass")    


  // })
