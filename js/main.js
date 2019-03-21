
// background animation

let pathEls = document.querySelectorAll('path');

for (let i = 0; i < pathEls.length; i++) {
  let pathEl = pathEls[i];
  let offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: false,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}
  

// Hamburger Menu animation


const menu = document.getElementsByClassName("menu-btn")[0];
   menu.onclick = function() {
        menu.classList.toggle('is-active');
        document.getElementById("menu").classList.toggle('enter');
    //     document.getElementById("menu").classList.add('bounceInRight')

    //     setTimeout(function() {
    //   document.getElementById("menu").classList.remove('bounceInRight')
    // }, 1000);
        
};







