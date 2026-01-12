const API = "http://localhost:5000/api/applications";

const form = document.getElementById("jobForm");
const list = document.getElementById("list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const company = document.getElementById("company").value;
  const role = document.getElementById("role").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ company, role })
  });

  form.reset();
  loadApps();
});

async function loadApps() {
  const res = await fetch(API);
  const apps = await res.json();

  list.innerHTML = "";
  apps.forEach(app => {
    const li = document.createElement("li");
    li.textContent = `${app.company} - ${app.role} (${app.status})`;
    list.appendChild(li);
  });
}

loadApps();
