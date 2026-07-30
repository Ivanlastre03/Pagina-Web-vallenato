const express = require("express");
const app = express();

const vallenato = {
  cantantes: [
    "Diomedes Díaz",
    "Poncho Zuleta",
    "Jorge Oñate",
    "Silvestre Dangond"
  ]
};

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { vallenato });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor en el puerto ${PORT}`);
});