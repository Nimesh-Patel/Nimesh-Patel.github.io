// Visitor counter animation
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('visitor-counter');
  let count = 0;
  const target = 1000; // Initial mock value
  
  const animateCounter = () => {
    if (count < target) {
      count += Math.floor(target / 50);
      counter.innerText = count;
      requestAnimationFrame(animateCounter);
    }
  };
  animateCounter();
});
