function scoreCylindre(v) {
  if (v === "base") return 1;
  if (v === "mid") return 2;
  if (v === "high") return 3;
  return 0;
}

function scoreCarbu(v) {
  if (v === "17.5") return 1;
  if (v === "19") return 2;
  if (v === "21") return 3;
  return 0;
}

document.getElementById("calc").addEventListener("click", () => {
  const cyl = document.getElementById("cylindre").value;
  const ech = document.getElementById("echappement").value;
  const carbu = document.getElementById("carbu").value;
  const usage = document.getElementById("usage").value;

  const score = scoreCylindre(cyl) + scoreCarbu(carbu);
  let profil = "";

  if (score <= 2) profil = "Configuration douce, fiable, orientée street.";
  else if (score === 3 || score === 4) profil = "Configuration polyvalente, bon compromis street / performance.";
  else profil = "Configuration racing, usage piste / sprint recommandé.";

  const sponsor =
    ech === "stage6" ? "Profil orienté Stage6 (haut régime, racing)." :
    ech === "polini" ? "Profil Polini (polyvalent, couple + puissance)." :
    "Profil Girardo (prépa racing personnalisée).";

  const usageText =
    usage === "street" ? "Usage : street / daily." :
    usage === "sprint" ? "Usage : sprint, runs courts." :
    "Usage : piste, sessions longues.";

  document.getElementById("profil").innerText =
    profil + " " + sponsor + " " + usageText;
});
