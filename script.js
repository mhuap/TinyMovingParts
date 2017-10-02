
$(document).ready(function(){
  $(".title").css("height", $(window).height());
});

$(window).resize(function(){
  $(".title").css("height", $(window).height());
});
