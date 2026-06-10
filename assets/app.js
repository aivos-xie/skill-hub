// ============================================================
// Skill Hub -- Shared JavaScript
// ============================================================

// --- Skill data (single source of truth) ---

const SKILLS = [
  {
    id: "skill-python",
    icon: "&#x1F40D;",
    gradient: "linear-gradient(135deg,#3B82F6,#6366F1)",
    title: "Python Learning Notes",
    desc: "Python syntax, standard library, virtual environments, and core knowledge.",
    note: "Install to enable AI to reference Python knowledge automatically.",
    tags: ["python", "venv", "stdlib", "list comprehension"],
    category: "programming",
    docLink: "/docs/programming/python.html",
    downloadUrl: "/assets/skills/skill-python.md",
  },
  {
    id: "skill-algorithms",
    icon: "&#x1F9EE;",
    gradient: "linear-gradient(135deg,#3B82F6,#06B6D4)",
    title: "Data Structures & Algorithms",
    desc: "Time complexity, binary search, BFS/DFS templates for interviews and practice.",
    note: "Install to enable AI to reference algorithm patterns.",
    tags: ["algorithms", "data-structures", "complexity", "bfs", "dfs"],
    category: "programming",
    docLink: "/docs/programming/algorithms.html",
    downloadUrl: "/assets/skills/skill-algorithms.md",
  },
  {
    id: "skill-git",
    icon: "&#x1F527;",
    gradient: "linear-gradient(135deg,#F97316,#EF4444)",
    title: "Git Commands",
    desc: "Git basics, branching, remote repos, stash, and daily workflow commands.",
    note: "Install to enable AI to reference Git workflows.",
    tags: ["git", "version-control", "branch", "remote", "stash"],
    category: "tools",
    docLink: "/docs/tools/git.html",
    downloadUrl: "/assets/skills/skill-git.md",
  },
  {
    id: "skill-linux",
    icon: "&#x1F427;",
    gradient: "linear-gradient(135deg,#F97316,#F59E0B)",
    title: "Linux Basics",
    desc: "File operations, permissions, process management, and SSH commands.",
    note: "Install to enable AI to reference Linux server commands.",
    tags: ["linux", "command-line", "permissions", "process", "ssh"],
    category: "tools",
    docLink: "/docs/tools/linux.html",
    downloadUrl: "/assets/skills/skill-linux.md",
  },
  {
    id: "skill-docker",
    icon: "&#x1F433;",
    gradient: "linear-gradient(135deg,#F97316,#6366F1)",
    title: "Docker Introduction",
    desc: "Container concepts, common commands, Dockerfile templates, and compose.",
    note: "Install to enable AI to reference Docker workflows.",
    tags: ["docker", "container", "image", "dockerfile", "compose"],
    category: "tools",
    docLink: "/docs/tools/docker.html",
    downloadUrl: "/assets/skills/skill-docker.md",
  },
  {
    id: "skill-courses",
    icon: "&#x1F4DA;",
    gradient: "linear-gradient(135deg,#6366F1,#8B5CF6)",
    title: "Course Materials",
    desc: "OS and computer networks course notes: processes, memory, TCP/IP.",
    note: "Install to enable AI to reference CS fundamentals.",
    tags: ["os", "network", "process", "tcp", "ip", "memory"],
    category: "courses",
    docLink: "/docs/courses/index.html",
    downloadUrl: "/assets/skills/skill-courses.md",
  },
  {
    id: "skill-reading",
    icon: "&#x1F4D6;",
    gradient: "linear-gradient(135deg,#8B5CF6,#EC4899)",
    title: "Reading Notes",
    desc: "Technical book summaries and methodology insights: CSAPP, design patterns.",
    note: "Install to enable AI to reference book knowledge.",
    tags: ["books", "methodology", "csapp", "design-patterns"],
    category: "reading",
    docLink: "/docs/reading/index.html",
    downloadUrl: "/assets/skills/skill-reading.md",
  },
  {
    id: "skill-resources",
    icon: "&#x2B50;",
    gradient: "linear-gradient(135deg,#EC4899,#F59E0B)",
    title: "Resource Collection",
    desc: "Curated learning websites, online courses, and dev tool recommendations.",
    note: "Install to enable AI to recommend learning resources.",
    tags: ["resources", "websites", "courses", "tools", "leetcode"],
    category: "resources",
    docLink: "/docs/resources/index.html",
    downloadUrl: "/assets/skills/skill-resources.md",
  },
];

// --- Toast ---

function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2000);
}

// --- Copy to clipboard ---

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => { btn.textContent = orig; }, 1500);
  });
}

// --- Render skill cards for home page ---

function renderHomeSkillCards(containerId, limit) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  const list = limit ? SKILLS.slice(0, limit) : SKILLS;
  grid.innerHTML = list.map(m => `
    <div class="skill-card">
      <div class="skill-card-header">
        <div class="skill-card-icon" style="background:${m.gradient}">${m.icon}</div>
        <div>
          <div class="skill-card-title">${m.title}</div>
          <div class="skill-card-id">${m.id}</div>
        </div>
      </div>
      <div class="skill-card-desc">${m.desc}</div>
      <div class="skill-card-tags">${m.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="skill-card-actions">
        <a href="${m.downloadUrl}" download class="btn btn-sm">Download</a>
        <a href="${m.docLink}" class="btn btn-sm">View</a>
      </div>
    </div>
  `).join("");
}

// --- Render download modules ---

function renderDownloadModules(containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = SKILLS.map(m => `
    <div class="skill-module" id="card-${m.id}">
      <label class="skill-module__check">
        <input type="checkbox" id="check-${m.id}" onchange="updateDownloadCount()">
      </label>
      <div class="skill-module__header">
        <div class="skill-module__icon" style="background:${m.gradient}">${m.icon}</div>
        <div>
          <a href="${m.docLink}" class="skill-module__title">${m.title}</a>
          <div class="skill-module__id">${m.id}</div>
        </div>
      </div>
      <div class="skill-module__desc">${m.desc}</div>
      <div class="skill-module__tags">${m.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="skill-module__note"><strong>Note:</strong> ${m.note}</div>
      <div class="skill-module__actions">
        <a href="${m.docLink}" class="skill-module__view">View Content &rarr;</a>
        <div class="skill-module__cmd" title="codex skill install ${m.id}">codex skill install ${m.id}</div>
        <button class="skill-module__copy" onclick="copyToClipboard(''codex skill install ${m.id}'', this)">Copy</button>
        <a href="${m.downloadUrl}" download class="skill-module__download" title="Download ${m.id}.md">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </a>
      </div>
    </div>
  `).join("");
  document.getElementById("skillSearchCount").textContent = `${SKILLS.length} modules`;
}

function filterDownloadModules() {
  const q = document.getElementById("skillFilter").value.toLowerCase();
  const filtered = q ? SKILLS.filter(m =>
    m.title.toLowerCase().includes(q) || m.tags.some(t => t.toLowerCase().includes(q)) || m.id.toLowerCase().includes(q)
  ) : SKILLS;
  const grid = document.getElementById("skillModules");
  grid.innerHTML = filtered.map(m => `
    <div class="skill-module" id="card-${m.id}">
      <label class="skill-module__check">
        <input type="checkbox" id="check-${m.id}" onchange="updateDownloadCount()">
      </label>
      <div class="skill-module__header">
        <div class="skill-module__icon" style="background:${m.gradient}">${m.icon}</div>
        <div>
          <a href="${m.docLink}" class="skill-module__title">${m.title}</a>
          <div class="skill-module__id">${m.id}</div>
        </div>
      </div>
      <div class="skill-module__desc">${m.desc}</div>
      <div class="skill-module__tags">${m.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="skill-module__note"><strong>Note:</strong> ${m.note}</div>
      <div class="skill-module__actions">
        <a href="${m.docLink}" class="skill-module__view">View Content &rarr;</a>
        <div class="skill-module__cmd" title="codex skill install ${m.id}">codex skill install ${m.id}</div>
        <button class="skill-module__copy" onclick="copyToClipboard(''codex skill install ${m.id}'', this)">Copy</button>
        <a href="${m.downloadUrl}" download class="skill-module__download" title="Download ${m.id}.md">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </a>
      </div>
    </div>
  `).join("");
  document.getElementById("skillSearchCount").textContent = `${filtered.length} modules`;
}

function selectAll() {
  SKILLS.forEach(m => { const cb = document.getElementById("check-" + m.id); if (cb) cb.checked = true; });
  updateDownloadCount();
}

function deselectAll() {
  SKILLS.forEach(m => { const cb = document.getElementById("check-" + m.id); if (cb) cb.checked = false; });
  updateDownloadCount();
}

function updateDownloadCount() {
  const count = SKILLS.filter(m => document.getElementById("check-" + m.id)?.checked).length;
  const el = document.getElementById("skillSearchCount");
  if (el) el.textContent = `${count} selected / ${SKILLS.length} modules`;
}

function downloadSelected() {
  const selected = SKILLS.filter(m => document.getElementById("check-" + m.id)?.checked);
  if (selected.length === 0) { showToast("No skills selected"); return; }
  selected.forEach((m, i) => {
    setTimeout(() => {
      const a = document.createElement("a");
      a.href = m.downloadUrl;
      a.download = m.id + ".md";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, i * 300);
  });
  showToast(`Downloading ${selected.length} skill(s)...`);
}

// --- Search ---

const searchIndex = SKILLS.map(m => ({
  id: m.id,
  title: m.title,
  desc: m.desc,
  tags: m.tags,
  url: m.docLink,
  type: "skill",
}));

function doSearch() {
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  const container = document.getElementById("searchResults");
  if (!container) return;

  if (!q) {
    container.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px 0">Type a keyword to search the knowledge base.</p>';
    return;
  }

  const keywords = q.split(/\s+/);
  const results = searchIndex.map(item => {
    let score = 0;
    const text = `${item.title} ${item.desc} ${item.tags.join(" ")}`.toLowerCase();
    for (const kw of keywords) {
      if (item.title.toLowerCase().includes(kw)) score += 10;
      if (item.tags.some(t => t.toLowerCase().includes(kw))) score += 5;
      if (item.desc.toLowerCase().includes(kw)) score += 2;
    }
    return { ...item, score };
  }).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  if (results.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:40px 0">No results for "${q}".</p>`;
    return;
  }

  container.innerHTML = results.map(r => `
    <div class="search-result">
      <div class="search-result-title"><a href="${r.url}">${r.title}</a></div>
      <div class="search-result-desc">${r.desc}</div>
      <div class="search-result-meta">
        <span>${r.type}</span>
        ${r.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// --- Auto-init based on page ---

document.addEventListener("DOMContentLoaded", () => {
  // Home page
  if (document.getElementById("homeSkillGrid")) {
    renderHomeSkillCards("homeSkillGrid", 3);
  }
  // Download page
  if (document.getElementById("skillModules")) {
    renderDownloadModules("skillModules");
  }
});
