# Simulations — Projections de Performance

## 🎯 Objectif
Simuler les performances futures du scooter selon :
- Les réglages
- Les pièces installées
- Les conditions météo
- Le type de piste

---

# 🧮 Types de Simulations

## Simulation accélération
- Projection 0–50 m
- Projection 0–100 m
- Simulation reprise

## Simulation moteur
- Régime max estimé
- Température stabilisée
- Courbe de puissance théorique

## Simulation transmission
- Plage variateur idéale
- Rapport optimal selon piste

---

# 📊 Données utilisées
- Logs du dossier `/performance`
- Réglages du dossier `/tuning`
- Données météo
- Caractéristiques des pièces

---

# 🔧 Outils de simulation
- Modèles mathématiques internes
- Tableaux comparatifs
- Courbes extrapolées
- Scénarios (run / circuit / endurance)

---

# 📌 Notes
Les simulations ne remplacent pas les tests réels mais permettent :
- D’éviter des erreurs de réglage
- De prévoir les performances
- D’orienter les choix techniques

# Simulations/ (mise à jour)
>regroupe l’ensemble des simulateurs utilisés pour prédire, analyser et optimiser le comportement du moteur, de la transmission et de la température sur Racing50cc.

## 📁 Sous-dossiers

### engine/
Simulations moteur : régime, charge, AFR, comportement dynamique.

### transmission/
Simulations de transmission : pignon/couronne, vitesse théorique, ratio final.

### thermal/
Modélisation thermique : température culasse, stabilité thermique, montée en charge.

### templates/
Modèles d’exports et rapports de simulation.

## 🎯 Objectifs
- Prédire le comportement moteur dans différentes conditions.
- Tester virtuellement des configurations avant les runs réels.
- Optimiser la transmission et les réglages.
- Analyser la stabilité thermique.

## ✔️ Statut
- Structure complète
- Scripts fonctionnels
- Templates prêts à l’usage
