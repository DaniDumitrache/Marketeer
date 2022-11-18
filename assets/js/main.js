$(document).ready(function () {
  $("#Open").click(function () {

      $(".navbar").addClass("MenuActive");
console.log(1)
  });

  $("#Close").click(function () {
    if ($(".navbar").attr("class").match("MenuActive")) {
      $(".navbar").removeClass("MenuActive");
    }
  });
});
