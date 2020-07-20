//fade slider - intro dress
$(document).ready(function() {
  var slideNum = $(".wrap_slider .slideImg li").index();
  var num = 0;

  $(".slideImg li").hide();
  $(".slideImg li:eq(0)").show();

  $(".fBtn .fBack").click(function() {
    if (num == 0) {
      num = 0;
      return;
    } else num--;

    $(".slideImg li").hide();
    $(".slideImg li:eq(" + num + ")").fadeIn(1000);
  });
  $(".fBtn .fNext").click(function() {
    if (num == 4) {
      num = 4;
      return;
    } else num++;

    $(".slideImg li").hide();
    $(".slideImg li:eq(" + num + ")").fadeIn(1000);
  });

  //sticky menu
  $(window).on("scroll", function() {
    var scrollInfo = $(window).scrollTop() + 200;
    var windowH = $(window).height();
    if (scrollInfo > windowH) {
      $("#headerArea").addClass("on");
    } else {
      $("#headerArea").removeClass("on");
    }
  });

  $(window).resize(function() {
    $(window).on("scroll", function() {
      var scrollInfo = $(window).scrollTop() + 200;
      var windowH = $(window).height();
      if (scrollInfo > windowH) {
        $("#headerArea").addClass("on");
      } else {
        $("#headerArea").removeClass("on");
      }
    });
  });

  //fullscreen video
  var scrnWth = $(window).width();
  var scrnHth = $(window).height();
  var current = false;

  $("#content").css("margin-top", scrnHth);

  if (scrnWth > 768) {
    $("#mVideo").show();
    $("#mImg").hide();
  }
  if (scrnWth <= 768) {
    $("#mVideo").hide();
    $("#mVideo").attr("src", "");
    $("#mImg").show();
  }

  $(window).resize(function() {
    scrnWth = $(window).width();
    scrnHth = $(window).height();

    $("#content").css("margin-top", scrnHth);

    if (scrnWth > 768 && current == false) {
      $("#mVideo").show();
      $("#mVideo").attr("src", "images/main.mp4");
      $("#mImg").hide();
      current = true;
    }
    if (scrnWth <= 768) {
      $("#mVideo").hide();
      $("#mVideo").attr("src", "");
      $("#mImg").show();
      current = false;
    }
  });

  //Scrolldown
  $(".scrollDown").click(function(e) {
    e.preventDefault();

    scrnHth = $(window).height();

    if (scrnHth > 768) {
      $("html,body")
        .stop()
        .animate({ scrollTop: scrnHth - 75 }, 1000);
    } else {
      $("html,body")
        .stop()
        .animate({ scrollTop: scrnHth - 87 }, 1000);
    }
  });
});
