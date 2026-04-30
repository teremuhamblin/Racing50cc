// Données exemple (à remplacer par tes logs)
const perfData = {
  labels: ["0", "10", "20", "30", "40", "50", "60", "70"],
  datasets: [{
    label: "Puissance (HP)",
    data: [2, 4, 6, 7.5, 8, 8.2, 8.1, 7.8],
    borderColor: "#ff6a00",
    borderWidth: 3
  }]
};

new Chart(document.getElementById("perfChart"), {
  type: "line",
  data: perfData,
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Exemple accélération
document.getElementById("accel").innerText = "0–50 km/h : 5.8 secondes";
