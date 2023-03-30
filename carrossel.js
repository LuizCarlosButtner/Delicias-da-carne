const container = document.querySelector('.container');
const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');

let currentIndex = 0;


nextButton.addEventListener('click', () => {
  if (currentIndex < 13) {
    currentIndex++;
    container.style.transform = `translateX(-${currentIndex * 4.5}%)`;
  }

});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    container.style.transform = `translateX(-${currentIndex * 4.5}%)`;
  }
 
});




