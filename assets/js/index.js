/* Activación tooltip de Bootstrap*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

/* Activacion modal para cards*/
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
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

//Cambio de color iconosfb :hover
   $(".fa-facebook-square").hover(function(){
    
    $(".fa-facebook-square").css("color","#2B303A");
  },
  function(){
    
    $(".fa-facebook-square").css("color","inherit");
  });


//Cambio de color iconotwitter :hover

  $(".fa-twitter-square").hover(function(){
    
    $(".fa-twitter-square").css("color","#2B303A");
  },
  function(){
    
    $(".fa-twitter-square").css("color","inherit");
  });

//Cambio de color iconolinkedin :hover
  $(".fa-linkedin").hover(function(){
    
    $(".fa-linkedin").css("color","#2B303A");
  },
  function(){
    
    $(".fa-linkedin").css("color","inherit");
  });
//Cambio de color iconogithub :hover
  $(".fa-github-square").hover(function(){
    
    $(".fa-github-square").css("color","#2B303A");
  },
  function(){
    
    $(".fa-github-square").css("color","inherit");
  });



});