 const target = document.getElementById('ball');


setTimeout(() => {
  document.body.style.transform = 'scale(0.6)';
 
}, 5000);
setTimeout(() => {
  document.body.style.transform = 'scale(1.5)';
 
}, 6665);
setTimeout(() => {
  document.body.style.transform = 'scale(0.6)';
 
}, 11885);
setTimeout(() => {
window.scrollBy({

  top: 300,
  behavior: 'smooth' // Optional: 'auto' (default) or 'smooth'
});
}, 21000);


// autoscrll
 const startTime = Date.now();

    function followTarget() {
        const elapsed = Date.now() - startTime;
        if (elapsed < 21000) { 
      const rect = target.getBoundingClientRect();
      const scrollX = window.scrollX + rect.left - (window.innerWidth / 2) + (rect.width / 2);
      const scrollY = window.scrollY + rect.top - (window.innerHeight / 2) + (rect.height / 2);

      window.scrollTo({
        left: scrollX,
        top: scrollY,
        behavior: 'auto' // use 'smooth' for gentle following
      });}

      requestAnimationFrame(followTarget);
      document.getElementById("body").style.overflow="hidd";
      
    }

    followTarget(); // Start tracking