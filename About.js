
var textWrapper = document.querySelector('.header-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
.add({
    targets: '.header-1 .letter',
    translateY: [200,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 2700 + 50 * i
});
var textWrapper = document.querySelector('.header-2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
.add({
    targets: '.header-2 .letter',
    translateY: [200,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 2700 + 50 * i
});


TweenMax.to(".wrapper", 2, {
    top: "-120%",
    ease: Expo.easeInOut,
    delay: 1.6
});

var tl = new TimelineMax();

tl.from(".loader", 1.6, {
    height: "100vh",
    scaleY: "0%",
    y: 80,
    ease: Expo.easeInOut,
    delay: 0.2,
    transformOrigin:"50% 50%"
});

tl.to(".loader", 1.6, {
    height: "100vh",
    scaleY: "0%",
    ease: Expo.easeInOut,
    transformOrigin:"0% -50%"
});
           
 var tl = new TweenMax.staggerFrom(".bike", 2, {
    opacity: 0,     
    y: -400,
    ease: Expo.easeInOut,
    delay: 1.9
}, 0.1);

var tl = new TweenMax.staggerFrom(".hero-container > div", 2, {
    opacity: 0,     
    y: 0,
    ease: Expo.easeInOut,
    delay: 1.8
}, 0.1);
     
