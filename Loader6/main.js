$(function(){
  
  var preloader= $('.preloader');
  var cubes = $('.cube');
  var cube1 = $('.one');
  var cube2 = $('.two');
  var cube3 = $('.three');
  var cube4 = $('.four');
  
   tl= new TimelineMax({repeat:-1}); //repeat:-1

   tl
     .to(cube1,0.2,{x:-30, ease:Power1.easeIn})
    .to(cube1,0.2,{x:0, ease:Power1.easeOut})
    .to(cube4,0.2,{x:30, ease:Power1.easeOut})
     .to(cube4,0.2,{x:0, ease:Power1.easeIn})
 //    .to(cube1,0.2,{x:0, ease:Power1.easeOut})
   
  $('#btnPlay').on('click', function(){
      tl.play();
  });
  $('#btnPause').on('click', function(){
      tl.pause();
  });
  $('#btnResume').on('click', function(){
      tl.resume();
  });
  $('#btnReverse').on('click', function(){
      tl.reverse();
  });
  $('#btnRestart').on('click', function(){
      tl.restart();
  });
  function restart(){
    tl.restart();
  }
});


