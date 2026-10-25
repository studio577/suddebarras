// Formulaire de devis
const form = document.getElementById('devis-form');
if (form) {
  const feedback = form.querySelector('.form__feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.textContent = '';
    feedback.className = 'form__feedback';

    // Validation simple
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#C0392B';
        valid = false;
      }
    });

    if (!valid) {
      feedback.textContent = 'Merci de remplir tous les champs obligatoires.';
      feedback.classList.add('is-error');
      return;
    }

    // Simulation d'envoi
    feedback.textContent = '✅ Demande envoyée ! Nous vous rappelons sous 24h.';
    feedback.classList.add('is-success');
    form.reset();

    // 👉 Ici tu brancheras ton backend / service de mail (Formspree, EmailJS, etc.)
    // console.log(Object.fromEntries(new FormData(form)));
  });
}