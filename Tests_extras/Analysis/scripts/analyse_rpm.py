# Analyse RPM — Racing50cc
# Script minimal pour analyser les variations de régime

def analyze_rpm(data):
    return {
        "max_rpm": max(data),
        "min_rpm": min(data),
        "avg_rpm": sum(data) / len(data)
    }
