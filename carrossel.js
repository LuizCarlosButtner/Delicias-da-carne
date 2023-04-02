const container = document.querySelectorAll('.container')
let currentIndex = 0;

function botaoEsq(param) {
  let tamanho = 13;
  if (param == 1) {
    tamanho = 15
  }
  if (currentIndex < tamanho) {
    currentIndex++;
    container[param].style.transform = `translateX(-${currentIndex * 4.5}%)`;
  }

}

function botaoDir(param) {
  if (currentIndex > 0) {
    currentIndex--;
    container[param].style.transform = `translateX(-${currentIndex * 4.5}%)`;
  }
}
// -------------------------------------------------------------------------





const arrayNormais = [
  {
    nome: 'Alcatra',
    calorias: "188 kcal",
    proteina: "28.5 g",
    carboidrato: "0 g",
    gorduraTotal: "7.4 g",
    gorduraSaturada: "2.9 g",
    gorduraTrans: "0 g",
    fibraAlimentar: "0g ",
    sodio: "66 mg",
    colesterol: "90 mg"
  },
  {
    nome: 'Wagyu',
    calorias: '710 kcal',
    proteina: '30 g',
    carboidrato: '0 g',
    gorduraTotal: '65 g',
    gorduraSaturada: '30 g',
    gorduraTrans: '3,3 g',
    fibraAlimentar: '0 g',
    sodio: '57 mg',
    colesterol: '120 mg'
  },
  {
    nome: 'Prime Ribs',
    calorias: '369 kcal',
    proteina: '22 g',
    carboidrato: '0 g',
    gorduraTotal: '30 g',
    gorduraSaturada: '14 g',
    gorduraTrans: '1,5 g',
    fibraAlimentar: '0 g',
    sodio: '62 mg',
    colesterol: '82 mg'
  },
  {
    nome: 'Ancho Angus',
    calorias: '400 kcal',
    proteina: '19 g',
    carboidrato: '0 g',
    gorduraTotal: '36 g',
    gorduraSaturada: '16 g',
    gorduraTrans: '0,4 g',
    fibraAlimentar: '0 g',
    sodio: '60 mg',
    colesterol: '85 mg'
  },
  {
    nome: 'Picanha Uruguaia Premium',
    calorias: '336 kcal',
    proteina: '20 g',
    carboidrato: '0 g',
    gorduraTotal: '28 g',
    gorduraSaturada: '12 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '53 mg',
    colesterol: '73 mg'
  },
  {
    nome: 'T-Bone',
    calorias: '256 kcal',
    proteina: '21,6 g',
    carboidrato: '0 g',
    gorduraTotal: '19,2 g',
    gorduraSaturada: '7,8 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '80 mg',
    colesterol: '74 mg'
  },
  {
    nome: 'Tira de Angus',
    calorias: '270 kcal',
    proteina: '25,8 g',
    carboidrato: '0 g',
    gorduraTotal: '18 g',
    gorduraSaturada: '7,8 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '58 mg',
    colesterol: '80 mg'
  },
  {
    nome: 'Bife de Tiras de Angus',
    calorias: '400 kcal',
    proteina: '24 g',
    carboidrato: '0 g',
    gorduraTotal: '32 g',
    gorduraSaturada: '12 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '70 mg',
    colesterol: '80 mg'
  },
  {
    nome: 'Baby Beef',
    calorias: '308 kcal',
    proteina: '23,2 g',
    carboidrato: '0 g',
    gorduraTotal: '24,4 g',
    gorduraSaturada: '10,6 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '62,4 mg',
    colesterol: '91,2 mg'
  },
  {
    nome: 'Ancho e Chorizo',
    calorias: 232,
    proteina: 23.7,
    carboidrato: 0.3,
    gorduraTotal: 15.3,
    gorduraSaturada: 6.2,
    gorduraTrans: 0.6,
    fibraAlimentar: 0,
    sodio: 64,
    colesterol: 83
  }
]
const arrayExoticas = [
  {
    nome: 'Carne de avestruz',
    calorias: '117 kcal',
    proteina: '21,9 g',
    carboidrato: '0 g',
    gorduraTotal: '2,6 g',
    gorduraSaturada: '0,6 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '63 mg',
    colesterol: '56 mg'
  },
  {
    nome: 'Carne de cabrito',
    calorias: '143 kcal',
    proteina: '27,2 g',
    carboidrato: '0 g',
    gorduraTotal: '3,3 g',
    gorduraSaturada: '1,1 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '85 mg',
    colesterol: '112 mg'
  },
  {
    nome: 'Carne caprina',
    calorias: '109 kcal',
    proteina: '20,6 g',
    carboidrato: '0 g',
    gorduraTotal: '2,2 g',
    gorduraSaturada: '0,6 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '56 mg',
    colesterol: '71 mg'
  },
  {
    nome: 'Carne de javali',
    calorias: '114 kcal',
    proteina: '22,2 g',
    carboidrato: '0 g',
    gorduraTotal: '2,2 g',
    gorduraSaturada: '0,7 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '51 mg',
    colesterol: '78 mg'
  },
  {
    nome: 'Codorna',
    calorias: '97 kcal',
    proteina: '16 g',
    carboidrato: '0 g',
    gorduraTotal: '3,5 g',
    gorduraSaturada: '1 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '66 mg',
    colesterol: '139 mg'
  },
  {
    nome: 'Coelho',
    calorias: '197 kcal',
    proteina: '28 g',
    carboidrato: '0 g',
    gorduraTotal: '9 g',
    gorduraSaturada: '2,6 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '84 mg',
    colesterol: '82 mg'
  },
  {
    nome: 'Costela Suína',
    calorias: '427 kcal',
    proteina: '19,3 g',
    carboidrato: '0 g',
    gorduraTotal: '38,6 g',
    gorduraSaturada: '14,5 g',
    gorduraTrans: '0,6 g',
    fibraAlimentar: '0 g',
    sodio: '91 mg',
    colesterol: '92 mg'
  },
  {
    nome: 'Carne de Pato',
    calorias: '148 kcal',
    proteina: '17 g',
    carboidrato: '0 g',
    gorduraTotal: '9 g',
    gorduraSaturada: '2,7 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '82 mg',
    colesterol: '96 mg'
  },
  {
    nome: 'Jacaré',
    calorias: '116 kcal',
    proteina: '22,6 g',
    carboidrato: '0 g',
    gorduraTotal: '2,2 g',
    gorduraSaturada: '0,8 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '51 mg',
    colesterol: '65 mg'
  },
  {
    nome: 'Peito de Pato',
    calorias: '173 kcal',
    proteina: '20,7 g',
    carboidrato: '0 g',
    gorduraTotal: '9,9 g',
    gorduraSaturada: '2,7 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '74 mg',
    colesterol: '110 mg'
  },
  {
    nome: 'Coxa de Pato',
    calorias: '297 kcal',
    proteina: '20 g',
    carboidrato: '0 g',
    gorduraTotal: '24 g',
    gorduraSaturada: '6,8 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '86 mg',
    colesterol: '103 mg'
  },
  {
    nome: 'Pernil de Leitão',
    calorias: '324 kcal',
    proteina: '25,7 g',
    carboidrato: '0 g',
    gorduraTotal: '24 g',
    gorduraSaturada: '8,6 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '80 mg',
    colesterol: '92 mg'
  },
  {
    nome: 'Rã',
    calorias: '66 kcal',
    proteina: '14 g',
    carboidrato: '0 g',
    gorduraTotal: '1,2 g',
    gorduraSaturada: '0,3 g',
    gorduraTrans: '0 g',
    fibraAlimentar: '0 g',
    sodio: '51 mg',
    colesterol: '47 mg'
  },
]
  let listaDeCarnesNormais = document.querySelectorAll('carnesNormais')
  let containerParaCelulas = document.querySelectorAll('carnesNormais')
  

let criarElemento =()=>{
  arrayNormais.forEach((celula)=>{

  })
}

