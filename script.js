$(document).ready(function () {
  var index = 0;
  function activeProject() {
    var $imgSlide = $(".projects-carousel .img-slide");
    var $projectDetails = $(".projects-detail");
    $imgSlide.css(
      "transform",
      "translateX(calc(" + index * -100 + "% - " + index * 1 + "rem))"
    );
    $projectDetails.removeClass("actives");
    $projectDetails.eq(index).addClass("actives");
  }
  $(".projects-box .navigation .arrow-right").click(function () {
    if (index < 2) {
      index++;
      $(".projects-box .navigation .arrow-left").removeClass("disabled");
    } else {
      index = 3;
      $(".projects-box .navigation .arrow-right").addClass("disabled");
    }
    activeProject();
  });
  $(".projects-box .navigation .arrow-left").click(function () {
    if (index > 1) {
      index--;
      $(".projects-box .navigation .arrow-right").removeClass("disabled");
    } else {
      index = 0;
      $(".projects-box .navigation .arrow-left").addClass("disabled");
    }
    activeProject();
  });
});
