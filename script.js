
// Ano automático
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const eventsList = document.getElementById("events-list");

fetch('events.json')
  .then(res => res.json())
  .then(data => {
    if (!eventsList) return;

    const events = data.events || [];
    eventsList.innerHTML = '';

    events.forEach(ev => {
      const card = document.createElement("div");
      card.className = "glass event-card";
      card.innerHTML = `
        <h3>${ev.title}</h3>
        <p><strong>Data:</strong> ${ev.date}</p>
      `;
      eventsList.appendChild(card);
    });
  })
  .catch(err => console.error('Erro a carregar events.json', err));


// Formulário
const form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Mensagem enviada!");
  form.reset();
});
