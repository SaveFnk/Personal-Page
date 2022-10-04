//https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
$(document).ready(function(){

  //fix height for safari
  $('header').height($(window).height()*0.84);
  $('header').width($(window).width());

  let ab = document.getElementById("about");

  var about = $("#about");
  var home = $("#home");
  var navbar = $("#navbar");
  var resume = $("#resume");
  var A = $("#A");
  var R = $("#R");
  var H = $("#H");


  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior

        console.log(this.hash);
        if (this.hash === "#menu") {
          event.preventDefault();

          if(window.scrollY <=70 ){
             console.log(window.scrollY);
              window.scrollTo(window.scrollX, window.scrollY + 100);
          }
          

        } else if (this.hash !== "") {
          console.log("no menu");
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 700, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
     }// End if
  });

  var Hstart = 0;
  var Astart = about.offset().top -navbar.height() -250;
  var Rstart = resume.offset().top -navbar.height() -250;
  var Hb=false;
  var Ab=false;
  var Rb=false;



  $.fn.repristin = function(){
    Ab? A.addClass("link-hover"):A.removeClass("link-hover");
    Rb? R.addClass("link-hover"):R.removeClass("link-hover");
    Hb? H.addClass("link-hover"):H.removeClass("link-hover");
  }

  A.hover(
    function() {
      A.addClass("link-hover");
      R.removeClass("link-hover");
      H.removeClass("link-hover");
    }, function() {
      $.fn.repristin()
    }
  );

  H.hover(
    function() {
      H.addClass("link-hover");
      R.removeClass("link-hover");
      A.removeClass("link-hover");
    }, function() {
      $.fn.repristin()
    }
  );

  R.hover(
    function() {
      R.addClass("link-hover");
      A.removeClass("link-hover");
      H.removeClass("link-hover");
    }, function() {
      $.fn.repristin()
    }
  );

  $.fn.scrollCK = function(){
    if (window.scrollY >= 0 &&  window.scrollY < Astart){
      Hb=true;
      Ab=Rb=false;
      $.fn.repristin();
    }
    
    if (window.scrollY >= Astart  && 
      window.scrollY < Rstart){
      Ab=true;
      Hb=Rb=false;
      $.fn.repristin();
    }

    if (window.scrollY >= Rstart  ){
      Rb=true;
      Hb=Ab=false;
      $.fn.repristin();
    }
  };
  
  $.fn.scrollCK();

  $(window).scroll(function () {
    $.fn.scrollCK();

    var Arr = $(".progress-bar").map(function() {
      return $(this);
    }).get();
    //console.log(Arr);

    for (i in Arr) {
      /*console.log("---")
      console.log(Arr[i])
      console.log(Arr[i].offset().top);
      console.log(window.scrollY + $(window).height());*/

      if(Arr[i].offset().top <= (window.scrollY + $(window).height())){
        Arr[i].css("width",
        function() {
            return Arr[i].attr("aria-valuenow") + "%";
        }
        );
      }
      
    };
  });

  $( window ).resize(function() {
    var w = $( window ).width();
    if(w <= 991){
      $(".brand-img").css("display","none");
      $(".brand-txt").css("display","none");
    }
    else{
      $(".brand-img").css("display","");
      $(".brand-txt").css("display","");
    }
  });

  
});
