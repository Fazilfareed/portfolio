// app.js
const projects = [
  {
    id: 1,
    title: "PaySync — Installment Finance (MERN)",
    desc: "Full-stack app for installment-based finance with role-based access, REST APIs, and MongoDB.",
    tags: ["web"],
    link: "https://github.com/Fazilfareed/PaySync",
    img: "assets/projects/paysync.png"
  },
  {
    id: 2,
    title: "Hybrid ML/DL for IoT Intrusion Detection",
    desc: "Research prototype using PSO for feature selection and hybrid ML/DL model.",
    tags: ["ml","iot"],
    link: "https://github.com/Fazilfareed/iot-ids",
    img: "assets/projects/iot_ids.png"
  },
  {
    id: 3,
    title: "Inventory Management (PHP & MySQL)",
    desc: "Department-level inventory tracker with exports and dynamic filtering.",
    tags: ["web"],
    link: "https://github.com/Fazilfareed/inventory",
    img: "assets/projects/inventory.png"
  }
];

function renderProjects(list) {
  const container = document.getElementById('projectsGrid');
  container.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'bg-white border rounded-lg p-4 shadow-sm flex flex-col';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title} screenshot" class="w-full h-36 object-cover rounded-md" onerror="this.src='assets/projects/placeholder.png'"/>
      <h4 class="mt-3 font-semibold">${p.title}</h4>
      <p class="mt-2 text-sm text-slate-600 flex-1">${p.desc}</p>
      <div class="mt-3 flex items-center justify-between">
        <div class="flex gap-2">${p.tags.map(t => `<span class="px-2 py-1 text-xs border rounded">${t}</span>`).join('')}</div>
        <a href="${p.link}" target="_blank" rel="noopener" class="text-sm">View →</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// initial render
renderProjects(projects);

// filtering
document.querySelectorAll('.filterBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    if (filter === 'all') renderProjects(projects);
    else renderProjects(projects.filter(p => p.tags.includes(filter)));
  });
});