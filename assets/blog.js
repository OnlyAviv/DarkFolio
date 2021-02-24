window.onload = function() {
  if(performance.navigation.type == 2){
   location.reload(true);
  }
  var $all_msg = $('.big-header');
  var $wordList = ($('.author').text() + "'s blog").split("");
  $.each($wordList, function(idx, elem) {
    //create a span for the letter and set opacity to 0
    if (idx < $wordList.length - 7) {
      var newEL = $("<span/>").text(elem).css({
        opacity: 0,
        color: $(".color").text()
      });
    } else {
      var newEL = $("<span/>").text(elem).css({
        opacity: 0,
      });
    }
    //append it to the welcome message
    newEL.appendTo($all_msg);
    //set the delay on the animation for this element
    newEL.delay(idx * 33);
    //animate the opacity back to full 1
    newEL.animate({
      opacity: 1
    }, 500);
  });
  $(".sdc").fadeIn(200);
  //
  gsap.registerPlugin(ScrollTrigger)
  var cards = gsap.utils.toArray(".card")
  cards.forEach((item) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "top bottom-=200",
        scrub: true
      },
      opacity: 1,
      transform: "translateY(0px)",
    })
  });

}

$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
});
