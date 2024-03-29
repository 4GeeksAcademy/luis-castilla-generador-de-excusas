import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("#generarexcusa").addEventListener("click", () => {
    document.getElementById("#excuse").innerHTML = generarescusa();
  });
};

let who = ["el perro", "mi abuela", "el cartero", "mi pajaro"];
let action = ["comio", "piso", "aplasto", "rompio"];
let what = ["mi tarea", "mi telefono", "el auto", "la jaula"];
let when = [
  "antes de la clase",
  "cuando dormia",
  "mientras hacia ejercicio",
  "durante mi almuerzo",
  "mientras rezaba"
];

function generarescusa() {
  let randomwho = who[Math.floor(Math.random() * who.length)];
  let randomaction = action[Math.floor(Math.random() * action.length)];
  let randomwhat = what[Math.floor(Math.random() * what.length)];
  let randomwhen = when[Math.floor(Math.random() * when.length)];
  const excusaaleatoria =
    "${randomwho} ${randomaction} ${randomwhat} ${randomwhen}";
  return excusaaleatoria;
}
