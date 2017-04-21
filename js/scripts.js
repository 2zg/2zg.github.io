$( document ).ready(function() {
  $( ".release-service" ).click(function() {
    url = $(this).find(".release-service-button").attr("href")
    window.location = url;
  });

  $( ".release-service-dontknow" ).click(function() {
    url = $(this).find("a").attr("href")
    window.location = url;
  });
});
