const datosCuriosos = [
  "El corazón de una ballena azul es tan grande que un humano podría nadar por sus arterias.",
  "Las abejas pueden reconocer rostros humanos.",
  "El agua caliente puede congelarse más rápido que el agua fría (efecto Mpemba).",
  "Los pulpos tienen tres corazones y su sangre es azul.",
  "El récord mundial de hot dogs en 10 minutos es de 76.",
  "Los flamencos no nacen rosas; su color viene de su dieta.",
  "El Monte Everest crece unos 4 mm cada año por la actividad tectónica.",
  "Los gatos tienen un hueso extra en sus patas delanteras para girar sus garras.",
  "El ADN humano es un 98% similar al del chimpancé.",
  "Las jirafas tienen lenguas de hasta 45 cm."
];

const btnDato = document.getElementById("btn-dato");
const pDato = document.getElementById("dato");
const pContador = document.getElementById("contador");

// Enviar registro al servidor local (mi portatil ;v)
async function registrar(tipo) {
  await fetch("/registrar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tipo })
  });
  actualizarContador();
}

async function actualizarContador() {
  const res = await fetch("/ver-datos");
  const datos = await res.json();

  const visitas = datos.filter(d => d.tipo === "visita").length;
  const clicks = datos.filter(d => d.tipo === "click").length;

  pContador.innerText = `Visitas: ${visitas} | Clicks: ${clicks}`;
}

window.onload = () => {
  registrar("visita");
};

window.mostrarDatoCurioso = function () {
  const indiceAleatorio = Math.floor(Math.random() * datosCuriosos.length);
  pDato.innerText = datosCuriosos[indiceAleatorio];
  registrar("click");
};

