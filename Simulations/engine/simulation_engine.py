# Simulation moteur — Racing50cc
# Modèle simple pour prédire le régime moteur selon la charge et la configuration

def simulate_engine(rpm_base, load_factor, carb_setting):
    rpm = rpm_base * load_factor
    afr_effect = 1.0 if 12.5 <= carb_setting <= 13.5 else 0.95
    return int(rpm * afr_effect)

if __name__ == "__main__":
    print(simulate_engine(9000, 1.05, 13.0))
