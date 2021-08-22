$("#toggle").click(function() {

    $(this).toggleClass('on');
    $("#resize").toggleClass("active");

    });



    var slider = document.querySelector('.js-slider-items');
var isDown = false;
var startX, scrollLeft;

slider.onmousedown = function (e) {
  'use strict';
  isDown = true;
  slider.classList.add('is-active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

slider.ontouchstart = function (e) {
  'use strict';
  isDown = true;
  slider.classList.add('is-active');
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

slider.onmouseup = function () {
  mouseup();
};

slider.ontouchend = function () {
  mouseup();
};

function mouseup() {
  'use strict';
  isDown = false;
  slider.classList.remove('is-active');
}

slider.onmouseleave = function () {
  'use strict';
  isDown = false;
  slider.classList.remove('is-active');
};

slider.onmousemove = function (e) {
  'use strict';
  if (!isDown) { return; }
  e.preventDefault();
  var x = e.pageX - slider.offsetLeft,
      walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
};

slider.ontouchmove = function (e) {
  'use strict';
  if (!isDown) { return; }
  e.preventDefault();
  var x = e.touches[0].pageX - slider.offsetLeft,
      walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
};

function controlsSlider(num) {
  'use strict';
  var smooth = setInterval(function () {
    slider.scrollLeft += num;
  }, 10);
  setTimeout(function () {
    clearInterval(smooth);
  }, 210);
}
arrows[0].onclick = function () {
  'use strict';
  controlsSlider(-10);
};

arrows[1].onclick = function () {
  'use strict';
  controlsSlider(10);
};



