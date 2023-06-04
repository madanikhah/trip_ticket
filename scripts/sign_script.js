const signinIcon = document.getElementById('signin-icon');
const backgroundOverlay = document.getElementById('background-overlay');
const signinModal = document.getElementById('signin-modal');

signinIcon.addEventListener('click', () => {
  backgroundOverlay.style.display = 'block';
  signinModal.style.display = 'block';
});

backgroundOverlay.addEventListener('click', () => {
  backgroundOverlay.style.display = 'none';
  signinModal.style.display = 'none';
});
