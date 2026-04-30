name: 🔧 Amélioration
description: Proposer une amélioration technique ou structurelle
title: "[IMPROVEMENT] "
labels: ["improvement"]

body:
  - type: textarea
    id: context
    attributes:
      label: Contexte
      placeholder: Pourquoi cette amélioration est nécessaire
    validations:
      required: true

  - type: textarea
    id: proposal
    attributes:
      label: Proposition
      placeholder: Décris l'amélioration proposée
    validations:
      required: true
