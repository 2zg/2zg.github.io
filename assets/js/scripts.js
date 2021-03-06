$( document ).ready(function() {

  function main_shuffle_releases() {
    var parent = $("#shuffle");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  }

  function setCopyright() {
    var ele = $(".copyright");
    var today = new Date();
    var str = "&copy; 2 Zimmer Gefüge " + today.getFullYear();
    ele.html(str);
  }

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

  function click_details_section(section) {
    url = section.find("a").attr("href");
    track_url(url);
    window.location = url;
  }

  $( ".release-service" ).click(function() {
    click_service_section($(this));
  });

  $( ".release-service-details" ).click(function() {
    click_details_section($(this))
  });

  $( ".release-details-listen" ).click(function() {
    click_details_section($(this))
  });

  $(".external-link").click(function(){
    url = $(this).attr("href")
    track_url(url);
    window.location = url;
  });

  main_shuffle_releases();
  setCopyright();

});
