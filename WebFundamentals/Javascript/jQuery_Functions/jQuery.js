$(document).ready(function(){
  $("#link").click(function(){
    $("#AddClass").toggle();
  });

  // $("#link").click(function(){
  //   $("#AddClass").show()
  // });

  $("#Slidetoggle").click(function(){
    $("p").slideToggle();
  });

  // $("#Append").click(function(){
  //   $("#nifty").fadeOut("fast");
  // });

  // $("#Append").click(function(){
  //   $("#nifty").addClass("green");
  // });

  // $("#Append").click(function(){
  //   $("h1").before("<h2 class='green'>I'm before</h2>");
  // });

  $("#Append").click(function(){
    $("#html").text("<h6>Changed</h6>");
  });

  $("#colorchange").click(function(){
    $(".divs").attr("class", "massive");
  });

});
