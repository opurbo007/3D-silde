$(document).ready(function () {
   $(".carousel").carousel({
      indicators: true,
      dist: -200,
   });

   setInterval(function () {
      $(".carousel").carousel("next");
   }, 2500);
});
