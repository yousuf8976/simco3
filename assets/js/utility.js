window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  
  // Delay the fade-out to ensure the loader is visible longer
  setTimeout(() => {
    loader.style.opacity = '0'; // Fade out effect
    setTimeout(() => {
      loader.style.display = 'none'; // Hide loader after fade-out
    }, 500); // Match the fade-out duration
  }, 2000); // Display loader for 2 seconds before fading
});



