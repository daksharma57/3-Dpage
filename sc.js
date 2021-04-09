Let bg = document.getElementById("bg");
Let moon = document.getElementById("moon");
Let mountain = document.getElementById("mountain");
Let road = document.getElementById("road");
Let text = document.getElementById("text");

window.addEventListener('scroll', function () {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = -value * 0.15 + 'px';