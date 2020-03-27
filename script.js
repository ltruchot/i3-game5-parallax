const lune = document.getElementById('lune');
const fusee = document.getElementById('fusee');
document.addEventListener('scroll', () => {
    const yoff = window.pageYOffset;
    const perc = (yoff / 500) * 10; // how far through the animation are we?
    lune.style.transform = `translateY(-${1 + 5 * perc}%)`;
    fusee.style.transform = `translateY(-${1 + 10 * perc}%)`; 
  });