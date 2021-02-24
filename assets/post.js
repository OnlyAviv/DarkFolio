window.onload = function() {
  var $all_msg = $('.big-header');
  var $wordList = $('title').text().split(" | " + $('.author').text())[0].split("");
  $.each($wordList, function(idx, elem) {
    //create a span for the letter and set opacity to 0
    var newEL = $("<span/>").text(elem).css({
      opacity: 0,
    });
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
  gsap.to(".pagebody", {
    scrollTrigger: {
      trigger: ".divheader",
      start: "bottom-=300 top",
      end: "bottom-=200 top",
      scrub: true,
      toggleActions: "restart none reverse none"
    },
    opacity: 1,
    transform: "translateY(-50px)",
  })
  gsap.to(".divheader", {
    scrollTrigger: {
      trigger: ".divheader",
      start: "bottom-=300 top",
      end: "bottom-=200 top",
      scrub: true,
      toggleActions: "restart none reverse none"
    },
    backgroundColor: "white",
  })
}

$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
});
