const datosCuriosos = [
    "El corazón de una ballena azul es tan grande que un humano podría nadar a través de sus arterias.",
    "Las abejas pueden reconocer rostros humanos.",
    "El agua caliente se congela más rápido que el agua fría, un fenómeno conocido como el efecto Mpemba.",
    "Los pulpos tienen tres corazones y su sangre es de color azul.",
    "El récord mundial de la mayor cantidad de hot dogs comidos en 10 minutos es de 76.",
    "Los flamencos no nacen con plumas rosas; su color proviene de los carotenoides en su dieta.",
    "El Monte Everest crece aproximadamente 4 milímetros cada año debido a la actividad tectónica.",
    "Los gatos tienen un hueso extra en sus patas delanteras que les permite girar sus garras hacia adentro.",
    "El ADN humano es un 98% similar al del chimpancé.",
    "Las jirafas tienen lenguas de hasta 45 centímetros de largo para alcanzar las hojas altas."
  ];

  function mostrarDatoCurioso() {
    const indiceAleatorio = Math.floor(Math.random() * datosCuriosos.length);
    document.getElementById('dato').innerText = datosCuriosos[indiceAleatorio];
  }

  window.onload = mostrarDatoCurioso;