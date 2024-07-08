let figuras = [
  {
    nombre: "triangulo",
    base: 5,
    altura: 7,
  },
  {
    nombre: "cuadrado",
    base: 8,
    altura: 8,
  },
  {
    nombre: "rectangulo",
    base: 9,
    altura: 4,
  },
];

const area = () => {
  let figura = prompt("Ingresa tu figura");
  while (
    figura !== figuras[0].nombre &&
    figura !== figuras[1].nombre &&
    figura !== figuras[2].nombre
  ) {
    alert("Figura inválida");
    figura = prompt("Ingresa tu figura");
  }
  if (figura === figuras[0].nombre) {
    let areaTri = (figuras[0].base * figuras[0].altura) / 2;
    return areaTri;
  } else if (figura === figuras[1].nombre) {
    let areaCua = figuras[1].base * figuras[1].altura;
    return areaCua;
  } else if (figura === figuras[2].nombre) {
    let areaRec = figuras[2].base * figuras[2].altura;
    return areaRec;
  } else {
  }
};

let areaFinal = area();
console.log(areaFinal);

//ME TARDE 46 MIN S: 07/07/24
