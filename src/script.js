$(window).load(function(){
   activeItem();
});

$(function(){

   $('main header, main section article').each(function(){
      var   toto = this,
            id = $(toto).attr('id'),
            tooltip = $(toto).attr('data-tooltip');
      $('.slider').append('<li><a href="#' + id + '"><span></span></a></li>');
   });

   $('.skryj').on('click', function(){
      var cas = 350;
      $('sidebar').stop(true,true).toggleClass('aktivni', cas, "easeInExpo");
      $('main').stop(true,true).toggleClass('aktivni', cas, "easeInExpo");
   });

   $(window).scroll(function(){
      activeItem();
   });

   $('.slider a').on('click', function(e){
     var odkaz = $(this).attr('href'),
         rychlost = 1000,
         efekt = "easeInOutQuart";

     $("html, body").stop(true,true).animate(
      { scrollTop: $(odkaz).offset().top },
      rychlost, efekt );

     e.preventDefault();
   });

   $('.toolbar .skryj i').on('click', function(){
      $('.toolbar .skryj i').each(function(){
         $(this).toggleClass('aktivni');
      });
   });

   $('.openLightbox').on('click',function(e){
      var id = $(this).attr('href');
      $(id).click();
      e.preventDefault();
   });

   

});

function activeItem()
{
   console.log('start');
   var menu = $('.slider');
   var odchylka = 100;
   var scroll_top = $(window).scrollTop();

   menu.find('li.aktivni').removeClass('aktivni');

   $("main header, main section article").each(function(){
      var toto = this;
      var article_top = $(toto).offset().top;
      var article_height = $(toto).innerHeight();
      var article_id = $(toto).attr('id');
            
      var min = article_top - odchylka;
      var max = article_top + article_height - odchylka;

      if ( (scroll_top > min) && (scroll_top < max) )
      {
         menu.find('li a[href="#'+article_id+'"]').parent().addClass('aktivni');
         console.log(article_id);
      }
   });   
}