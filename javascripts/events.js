$(document).ready(function(){

  // Ações do usuário que mostram e/ou escondem o logotipo.
  // Por padrão, mostra no topo e fim da página.
  // Remova ou reescreva de acordo com o projeto.

  $(window).scroll(function(){

    var nav = $("nav");
    var scroll = $(window).scrollTop();

    // Mostra o nav quando a página está no topo
    if(scroll == 0){
      nav.fadeIn();
    //Mostra a nav quando a página chega no fim
    //} else if (scroll == $(document).height() - $(window).height()) {
     // nav.fadeIn();
    //Esconde a nav
    } else {
      nav.fadeOut();
    }

  });

  $(".avancarEtapa2").on("click", function(){
      $('body').css('background', 'white');
     var etapaAtual = $(this).parents(".etapa1");
      etapaAtual.hide();
      $(".etapa2").fadeIn("slow");
      $('#menu').show();
  });

  


    $("#click1").click(function() {
      $('html, body').animate({
         scrollTop: $(".bg-marker1").offset().top
     }, 500);
    });
    $("#click2").click(function() {
      $('html, body').animate({
         scrollTop: $(".bg-marker2").offset().top
     }, 500);
    });

    $("#click3").click(function() {
      $('html, body').animate({
         scrollTop: $(".bg-marker3").offset().top
     }, 500);
    });
    $("#click4").click(function() {
      $('html, body').animate({
         scrollTop: $(".bg-marker4").offset().top
     }, 500);
    });
    $("#click5").click(function() {
      $('html, body').animate({
         scrollTop: $(".bg-marker5").offset().top
     }, 500);
    });
    $("#click6").click(function() {
      $('html, body').animate({
         scrollTop: $(".bg-marker6").offset().top
     }, 500);
    });
  


  $('.bg-marker1').on('click',function() {
    setTimeout(myFunction1, 300);
    $('html, body').animate({
         scrollTop: $(".bg-marker1").offset().top
     }, 500);
    $('.bg-marker2').prop("disabled",false);
    $('#click1').show();
    
  });
  $('.bg-marker2').on('click',function() {
    setTimeout(myFunction2, 300);
    $('html, body').animate({
         scrollTop: $(".bg-marker2").offset().top
     }, 500);
    $('.bg-marker3').prop("disabled",false);
    $('#click2').show();
    
  });
  $('.bg-marker3').on('click',function() {
    setTimeout(myFunction3, 300);
    $('html, body').animate({
         scrollTop: $(".bg-marker3").offset().top
     }, 500);
    $('.bg-marker4').prop("disabled",false);
    $('#click3').show();
    
  });
  $('.bg-marker4').on('click',function() {
    setTimeout(myFunction4, 300);
    $('html, body').animate({
         scrollTop: $(".bg-marker4").offset().top
     }, 500);
    $('.bg-marker5').prop("disabled",false);
    $('#click4').show();
  });
  $('.bg-marker5').on('click',function() {
    setTimeout(myFunction5, 300);
    $('html, body').animate({
         scrollTop: $(".bg-marker5").offset().top
     }, 500);
    $('.bg-marker6').prop("disabled",false);
    $('#click5').show();
  });
  $('.bg-marker6').on('click',function() {
    setTimeout(myFunction6, 300);
      $("#imprimir").show();
      $(".fim").show();
    $('html, body').animate({
         scrollTop: $(".bg-marker6").offset().top
     }, 500);
    $('#click6').show();
  });

  function myFunction1() {
    $('.bg-marker1').prop("disabled",true);
  }
  function myFunction2() {
    $('.bg-marker2').prop("disabled",true);
  }
  function myFunction3() {
    $('.bg-marker3').prop("disabled",true);
  }
  function myFunction4() {
    $('.bg-marker4').prop("disabled",true);
  }
  function myFunction5() {
    $('.bg-marker5').prop("disabled",true);
  }
  function myFunction6() {
    $('.bg-marker6').prop("disabled",true);
  }

  $(".avancarEtapa2").on("click", function(){
    $('html,body').scrollTop(0);
  })


  $(".impressao2").click(function(){
  $('#item-0').show();
  $('#item-1').show();
  $('#item-2').show();
  $('#item-3').show();
  $('#item-4').show();
  $('#item-5').show();
  window.print();
  setTimeout(function(){
  $('#item-0').show();
  $('#item-1').show();
  $('#item-2').show();
  $('#item-3').show();
  $('#item-4').show();
  $('#item-5').show();
},10);
  return false;
     });
  $(".impressao3").click(function(){
  $('#item-1').hide();
  $('#item-2').hide();
  $('#item-3').hide();
  $('#item-4').hide();
  window.print();
  setTimeout(function(){
  $('#item-0').show();
  $('#item-1').show();
  $('#item-2').show();
  $('#item-3').show();
  $('#item-4').show();
  $('#item-5').show();
},10);
  return false;
     });
  
  var header = document.getElementById("menu");
var btns = header.getElementsByClassName("btn-c");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
  


  /*$("#click2").click(function (){
     $('html, body').scrollTo(3000);
    i=0;
    $('html, body').animate({
      scrollTop: $(".etapa2").offset().top
    }, 2000);
});

 $('body').scrollTo('#target'); // Scroll screen to target element
 $('body').scrollTo(500); // Scroll screen 500 pixels down
 $('#scrollable').scrollTo(100); // Scroll individual element 100 pixels down

$.fn.scrollTo = function (speed) {
    if (typeof(speed) == 'undefined')
        speed = 1000;

    $('html, body').animate({
        scrollTop: parseInt($(this).offset().top)
    }, speed);
};*/


// guardar valores em uso
var h = $(window).height(),
    w = $(window).width();

// realizar verificação
$(window).resize(function(){

    // recolher valores actuais
    var nh = $(window).height(),
        nw = $(window).width();

    /* comparar os valores antigos com os novos
     * e realizar ação pretendida aqui!
     */
    if (nh != h)
        $('#msg').html("Estás a alterar a altura de "+h+"px para "+nh+"px.");
    else if (nw != w)
        $('#msg').html("Estás a alterar a largura de "+w+"px para "+nw+"px.");

    // atualizar os valores nas variáveis que guardam o valor antigo
    h = nh; w = nw;
});

})
