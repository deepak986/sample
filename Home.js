$("#toggle").click(function() {

    $(this).toggleClass('on');
    $("#resize").toggleClass("active");

    });

    var textWrapper = document.querySelector('.header-1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '.header-1 .letter',
        translateY: [1200,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 4500 + 50 * i
    });
    var textWrapper = document.querySelector('.header-2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '.header-2 .letter',
        translateY: [1200,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 4500 + 50 * i
    });


TweenMax.to(".wrapper", 2, {
    top: "-100%",
    ease: Expo.easeInOut,
    delay: 3.2
});

var tl = new TimelineMax();

tl.from(".loader", 1.6, {
    delay: 1,
    transformOrigin:"0% 0%"
});

tl.to(".loader", 1.6, {
    top: "-100%",
    ease: Expo.easeIn,
    transformOrigin:"0% -100%"
});


      var t1 = new TimelineMax({ paused: true });

      TweenMax.from(".social-brand", 2, {
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: 4.5
      });

      var t1 = new TimelineMax({ paused: true });

      TweenMax.from(".btn-flex", 2, {
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: 4.5
      });



      var t1 = new TimelineMax({ paused: true });

      TweenMax.from(".brand-horz", 2, {
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: 4.5
      });

      