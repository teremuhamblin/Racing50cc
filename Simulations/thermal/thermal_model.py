# Modèle thermique — Racing50cc

def thermal_simulation(rpm, airflow, ambient_temp):
    base_temp = ambient_temp + (rpm / 100)
    cooling = airflow * 0.8
    return round(base_temp - cooling, 1)

if __name__ == "__main__":
    print(thermal_simulation(9500, 12, 22))
