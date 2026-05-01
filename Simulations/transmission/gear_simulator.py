# Simulateur de transmission — Racing50cc

def speed_from_ratio(rpm, primary, secondary, wheel_circ):
    ratio = primary * secondary
    speed_m_s = (rpm / ratio) * wheel_circ / 60
    return round(speed_m_s * 3.6, 1)

if __name__ == "__main__":
    print(speed_from_ratio(10000, 3.0, 2.8, 1.34))
