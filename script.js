$(document).ready(function(){

  $('.left-curtain, .right-curtain').css('width', '0%');

  $('.valentines-day').click(function(){

      $('.envelope').css({'animation':'fall 3s linear 1'}).fadeOut(800, function() {
          $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').fadeOut();
          
          $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
          $('#card').animate({'opacity': 1}, {
              duration: 1000,
              step: function(now) {
                  let scale = 1 + Math.sin(now * Math.PI) * 0.05; // Animación de ondulación más sutil
                  $(this).css('transform', `scale(${scale})`);
              },
              complete: function() {
                  $(this).css('transform', 'scale(1)'); 
                                    $('#close-card').fadeIn();
              }
          });
      });
  });

  
  $('#close-card').click(function(){
      $('#card').animate({'opacity': 0}, {
          duration: 800,
          complete: function() {
              $(this).css({'visibility': 'hidden', 'transform': 'scale(0.1)'});
              $('.envelope').fadeIn();
              $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').fadeIn();
              $('#close-card').fadeOut();
          }
      });
  });
});
