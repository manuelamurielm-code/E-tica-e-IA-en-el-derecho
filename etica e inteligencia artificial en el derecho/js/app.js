/**
 * IUS ÉTICA - Controlador Principal de la Aplicación (app.js)
 * Gestiona el cambio de idiomas (ES/EN/PT), modo oscuro/claro,
 * interacción con el Skill Engine, visor de infografía,
 * laboratorio de casos, semáforo de riesgo y accesibilidad.
 */

const App = {
  state: {
    lang: localStorage.getItem("ius_lang") || "es",
    theme: localStorage.getItem("ius_theme") || "light",
    activePreset: "laboral_salario",
    currentEvaluation: null
  },

  // Datos para el Glosario en Lenguaje Simple
  glossaryData: {
    es: [
      {
        term: "Alucinación de IA",
        badge: "Riesgo Técnico",
        simple: "Cuando una IA inventa con total seguridad leyes, fechas o sentencias que jamás existieron.",
        legal: "Falsa inferencia generativa. En derecho puede inducir a error judicial y acarrear sanciones disciplinarias (Caso Mata v. Avianca)."
      },
      {
        term: "Human-in-the-loop (Supervisión Humana)",
        badge: "Principio Rector",
        simple: "Tú tienes el control y la firma; la máquina solo sugiere o busca información.",
        legal: "Estándar ético donde las decisiones que afectan derechos no pueden ser automatizadas sin juicio humano crítico (Sentencia T-323/24)."
      },
      {
        term: "Caja Negra (Opacidad Algorítmica)",
        badge: "Transparencia",
        simple: "Cuando no se puede explicar de forma sencilla por qué la máquina tomó cierta decisión.",
        legal: "Afecta la debida motivación y la contradicción probatoria. La justicia exige explicabilidad y trazabilidad completa de los argumentos."
      },
      {
        term: "Habeas Data & Secreto Profesional",
        badge: "Privacidad",
        simple: "El deber sagrado de no compartir nombres ni datos privados de clientes con extraños o servidores públicos.",
        legal: "Ley 1581 de 2012 y Ley 1123 de 2007. La subida de minutas o historias a nubes de IA abiertas vulnera la intimidad y acarrea sanciones."
      },
      {
        term: "Sesgo Algorítmico",
        badge: "Igualdad",
        simple: "Prejuicios o discriminaciones que la máquina aprendió de datos antiguos y repite sin avisar.",
        legal: "Vulneración del Art. 13 de la Constitución y del Reglamento UE de IA. Afecta especialmente a mujeres y colectivos vulnerables."
      },
      {
        term: "Sentencia T-323 de 2024",
        badge: "Precedente Clave",
        simple: "El fallo histórico de la Corte Constitucional de Colombia que fijó las reglas para usar ChatGPT en los juzgados.",
        legal: "Prohíbe a los jueces delegar la motivación de sentencias en la IA, ordena transparencia e impone el Acuerdo PCSJA24-12243."
      }
    ],
    en: [
      {
        term: "AI Hallucination",
        badge: "Technical Risk",
        simple: "When an AI confidently fabricates cases, laws, or quotes that never existed.",
        legal: "False generative inference. Submitting hallucinated citations to court breaches procedural duties and incurs sanctions (Mata v. Avianca)."
      },
      {
        term: "Human-in-the-loop",
        badge: "Core Principle",
        simple: "You stay in full control; the machine only assists with drafting or document search.",
        legal: "Ethical standard ensuring decisions affecting rights cannot be outsourced to automated systems without human scrutiny (Ruling T-323/24)."
      },
      {
        term: "Black Box (Algorithmic Opacity)",
        badge: "Transparency",
        simple: "When a system cannot clearly explain the exact steps behind its recommendation.",
        legal: "Compromises procedural due process and the right to challenge evidence. Legal systems require transparent justification."
      },
      {
        term: "Data Privacy & Attorney Privilege",
        badge: "Confidentiality",
        simple: "The sacred duty to keep client names, finances, and files shielded from public servers.",
        legal: "Statutory data protection laws and bar disciplinary codes forbid uploading unredacted client files to public cloud models."
      },
      {
        term: "Algorithmic Bias",
        badge: "Fairness",
        simple: "Prejudices learned from historical training data that unfairly disadvantage certain groups.",
        legal: "Breaches constitutional equal protection and EU AI Act regulations. Especially hazardous in hiring and judicial risk scoring."
      },
      {
        term: "Ruling T-323 of 2024",
        badge: "Key Precedent",
        simple: "The landmark Colombian Constitutional Court decision establishing rules for judicial AI usage.",
        legal: "Bans judicial delegation of reasoning to LLMs, establishes mandatory transparency, and sparked Judicial Council guidelines."
      }
    ],
    pt: [
      {
        term: "Alucinação de IA",
        badge: "Risco Técnico",
        simple: "Quando a inteligência artificial inventa acórdãos, leis ou datas com aparência de verdade.",
        legal: "Inferência generativa falsa. No ambiente forense, induz o juízo a erro e acarreta severas punições disciplinares (Caso Mata v. Avianca)."
      },
      {
        term: "Human-in-the-loop (Supervisão Humana)",
        badge: "Princípio Reitor",
        simple: "Você mantém a caneta e a responsabilidade; o computador atua somente como copiloto.",
        legal: "Padrão de governança que impede a automação plena de decisões judiciais ou que impactem direitos humanos (Sentença T-323/24)."
      },
      {
        term: "Caixa Preta (Opacidade Algorítmica)",
        badge: "Transparência",
        simple: "Quando não se consegue explicar passo a passo a razão lógica de uma resposta da máquina.",
        legal: "Colide com a garantia constitucional da motivação dos atos judiciais e prejudica o exercício do contraditório e da ampla defesa."
      },
      {
        term: "Sigilo Profissional e LGPD",
        badge: "Privacidade",
        simple: "O dever ético de jamais divulgar documentos ou segredos de assistidos a plataformas públicas.",
        legal: "Lei Geral de Proteção de Dados e Código de Ética da Advocacia. Inserir processos em IA aberta expõe segredos de justiça a terceiros."
      },
      {
        term: "Viés Algorítmico",
        badge: "Igualdade",
        simple: "Distorções e discriminações históricas que o sistema absorveu e replica em desfavor de minorias.",
        legal: "Afronta ao princípio da isonomia e ao Regulamento Europeu de IA (AI Act). Risco acentuado em triagens de empregos e benefícios."
      },
      {
        term: "Sentença T-323 de 2024",
        badge: "Julgado Paradigma",
        simple: "Decisão pioneira da Corte Constitucional que balizou o uso do ChatGPT no Poder Judiciário.",
        legal: "Veda que magistrados deleguem a fundamentação das decisões à IA generativa e estabelece o dever de transparência processual."
      }
    ]
  },

  // Inicialización
  init() {
    this.applyTheme(this.state.theme);
    this.applyLanguage(this.state.lang);
    this.bindEvents();
    this.renderGlossary();
    // Ejecutar evaluación por defecto
    this.evaluatePreset("laboral_salario");
  },

  // Configuración de eventos
  bindEvents() {
    // Selector de tema
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const newTheme = this.state.theme === "light" ? "dark" : "light";
        this.applyTheme(newTheme);
      });
    }

    // Selector de idioma
    const langSelect = document.getElementById("langSelector");
    if (langSelect) {
      langSelect.value = this.state.lang;
      langSelect.addEventListener("change", (e) => {
        this.applyLanguage(e.target.value);
      });
    }

    // Botones de presets
    const presetChips = document.querySelectorAll(".preset-chip");
    presetChips.forEach(chip => {
      chip.addEventListener("click", (e) => {
        presetChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const presetKey = chip.getAttribute("data-preset");
        this.evaluatePreset(presetKey);
      });
    });

    // Botón de evaluar consulta personalizada
    const evalBtn = document.getElementById("skillEvaluateBtn");
    const skillInput = document.getElementById("skillCustomInput");
    if (evalBtn && skillInput) {
      evalBtn.addEventListener("click", () => {
        const query = skillInput.value.trim();
        if (query) {
          this.evaluateCustomQuery(query);
        } else {
          skillInput.focus();
        }
      });
      skillInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          evalBtn.click();
        }
      });
    }

    // Botón limpiar consulta
    const clearBtn = document.getElementById("skillClearBtn");
    if (clearBtn && skillInput) {
      clearBtn.addEventListener("click", () => {
        skillInput.value = "";
        this.evaluatePreset("laboral_salario");
      });
    }

    // Botón copiar informe ético
    const copyBtn = document.getElementById("copyReportBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => this.copyReport());
    }

    // Botón leer en voz alta (accesibilidad)
    const speechBtn = document.getElementById("speechReportBtn");
    if (speechBtn) {
      speechBtn.addEventListener("click", () => this.speakReport());
    }

    // Tabs del explorador de la infografía
    const infoTabs = document.querySelectorAll(".info-tab-btn");
    infoTabs.forEach(btn => {
      btn.addEventListener("click", () => {
        infoTabs.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const tabId = btn.getAttribute("data-tab");
        this.showInfographicTab(tabId);
      });
    });

    // Modal de pantalla completa de la infografía
    const modal = document.getElementById("infographicModal");
    const openModalBtn = document.getElementById("openInfographicModalBtn");
    const closeModalBtn = document.getElementById("closeInfographicModalBtn");
    const infographicImg = document.getElementById("infographicPreviewImg");

    if (openModalBtn && modal) {
      openModalBtn.addEventListener("click", () => modal.classList.add("active"));
    }
    if (infographicImg && modal) {
      infographicImg.addEventListener("click", () => modal.classList.add("active"));
    }
    if (closeModalBtn && modal) {
      closeModalBtn.addEventListener("click", () => modal.classList.remove("active"));
    }
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
      });
    }

    // Quiz del laboratorio
    this.bindLabQuizEvents();

    // Semáforo de riesgo
    const riskBtn = document.getElementById("calculateRiskBtn");
    if (riskBtn) {
      riskBtn.addEventListener("click", () => this.calculateRiskMeter());
    }

    // Buscador de glosario
    const searchGlossary = document.getElementById("glossarySearchInput");
    if (searchGlossary) {
      searchGlossary.addEventListener("input", (e) => {
        this.filterGlossary(e.target.value);
      });
    }
  },

  // Aplicar tema claro/oscuro
  applyTheme(theme) {
    this.state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ius_theme", theme);

    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      const isDark = theme === "dark";
      const icon = isDark ? "☀️" : "🌙";
      const textKey = isDark ? "switchThemeLight" : "switchThemeDark";
      const currentDict = translations[this.state.lang] || translations.es;
      themeBtn.innerHTML = `<span class="theme-icon">${icon}</span> <span class="theme-label">${currentDict[textKey]}</span>`;
      themeBtn.setAttribute("aria-label", currentDict[textKey]);
    }
  },

  // Aplicar idioma
  applyLanguage(lang) {
    if (!translations[lang]) lang = "es";
    this.state.lang = lang;
    localStorage.setItem("ius_lang", lang);

    const dict = translations[lang];

    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Actualizar placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // Actualizar botón de tema con el texto del idioma
    this.applyTheme(this.state.theme);

    // Re-evaluar caso activo en el nuevo idioma
    if (this.state.activePreset) {
      this.evaluatePreset(this.state.activePreset);
    }

    // Renderizar glosario en el idioma
    this.renderGlossary();

    // Actualizar feedback de los casos de laboratorio
    this.updateLabLanguage();
  },

  // Evaluar Preset del Skill
  evaluatePreset(presetKey) {
    this.state.activePreset = presetKey;
    const lang = this.state.lang;
    const caseData = SkillEngine.cases[presetKey] ? SkillEngine.cases[presetKey][lang] : null;

    if (caseData) {
      this.renderEvaluationReport(caseData);
    }
  },

  // Evaluar Consulta Libre
  evaluateCustomQuery(query) {
    this.state.activePreset = null;
    document.querySelectorAll(".preset-chip").forEach(c => c.classList.remove("active"));
    const lang = this.state.lang;
    const result = SkillEngine.evaluateQuery(query, lang);
    this.renderEvaluationReport(result);
  },

  // Renderizar el informe de los 4 pasos
  renderEvaluationReport(data) {
    this.state.currentEvaluation = data;
    const reportContainer = document.getElementById("skillReportContainer");
    if (!reportContainer) return;

    reportContainer.classList.remove("fade-in");
    void reportContainer.offsetWidth; // trigger reflow
    reportContainer.classList.add("fade-in");

    // Paso 1: Título y Nivel de Riesgo
    document.getElementById("evalCaseTitle").textContent = data.title;
    const riskBadge = document.getElementById("evalRiskBadge");
    riskBadge.textContent = data.risk;
    riskBadge.className = `risk-badge ${data.riskClass}`;
    document.getElementById("evalExecutiveSummary").textContent = data.summary;

    // Paso 2: Análisis Dimensional (4 Ejes)
    document.getElementById("dimConfidentialityText").textContent = data.dimensions.confidentiality;
    document.getElementById("dimTransparencyText").textContent = data.dimensions.transparency;
    document.getElementById("dimBiasText").textContent = data.dimensions.bias;
    document.getElementById("dimHumanOversightText").textContent = data.dimensions.humanOversight;

    // Paso 3: Marco Normativo
    const lawsList = document.getElementById("evalLawsList");
    lawsList.innerHTML = "";
    data.laws.forEach(law => {
      const li = document.createElement("li");
      li.className = "law-item";
      li.innerHTML = `<span class="law-bullet">⚖️</span> <span>${law}</span>`;
      lawsList.appendChild(li);
    });

    // Paso 4: Checklist Interactivo
    const checklistContainer = document.getElementById("evalChecklistContainer");
    checklistContainer.innerHTML = "";
    data.checklist.forEach((item, idx) => {
      const div = document.createElement("div");
      div.className = "checklist-item";
      div.innerHTML = `
        <label class="custom-checkbox">
          <input type="checkbox" id="chk_${idx}">
          <span class="checkmark"></span>
          <span class="check-text">${item}</span>
        </label>
      `;
      checklistContainer.appendChild(div);
    });
  },

  // Copiar informe al portapapeles
  copyReport() {
    if (!this.state.currentEvaluation) return;
    const d = this.state.currentEvaluation;
    const text = `
══════════════════════════════════════════════════════
IUS ÉTICA - INFORME ÉTICO-JURÍDICO
${d.title}
Nivel de Riesgo: ${d.risk}
══════════════════════════════════════════════════════

1. RESUMEN EJECUTIVO:
${d.summary}

2. ANÁLISIS DIMENSIONAL:
• Confidencialidad y Datos: ${d.dimensions.confidentiality}
• Transparencia y Explicabilidad: ${d.dimensions.transparency}
• Sesgos y Equidad: ${d.dimensions.bias}
• Supervisión Humana: ${d.dimensions.humanOversight}

3. MARCO NORMATIVO:
${d.laws.map(l => "- " + l).join("\n")}

4. CHECKLIST DE MITIGACIÓN RECOMENDADO:
${d.checklist.map(c => "[ ] " + c).join("\n")}

Generado por IUS ÉTICA · Tecnología con criterio · Derecho con conciencia ♡
══════════════════════════════════════════════════════
    `.trim();

    navigator.clipboard.writeText(text).then(() => {
      const copyBtn = document.getElementById("copyReportBtn");
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `<span>✓ ¡Copiado con Éxito!</span>`;
      setTimeout(() => { copyBtn.innerHTML = originalText; }, 2500);
    });
  },

  // Lectura en voz alta accesible
  speakReport() {
    if (!("speechSynthesis" in window)) {
      alert("Tu navegador no soporta síntesis de voz.");
      return;
    }
    window.speechSynthesis.cancel();
    if (!this.state.currentEvaluation) return;
    const d = this.state.currentEvaluation;
    const speechText = `${d.title}. Diagnóstico: Nivel de riesgo ${d.risk}. ${d.summary}. Recuerda que la inteligencia artificial es una herramienta de apoyo, y la responsabilidad jurídica recae de forma exclusiva en la persona.`;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = this.state.lang === "en" ? "en-US" : (this.state.lang === "pt" ? "pt-BR" : "es-ES");
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  },

  // Mostrar Tab de la Infografía
  showInfographicTab(tabId) {
    document.querySelectorAll(".info-tab-panel").forEach(panel => {
      panel.classList.remove("active");
    });
    const target = document.getElementById(`tabContent_${tabId}`);
    if (target) target.classList.add("active");
  },

  // Eventos de los Casos de Laboratorio
  bindLabQuizEvents() {
    document.querySelectorAll(".quiz-option-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const parentCard = btn.closest(".lab-case-card");
        const feedbackEl = parentCard.querySelector(".lab-feedback-box");
        const allButtons = parentCard.querySelectorAll(".quiz-option-btn");
        
        allButtons.forEach(b => b.classList.remove("selected", "correct", "wrong"));
        btn.classList.add("selected");

        const isCorrect = btn.getAttribute("data-correct") === "true";
        const feedbackText = btn.getAttribute("data-feedback");

        if (isCorrect) {
          btn.classList.add("correct");
          feedbackEl.className = "lab-feedback-box feedback-success";
          feedbackEl.innerHTML = `<span class="feedback-icon">🌟</span> <div><strong>¡Excelente criterio!</strong><p>${feedbackText}</p></div>`;
        } else {
          btn.classList.add("wrong");
          feedbackEl.className = "lab-feedback-box feedback-warning";
          feedbackEl.innerHTML = `<span class="feedback-icon">⚠️</span> <div><strong>Atención al deber ético:</strong><p>${feedbackText}</p></div>`;
        }
        feedbackEl.style.display = "flex";
      });
    });
  },

  // Actualizar textos de laboratorio al cambiar idioma
  updateLabLanguage() {
    const dict = translations[this.state.lang] || translations.es;
    // Ocultar feedbacks abiertos para no mezclar idiomas
    document.querySelectorAll(".lab-feedback-box").forEach(box => {
      box.style.display = "none";
    });
    document.querySelectorAll(".quiz-option-btn").forEach(b => {
      b.classList.remove("selected", "correct", "wrong");
    });
  },

  // Semáforo de Riesgo (Calculadora)
  calculateRiskMeter() {
    const q1 = document.querySelector('input[name="risk_q1"]:checked')?.value === "yes";
    const q2 = document.querySelector('input[name="risk_q2"]:checked')?.value === "yes";
    const q3 = document.querySelector('input[name="risk_q3"]:checked')?.value === "yes";
    const q4 = document.querySelector('input[name="risk_q4"]:checked')?.value === "yes";

    let score = 0;
    if (q1) score += 30; // Datos sensibles
    if (q2) score += 40; // Derechos fundamentales
    if (!q3) score += 15; // Falta de transparencia
    if (!q4) score += 25; // Falta de verificación humana

    const resultBox = document.getElementById("riskResultBox");
    const titleEl = document.getElementById("riskMeterTitle");
    const descEl = document.getElementById("riskMeterDesc");
    const meterFill = document.getElementById("riskMeterFill");
    resultBox.style.display = "block";

    meterFill.style.width = `${Math.min(100, score)}%`;

    if (score >= 60) {
      meterFill.style.backgroundColor = "var(--risk-high)";
      titleEl.innerHTML = `🔴 RIESGO ALTO O CRÍTICO (${score}/100)`;
      titleEl.style.color = "var(--risk-high)";
      descEl.innerHTML = `Tu caso clasifica como de <strong>Alto Riesgo</strong> bajo los estándares de la Sentencia T-323 de 2024 y el AI Act de la Unión Europea. Está prohibido delegar la resolución o subir datos de clientes sin cifrado. Requiere obligatoriamente verificación humana experta, aviso a las partes e informe de trazabilidad.`;
    } else if (score >= 30) {
      meterFill.style.backgroundColor = "var(--risk-moderate)";
      titleEl.innerHTML = `🟡 RIESGO MODERADO (${score}/100)`;
      titleEl.style.color = "var(--risk-moderate)";
      descEl.innerHTML = `El caso presenta riesgos mitigables. Se recomienda anonimizar completamente los documentos, verificar todas las citas de jurisprudencia en bases oficiales primarias y advertir sobre el carácter orientador de la IA.`;
    } else {
      meterFill.style.backgroundColor = "var(--risk-low)";
      titleEl.innerHTML = `🟢 RIESGO BAJO (${score}/100)`;
      titleEl.style.color = "var(--risk-low)";
      descEl.innerHTML = `Uso admisible para labores auxiliares, búsqueda exploratoria o redacción de esquemas. Conserva siempre el pensamiento crítico y recuerda que tú respondes por el documento final.`;
    }
  },

  // Renderizar Glosario
  renderGlossary(items) {
    const list = items || this.glossaryData[this.state.lang] || this.glossaryData.es;
    const grid = document.getElementById("glossaryGrid");
    if (!grid) return;

    grid.innerHTML = "";
    list.forEach(item => {
      const card = document.createElement("div");
      card.className = "glossary-card";
      card.innerHTML = `
        <div class="glossary-header">
          <h4 class="glossary-term">${item.term}</h4>
          <span class="glossary-badge">${item.badge}</span>
        </div>
        <div class="glossary-simple">
          <strong>En lenguaje simple:</strong>
          <p>${item.simple}</p>
        </div>
        <div class="glossary-legal">
          <strong>Enfoque jurídico y ético:</strong>
          <p>${item.legal}</p>
        </div>
      `;
      grid.appendChild(card);
    });
  },

  // Filtrar Glosario
  filterGlossary(term) {
    const list = this.glossaryData[this.state.lang] || this.glossaryData.es;
    const cleanTerm = term.toLowerCase().trim();
    if (!cleanTerm) {
      this.renderGlossary(list);
      return;
    }
    const filtered = list.filter(item => 
      item.term.toLowerCase().includes(cleanTerm) ||
      item.simple.toLowerCase().includes(cleanTerm) ||
      item.legal.toLowerCase().includes(cleanTerm)
    );
    this.renderGlossary(filtered);
  }
};

// Arrancar al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
