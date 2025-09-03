const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname)); 

const datosFile = path.join(__dirname, "datos.json");

// Crear el archivo (por si acaso)
if (!fs.existsSync(datosFile)) {
  fs.writeFileSync(datosFile, JSON.stringify([]));
}

// Guardar visita/click, breve
app.post("/registrar", (req, res) => {
  const { tipo } = req.body;
  const fecha = new Date().toISOString().split("T")[0]; // solo día

  const data = JSON.parse(fs.readFileSync(datosFile));
  data.push({ tipo, fecha });
  fs.writeFileSync(datosFile, JSON.stringify(data, null, 2));

  res.json({ ok: true });
});

// Ver datos (solo tú accedes a esta ruta) para saber donde van las visitas y clicks XD
app.get("/ver-datos", (req, res) => {
  const data = JSON.parse(fs.readFileSync(datosFile));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
