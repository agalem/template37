var imgs = $('.client-photo');
var texts = $('.client-comment');


$(document).on('click', '.thumb', function (e) {
    var toShow = $(this).attr('id');

   e.preventDefault();

   imgs.removeClass('active-comment heartbeat').addClass('hidden-comment');
   texts.removeClass('active-comment heartbeat').addClass('hidden-comment');

   var newImg = $('img.'+toShow);
   var newText = $('div.'+toShow);


   newImg.removeClass('hidden-comment').addClass('active-comment heartbeat');
   newText.removeClass('hidden-comment').addClass('active-comment heartbeat');

});