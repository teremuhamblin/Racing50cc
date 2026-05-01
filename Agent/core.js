export function racingAgent(query, data = null) {
  if (query.includes("carbu")) return "Vérifie gicleur principal, ralenti et aiguille.";
  if (query.includes("transmission")) return "Commence par +1 dent pignon ou -2 dents couronne.";
  if (query.includes("analyse")) return "Charge un fichier CSV pour analyser RPM/vitesse.";
  return "Précise : carbu, transmission, analyse, météo, piste.";
}
