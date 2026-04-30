# Telemetry — Données Capteurs & Mesures Brutes

## 🎯 Objectif
Centraliser toutes les données brutes issues de capteurs :
- RPM (régime moteur)
- CHT (température culasse)
- EGT (température échappement)
- GPS (vitesse, distance)
- Accéléromètre (optionnel)

---

# 📡 Types de données

## RPM
- Régime max
- Régime stabilisé
- Régime embrayage

## Températures
- CHT : 55–65°C idéal
- EGT : 550–650°C selon configuration

## GPS
- Vitesse instantanée
- Distance
- Accélération

---

# 🗂️ Organisation du dossier
- `rpm.csv`
- `cht.csv`
- `egt.csv`
- `gps.csv`
- `raw/` (données brutes non traitées)

---

# 🔗 Utilisation
Les données de ce dossier alimentent :
- `/analysis`
- `/performance`
- `/simulations`

---

# 📌 Notes
Les fichiers doivent être horodatés pour faciliter les comparaisons.
