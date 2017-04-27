$( document ).ready(function() {
  function track_url(url) {
    ga('send', 'event', 'outbound', 'click', url, {
      'transport': 'beacon',
      'hitCallback': function(){document.location = url;}
    });
  }

  function click_service_button(button) {
    url = button.attr("href");
    track_url(url);
    window.location = url;
  }

  function click_service_section(section) {
    url = section.find(".release-service-button").attr("href");
    track_url(url);
    window.location = url;
  }

  function click_dont_know_section(section) {
    url = section.find("a").attr("href");
    track_url(url);
    window.location = url;
  }

  $( ".release-service" ).click(function() {
    click_service_section($(this));
  });

  $( ".release-service-dontknow" ).click(function() {
    click_dont_know_section($(this))
  });

  $(".external-link").click(function(){
    url = $(this).attr("href")
    track_url(url);
    window.location = url;
  });
});
