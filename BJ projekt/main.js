const track = document.querySelector('.banner-track');
const logosSlide = document.querySelector('.logos-slide');

for (let i = 0; i < 4; i++) {
    track.appendChild(logosSlide.cloneNode(true));
}

let scrollPostition = 0;
const speed = 0.5;
let isPlaying = true;
let animantionFrameId = null;

function scroll() {
    if (!isPlaying) return;

    scrollPostition -= speed;
    const slideWidth = logosSlide.offsetWidth;

    if (Math.abs(scrollPostition) >= slideWidth) {
        scrollPostition += slideWidth;
    }

    track.style.transform = `translateX(${scrollPostition}px)`;
    animantionFrameId = requestAnimationFrame(scroll);
}

scroll();




/*burgermenu*/
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "auto";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


