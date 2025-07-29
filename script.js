const angleSlider = document.getElementById("angle");
const speedSlider = document.getElementById("speed");
const angleVal = document.getElementById("angleVal");
const speedVal = document.getElementById("speedVal");
const canvas = document.getElementById("plot");
const ctx = canvas.getContext("2d");

function drawProjectile() {
  const angle = parseFloat(angleSlider.value) * Math.PI / 180;
  const v0 = parseFloat(speedSlider.value);
  const g = 9.8;

  angleVal.textContent = angleSlider.value;
  speedVal.textContent = speedSlider.value;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  for (let t = 0; t < 5; t += 0.05) {
    const x = v0 * Math.cos(angle) * t;
    const y = v0 * Math.sin(angle) * t - 0.5 * g * t * t;
    if (y < 0) break;
    ctx.lineTo(x * 10, canvas.height - y * 10);
  }

  ctx.strokeStyle = "#c71585";
  ctx.lineWidth = 2;
  ctx.stroke();
}

angleSlider.addEventListener("input", drawProjectile);
speedSlider.addEventListener("input", drawProjectile);

drawProjectile(); // Initial render