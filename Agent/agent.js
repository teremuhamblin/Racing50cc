export default class Racing50ccAgent {
  constructor() {
    this.version = "1.0";
  }

  analyseConfig(config) {
    const { cylindre, carbu, echappement } = config;

    let score = 0;

    if (cylindre.includes("70")) score += 2;
    if (carbu >= 19) score += 2;
    if (echappement === "Stage6") score += 2;
    if (echappement === "Polini") score += 1;

    let profil =
      score <= 2
        ? "Configuration douce / street"
        : score <= 4
        ? "Configuration polyvalente"
        : "Configuration racing";

    return {
      profil,
      score,
      recommandation: this.getRecommandation(profil),
    };
  }

  getRecommandation(profil) {
    if (profil === "Configuration douce / street")
      return "Optimiser variation + carburation légère";
    if (profil === "Configuration polyvalente")
      return "Ajuster allumage + transmission";
    return "Préparation racing : courroie, galets, avance, carburation fine";
  }

  simulateAcceleration(config) {
    const base = 7;
    const gain = config.carbu >= 21 ? 1.2 : 0.6;
    const cyl = config.cylindre.includes("70") ? 1.5 : 0.8;

    const accel = (base - gain - cyl).toFixed(1);

    return {
      "0-50 km/h": accel + " s",
    };
  }

  simulateVmax(config) {
    const rpm = config.rpm || 12000;
    const rapport = config.rapport || 8.0;

    const vmax = ((rpm / rapport) * 0.002).toFixed(1);

    return {
      vmax: vmax + " km/h",
    };
  }

  fullReport(config) {
    return {
      version: this.version,
      analyse: this.analyseConfig(config),
      acceleration: this.simulateAcceleration(config),
      vmax: this.simulateVmax(config),
    };
  }
}
