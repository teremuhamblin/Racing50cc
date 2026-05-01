# Nettoyage des données de télémétrie — Racing50cc

import csv

def clean_telemetry(input_file, output_file):
    cleaned = []

    with open(input_file, "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if float(row["rpm"]) > 0 and float(row["speed"]) >= 0:
                cleaned.append(row)

    with open(output_file, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=reader.fieldnames)
        writer.writeheader()
        writer.writerows(cleaned)

if __name__ == "__main__":
    clean_telemetry("sample_raw.csv", "sample_processed.csv")
