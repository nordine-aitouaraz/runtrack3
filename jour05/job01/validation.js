// Shared async validation helpers with debouncing per field
const validators = {
  email: async (value, { checkDuplicate = false } = {}) => {
    if (!value) return "Email requis.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(value)) return "Format d'email invalide.";
    if (checkDuplicate) {
      try {
        const res = await fetch("existing_emails.json", { cache: "no-store" });
        if (res.ok) {
          const list = await res.json();
          if (
            Array.isArray(list) &&
            list.map((e) => e.toLowerCase()).includes(value.toLowerCase())
          ) {
            return "Cet email est déjà utilisé.";
          }
        }
      } catch {}
    }
    return null;
  },
  password: async (value) => {
    if (!value) return "Mot de passe requis.";
    if (value.length < 8) return "Au moins 8 caractères.";
    if (!/[a-z]/.test(value)) return "Inclure une minuscule.";
    if (!/[A-Z]/.test(value)) return "Inclure une majuscule.";
    if (!/\d/.test(value)) return "Inclure un chiffre.";
    if (!/[^A-Za-z0-9]/.test(value)) return "Inclure un caractère spécial.";
    return null;
  },
  name: async (value) => {
    if (!value) return "Champ requis.";
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/u.test(value))
      return "Uniquement lettres, 2+ caractères.";
    return null;
  },
  address: async (value) => {
    if (!value) return "Adresse requise.";
    if (value.length < 5) return "Adresse trop courte.";
    return null;
  },
  postal: async (value) => {
    if (!value) return "Code postal requis.";
    if (!/^\d{5}$/.test(value)) return "Code postal à 5 chiffres.";
    return null;
  },
};

function attachAsyncValidation(form, config) {
  const state = new Map(); // fieldName -> lastCallId
  const getErrEl = (input) =>
    form.querySelector(`[data-error-for="${input.name}"]`);

  async function validateField(input) {
    const name = input.name;
    const value = input.value.trim();
    const callId = (state.get(name) || 0) + 1;
    state.set(name, callId);
    const errEl = getErrEl(input);
    if (errEl) errEl.textContent = "";

    let error = null;
    try {
      switch (name) {
        case "email":
          error = await validators.email(value, config?.email);
          break;
        case "password":
          error = await validators.password(value);
          break;
        case "nom":
          error = await validators.name(value);
          break;
        case "prenom":
          error = await validators.name(value);
          break;
        case "adresse":
          error = await validators.address(value);
          break;
        case "codepostal":
          error = await validators.postal(value);
          break;
      }
    } catch (e) {
      error = "Erreur de validation.";
    }

    // discard outdated async results
    if (state.get(name) !== callId) return null;

    if (error) {
      if (errEl) errEl.textContent = error;
      input.setAttribute("aria-invalid", "true");
      return { name, ok: false, error };
    } else {
      if (errEl) errEl.textContent = "";
      input.removeAttribute("aria-invalid");
      return { name, ok: true };
    }
  }

  function wire(input) {
    ["input", "blur"].forEach((evt) =>
      input.addEventListener(evt, () => validateField(input))
    );
  }

  const inputs = Array.from(form.querySelectorAll("input"));
  inputs.forEach(wire);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const results = await Promise.all(inputs.map(validateField));
    const allOk = results.every((r) => r && r.ok);
    const msg = form.querySelector("[data-form-msg]");
    if (!msg) return;
    if (allOk) {
      msg.textContent = "Formulaire valide. (Démo front uniquement)";
      msg.className = "success";
    } else {
      msg.textContent = "Merci de corriger les erreurs.";
      msg.className = "error";
    }
  });

  return { validateField };
}
