const container = document.querySelector('.container');
const thankYou = document.querySelector('.thank__you');
const ratingbutton = document.querySelectorAll('.rating__btn');
const submit = document.getElementById('submit');
const rating = document.getElementById('rating');
const rateAgain = document.getElementById('rate__again');

submit.addEventListener('click', () => {
  container.style.display = 'none';
  thankYou.classList.remove('hidden');
});
rateAgain.addEventListener('click', () => {
  container.style.display = 'block';
  thankYou.classList.add('hidden');
});

ratingbutton.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML;
  });
});
