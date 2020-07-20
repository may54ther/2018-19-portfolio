$(document).ready(function() {
  //gnb
  $(".gnbBtn").toggle(
    function() {
      $("#gnb").slideDown("slow");
    },
    function() {
      $("#gnb").slideUp("fast");
    }
  );

  var loadingHeight = $(document).height();
  $("#loading").height(loadingHeight);

  $(window).resize(function() {
    var screenSize = $(window).width();
    loadingHeight = $(document).height();
    $("#loading").height(loadingHeight);

    if (screenSize > 785 && $("#gnb").css("display", "none")) {
      $("#gnb").show();
    }
    if (screenSize < 785 && $("#gnb").css("display", "block")) {
      $("#gnb").hide();
    }
  });

  //scrollTop
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 300) {
      $("#scrollTop").show();
    } else {
      $("#scrollTop").hide();
    }
  });

  $("#scrollTop").click(function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, 300);
  });
});

//loading
$(window).load(function() {
  $("#loading").hide();
  $("#wrap, #mVideo, #skipNav").show();
});
