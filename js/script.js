const slider = document.querySelector('#js-slider');
const toggle = document.querySelector('#js-toggle');
const price = document.querySelector('#js-price');
const views = document.querySelector('#js-views');
const card = document.querySelector('#js-card');

const mediumScreen = window.matchMedia('(min-width: 789px)');
if (mediumScreen.matches) {
  card.classList.add('animate__animated', 'animate__zoomIn');
}

const monthly = 0.00045;
const yearly = monthly * 3;

price.textContent = monthly * slider.value;
views.textContent = '500k pageviews';

// Function
const displayPrice = () => {
  const sliderVal = slider.value;
  const monthlyPrice = monthly * sliderVal;
  const yearlyPrice = yearly * sliderVal;

  const monthlyPageViews = sliderVal / 200;
  const yearlyPageViews = sliderVal / 100;

  if (!toggle.checked) {
    price.textContent = monthlyPrice.toFixed(2);
    views.textContent = `${monthlyPageViews}k pageviews`;
  } else {
    price.textContent = yearlyPrice.toFixed(2);
    views.textContent = `${yearlyPageViews}k pageviews`;
  }
};

// Event Listeners
slider.addEventListener('input', displayPrice);
toggle.addEventListener('input', displayPrice);
