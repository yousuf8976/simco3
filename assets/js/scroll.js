const toTopButton = document.getElementById('toTop');

  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
    // Update the clip-path to reflect the scroll percentage
    toTopButton.style.setProperty(
      '--scroll-percentage',
      `${scrollPercentage}%`
    );
  
    toTopButton.style.clipPath = `inset(0 0 ${100 - scrollPercentage}% 0)`;
  });
  
  toTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });