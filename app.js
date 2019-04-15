$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 718) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });

  $("#header,.info").ripples({
    dropRadius: 25,
    perturbance: 0.6
  });
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
