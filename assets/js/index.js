/* Activación tooltip de Bootstrap*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
/* JQUERY */
$(document).ready(function(){
  //Cambio de color h2 :hover
  $("h2 ").hover(function(){
    //cursor dentro
    $("h2 ").css("color","#17a3b8");
  },
  function(){
    //cursor fuera
    $("h2 ").css("color","inherit");
  });

   //Cambio de color iconos :hover
   $(".fa-facebook-square").hover(function(){
    //cursor dentro
    $(".fa-facebook-square").css("color","#2B303A");
  },
  function(){
    //cursor fuera
    $(".fa-facebook-square").css("color","inherit");
  });


//

  $(".fa-twitter-square").hover(function(){
    //cursor dentro
    $(".fa-twitter-square").css("color","#2B303A");
  },
  function(){
    //cursor fuera
    $(".fa-twitter-square").css("color","inherit");
  });

//
$(".fa-linkedin").hover(function(){
  //cursor dentro
  $(".fa-linkedin").css("color","#2B303A");
},
function(){
  //cursor fuera
  $(".fa-linkedin").css("color","inherit");
});
//
$(".fa-github-square").hover(function(){
  //cursor dentro
  $(".fa-github-square").css("color","#2B303A");
},
function(){
  //cursor fuera
  $(".fa-github-square").css("color","inherit");
});

});