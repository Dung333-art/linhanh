// Tạo hiệu ứng confetti
// Tạo hiệu ứng confetti
const confettiContainer = document.querySelector('.confetti-container');

for (let i = 0; i < 30; i++) {
  let confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.animationDelay = Math.random() * 3 + 's';
  confettiContainer.appendChild(confetti); // Gắn vào container thay vì body
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function openGift(num) {
  const giftImage = document.getElementById('giftImage');
  giftImage.src = `images/gift${num}.jpg`;
  document.getElementById('giftOverlay').classList.add('active');
}

function closeGift() {
  document.getElementById('giftOverlay').classList.remove('active');
}
