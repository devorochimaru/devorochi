const priceData = {
  internal: {
    name: 'Customize Panel & Project Features',
    prices: ['✓ Login Page (Key Auth)', '✓ Save Information & Auto Login', '✓ Anti Dll & Anti Debug', '✓ Anti Attach & Anti Dump', '✓ Anticrack security system', '✓ Discord RPC Integration', '✓ All code is server-safe.']
  },
  max: {
    name: 'Internal +',
    prices: ['1 Week - ₹399', '1 Month - ₹899', 'Lifetime - ₹2499', 'Full Project - ₹3499']
  },
  premium: {
    name: 'Premium +',
    prices: ['1 Week - ₹299', '1 Month - ₹799', 'Lifetime - ₹1499', 'Full Project - ₹2999']
  },
  basic: {
    name: 'Basic +',
    prices: ['1 Week - ₹199', '1 Month - ₹499', 'Lifetime - ₹999', 'Full Project - ₹1599']
  },
  silent: {
    name: 'Aim Silent',
    prices: ['1 Week - ₹399', '1 Month - ₹1099', 'Lifetime - ₹2999', 'Full Project - ₹3999']
  },
  aimkill: {
    name: 'Aimkill Max',
    prices: ['1 Day - ₹99', '1 Week - ₹599', '1 Month - ₹1199', 'Lifetime - ₹3999', 'Full Project - ₹4999']
  },
  streamer: {
    name: 'Streamer Panel',
    prices: ['Our Streamer panel is undetectable and perfectly optimized for all PCs.', 'Full Project - ₹4999']
  },
  crack: {
    name: 'Training Courses',
    prices: ['Per Course - ₹6000', 'Game Modding & Cheats (C#, C++)', 'Web Development (HTML, CSS, Node.js)']
  },
  contact: {
      name: 'Developer Info',
      prices: ['Email: <strong>orochimaru6381@gmail.com</strong>', 'Offers available for bulk project purchases!', 'Contact via WhatsApp or Discord for the fastest response.']
  }
};

function updateModal(panelKey) {
  const panel = priceData[panelKey];
  const priceHTML = panel.prices.map(p => `<p>${p}</p>`).join("");
  document.getElementById('modalPanelTitle').innerText = panel.name;
  document.getElementById('modalPriceList').innerHTML = priceHTML;
}

// Particle animation
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight; // Make canvas full page height
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 150; i++) { // Increased particle count
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2.5 + 1,
    speed: Math.random() * 1 + 0.3
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 26, 26, 0.5)"; // Made particles slightly transparent
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.speed;
    if (p.y > canvas.height) {
      p.y = -p.radius;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// Ensure canvas resizes when content loads/changes
window.onload = resizeCanvas;

