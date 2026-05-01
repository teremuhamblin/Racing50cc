Telemetry — Informations
========================

Objectif
--------
Le module Telemetry centralise l’ensemble des données mesurées lors des runs réels
ou générées par les simulateurs. Il constitue la base de l’analyse de performance
et des réglages avancés.

Types de données
----------------
- Régime moteur (RPM)
- Vitesse réelle
- AFR (Air/Fuel Ratio)
- Température culasse
- Température air
- Charge moteur
- Accélération / décélération
- GPS (si disponible)

Organisation
------------
- raw/ : données brutes issues des capteurs
- processed/ : données nettoyées et normalisées
- logs/ : journaux de télémétrie
- templates/ : modèles d’import/export

Utilisation
-----------
Les données de télémétrie permettent :
- d’identifier les zones de sous/sur-régime
- d’évaluer la stabilité thermique
- d’analyser l’efficacité de la transmission
- de comparer plusieurs runs
- d’alimenter les dashboards et simulateurs
