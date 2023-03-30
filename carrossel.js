const container = document.querySelectorAll('.container')
let currentIndex = 0;

function botaoEsq(param){
  let tamanho = 13;
  if (param == 1){
    tamanho = 15
  }
  if (currentIndex < tamanho) {
    currentIndex++;
    container[param].style.transform = `translateX(-${currentIndex * 4.5}%)`;
  }

}

function botaoDir(param){
  if (currentIndex > 0) {
    currentIndex--;
    container[param].style.transform = `translateX(-${currentIndex * 4.5}%)`;
  }
}




