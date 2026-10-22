/**
 * IUS ÉTICA - Motor del Skill Interactivo (skill_engine.js)
 * Implementa la metodología de 4 pasos definida en:
 * skill_tica_e_inteligencia_artificial_en_el_derecho.md
 * Integrando el contenido del PDF y la Infografía Oficial.
 */

const SkillEngine = {
  // Base de conocimientos curada multilingüe
  cases: {
    // Caso 1: Laboral / Salario no pagado (Ejemplo de la Infografía)
    laboral_salario: {
      es: {
        title: "Consulta Ciudadana: Falta de pago de salario",
        risk: "MODERADO",
        riskClass: "badge-moderate",
        summary: "La falta de pago del salario en las fechas pactadas constituye un incumplimiento grave de las obligaciones del empleador en materia laboral. Si utilizas IA para redactar un reclamo o conocer tus derechos, esta debe servir como guía inicial, pero nunca debe sustituir la verificación de tus contratos ni la asesoría de un profesional o del Ministerio del Trabajo.",
        dimensions: {
          confidentiality: "Bajo a moderado. Al consultar herramientas públicas de IA, no ingreses el NIT de la empresa, cédulas, nombres completos ni cuentas bancarias personales.",
          transparency: "Debes tener claro qué normas citó la herramienta y pedirle que cite fuentes comprobables (Código Sustantivo del Trabajo de Colombia).",
          bias: "La IA tiende a generalizar leyes de otros países (ej. México o España). Es vital verificar que aplique el régimen laboral colombiano.",
          humanOversight: "La IA te orienta en la redacción de un derecho de petición o carta de cobro, pero la decisión de conciliar o demandar requiere criterio humano."
        },
        laws: [
          "Código Sustantivo del Trabajo (CST, Arts. 57, 134 y 140 - Pago de salario y obligaciones del empleador)",
          "Ley 1581 de 2012 (Protección de datos personales de las partes laborales)",
          "Corte Constitucional, Sentencia T-323 de 2024 (La IA como apoyo orientador, nunca como sustituto del criterio legal)"
        ],
        checklist: [
          "Revisa tu contrato de trabajo y soportes bancarios de fechas de pago.",
          "Guarda pruebas fehacientes (mensajes de WhatsApp, correos de cobro, desprendibles).",
          "Anonimiza cualquier borrador antes de procesarlo en herramientas de IA gratuitas.",
          "Explora alternativas de solución pacífica (reclamo formal, derecho de petición, inspectores del Ministerio del Trabajo).",
          "Consulta a un consultorio jurídico universitario gratuito si requieres acompañamiento procesal."
        ]
      },
      en: {
        title: "Citizen Inquiry: Unpaid Salary by Employer",
        risk: "MODERATE",
        riskClass: "badge-moderate",
        summary: "Failure to pay agreed wages on time constitutes a serious breach of employer duties under labor law. If you use AI to draft a claim or understand your legal rights, it must function as a preliminary guide, never replacing human review or official labor inspectors.",
        dimensions: {
          confidentiality: "Moderate risk. When prompting public LLMs, never input company tax IDs, personal bank accounts, or employee ID numbers.",
          transparency: "Always verify whether the cited statutes correspond to your jurisdiction rather than generic foreign statutes.",
          bias: "AI often confuses regional labor statutes. Validate citations against local official labor codes.",
          humanOversight: "AI can draft a formal demand letter, but pursuing arbitration or filing formal complaints requires human assessment."
        },
        laws: [
          "Labor Standards Code (Timely payment of wages and employer contractual duties)",
          "Personal Data Protection Act (Safeguarding financial and identity details)",
          "Constitutional Ruling T-323 of 2024 (AI as auxiliary guidance, not replacement of legal counsel)"
        ],
        checklist: [
          "Gather your employment contract and bank transaction history.",
          "Preserve all written evidence (emails, chat messages, past pay stubs).",
          "Redact personal and corporate identifiers prior to using public AI tools.",
          "File an administrative inquiry before the Ministry of Labor or free legal clinics.",
          "Seek accredited legal assistance before signing waivers or settlement agreements."
        ]
      },
      pt: {
        title: "Consulta Cidadã: Falta de pagamento de salário",
        risk: "MODERADO",
        riskClass: "badge-moderate",
        summary: "O atraso ou não pagamento do salário na data estipulada constitui infração grave das obrigações do empregador. Ao utilizar IA para elaborar requerimentos ou tirar dúvidas, a ferramenta atua como auxílio preliminar, sem substituir a assistência de um advogado ou órgão do Trabalho.",
        dimensions: {
          confidentiality: "Risco moderado. Não forneça CPFs, CNPJs, nomes de chefias ou números de contas em plataformas de IA públicas.",
          transparency: "Exija que a ferramenta cite fontes verificáveis e confirme se os artigos pertencem à legislação trabalhista local vigente.",
          bias: "Modelos de IA costumam misturar normas de diferentes países; confira sempre no Diário Oficial ou CLT correspondente.",
          humanOversight: "A redação de uma notificação extrajudicial pode ser auxiliada por IA, mas a estratégia jurídica exige julgamento humano."
        },
        laws: [
          "Consolidação das Leis do Trabalho / Código Trabalhista (Dever de pontualidade salarial)",
          "Lei Geral de Proteção de Dados (LGPD) - Sigilo de dados financeiros do trabalhador",
          "Sentença T-323 de 2024 (Parâmetros éticos: IA como suporte instrumental, responsabilidade humana indelegável)"
        ],
        checklist: [
          "Organize o contrato de trabalho e extratos bancários que comprovem a ausência do depósito.",
          "Reúna evidências documentais (e-mails, mensagens de cobrança, holerites anteriores).",
          "Anonimize qualquer minuta antes de processar em ferramentas públicas de IA.",
          "Procure os canais de mediação do Ministério do Trabalho ou núcleos de prática jurídica gratuitos.",
          "Valide os prazos de prescrição trabalhista com um profissional da advocacia."
        ]
      }
    },

    // Caso 2: Redacción judicial / Sentencia con ChatGPT (Sentencia T-323 de 2024)
    judicial_motivacion: {
      es: {
        title: "Función Judicial: Redacción de motivación de sentencia con IA",
        risk: "ALTO",
        riskClass: "badge-high",
        summary: "La motivación de las providencias judiciales es la garantía esencial del debido proceso (Art. 29 CP) y de la dignidad humana. En la Sentencia T-323 de 2024, la Corte Constitucional fijó que la IA puede apoyar tareas de transcripción, síntesis o sistematización, pero PROHIBIÓ tajantemente delegar la valoración probatoria, el juicio de reproche y la decisión sustancial en algoritmos.",
        dimensions: {
          confidentiality: "Alto. Los expedientes judiciales contienen datos reservados de partes, testimonios e intimidad familiar. Subirlos a IA en la nube comercial viola el secreto del sumario y la Ley 1581 de 2012.",
          transparency: "Obligatoria. El juez debe informar en la sentencia de forma expresa si empleó IA, especificando qué software usó y con qué propósito exacto.",
          bias: "Crítico. Los modelos de lenguaje reproducen estereotipos socioeconómicos o de género que pueden contaminar la imparcialidad del juzgador.",
          humanOversight: "No delegable (*Human-in-the-loop* absoluto). La deliberación, el raciocinio hermenéutico y la firma de la providencia son atribución personalísima del juez humano."
        },
        laws: [
          "Corte Constitucional de Colombia, Sentencia T-323 de 2024 (Límites de la IA en la Rama Judicial)",
          "Consejo Superior de la Judicatura, Acuerdo PCSJA24-12243 (Lineamientos para uso de IA generativa)",
          "Constitución Política de Colombia (Art. 29 - Debido proceso y motivación judicial)",
          "Reglamento de IA de la Unión Europea (Reglamento UE 2024/1689 - Sistemas de alto riesgo judicial)"
        ],
        checklist: [
          "Nunca delegar la construcción de premisas jurídicas ni la decisión en la IA.",
          "Verificar manualmente cada cita de doctrina o jurisprudencia arrojada por el sistema.",
          "Hacer constar en el expediente la utilización de la herramienta tecnológica (deber de transparencia).",
          "Proteger estrictamente datos de menores y partes vulnerables mediante anonimización radical previa.",
          "Garantizar a las partes procesales el derecho a controvertir cualquier dato procesado informáticamente."
        ]
      },
      en: {
        title: "Judicial Function: Drafting Judgment Reasoning with Generative AI",
        risk: "HIGH",
        riskClass: "badge-high",
        summary: "Judicial reasoning is the bedrock of procedural due process and fundamental rights. In Ruling T-323 of 2024, the Constitutional Court determined that AI may assist with secretarial, indexing, or summarization tasks, but strictly PROHIBITED delegating legal reasoning, evidentiary evaluation, or decision-making to algorithms.",
        dimensions: {
          confidentiality: "High risk. Court files contain sealed personal records, depositions, and private matters. Uploading them to public cloud models breaches legal privacy mandates.",
          transparency: "Mandatory. Judges must transparently disclose any AI use in the court record, detailing the exact platform and scope of use.",
          bias: "Critical. LLMs often encode subtle demographic prejudices that violate judicial impartiality.",
          humanOversight: "Strict human-in-the-loop. Legal interpretation and final orders are exclusively judicial human duties."
        },
        laws: [
          "Constitutional Court Ruling T-323 of 2024 (Limits of AI in Judicial Branch)",
          "Superior Judicial Council Accord PCSJA24-12243 (Guidelines on GenAI in Courts)",
          "Due Process Clauses & Judicial Transparency Standards",
          "EU Artificial Intelligence Act (Regulation EU 2024/1689 - High-Risk Justice Systems)"
        ],
        checklist: [
          "Never delegate legal argumentation or sentencing to an algorithm.",
          "Manually cross-check every legal citation in official state gazettes.",
          "Explicitly record AI usage in the procedural docket (transparency duty).",
          "Anonymize all sensitive, medical, or minor records prior to digital processing.",
          "Uphold the adversarial right of parties to challenge algorithmic outputs."
        ]
      },
      pt: {
        title: "Função Judicial: Redação de fundamentação de sentença com IA",
        risk: "ALTO",
        riskClass: "badge-high",
        summary: "A fundamentação das decisões judiciais é garantia constitucional indelegável do devido processo legal. Conforme a Decisão T-323 de 2024, a IA pode auxiliar em tarefas acessórias de indexação e síntese documental, mas é TERMINANTEMENTE PROIBIDO transferir o juízo de valor, a ponderação probatória ou a decisão a sistemas automatizados.",
        dimensions: {
          confidentiality: "Alto. Processos judiciais contêm segredos de justiça e dados sensíveis. O upload em nuvens abertas viola a LGPD e o sigilo judicial.",
          transparency: "Obrigatória. O magistrado tem o dever de consignar expressamente nos autos se utilizou IA e quais os limites da ferramenta.",
          bias: "Crítico. Algoritmos perpetuam discriminações históricas que comprometem a equidistância e imparcialidade judicial.",
          humanOversight: "Indispensável. A interpretação hermenêutica e a caneta da decisão pertencem exclusivamente ao juiz humano."
        },
        laws: [
          "Corte Constitucional, Sentença T-323 de 2024 (Parâmetros de IA no Judiciário)",
          "Provimento PCSJA24-12243 (Diretrizes para IA generativa na Justiça)",
          "Garantias Constitucionais do Devido Processo Legal e Motivação dos Julgados",
          "Regulamento Europeu de IA (AI Act 2024/1689 - Sistemas de Alto Risco na Justiça)"
        ],
        checklist: [
          "Jamais delegar a conclusão lógica ou dosimetria jurídica ao software.",
          "Conferir pessoalmente o teor de cada ementa e precedente nos repositórios oficiais.",
          "Registrar no relatório o uso de ferramenta de assistência digital (dever de transparência).",
          "Tarjar integralmente dados de menores e informações cobertas por segredo de justiça.",
          "Assegurar o contraditório às partes sobre eventuais relatórios gerados por computador."
        ]
      }
    },

    // Caso 3: Citas inventadas / Caso Mata v. Avianca
    citas_alucinaciones: {
      es: {
        title: "Ejercicio Profesional: Citas de sentencias inventadas (Alucinaciones de IA)",
        risk: "INACEPTABLE / PROHIBIDO",
        riskClass: "badge-unacceptable",
        summary: "Presentar ante un juez o cliente escritos con citas, jurisprudencia o leyes inexistentes ('alucinaciones') constituye una falta gravísima a la lealtad procesal, la buena fe y el deber de diligencia profesional (Ley 1123 de 2007). Como ocurrió en el caso Mata v. Avianca, alegar que 'la IA se equivocó' genera sanciones económicas y disciplinarias directas al abogado.",
        dimensions: {
          confidentiality: "Moderado. Pero el problema central radica en la vulneración de la veracidad y la fe pública judicial.",
          transparency: "Engañar al juzgador con fuentes espurias socava la confianza pública en el sistema de justicia.",
          bias: "Los modelos de lenguaje generan textos coherentes que aparentan autoridad académica aun cuando carecen de existencia ontológica.",
          humanOversight: "Vulnerado totalmente si el profesional firma sin verificar en relatorías oficiales."
        },
        laws: [
          "Ley 1123 de 2007 (Código Disciplinario del Abogado en Colombia - Deberes de diligencia y probidad)",
          "Precedente Mata v. Avianca (Corte del Distrito Sur de Nueva York, 2023 - Sanción por alucinaciones de ChatGPT)",
          "Carta Ética Europea sobre el uso de la IA en los sistemas judiciales (CEPEJ, 2018 - Calidad y Veracidad)"
        ],
        checklist: [
          "Localiza la sentencia en la relatoría oficial de la Corte Suprema, Corte Constitucional o Consejo de Estado.",
          "Verifica número de radicado, magistrado ponente, fecha exacta y sentido del fallo.",
          "Si la cita no existe en fuentes oficiales primarias, descártala inmediatamente.",
          "Nunca presentes un escrito judicial confiando exclusivamente en la memoria de un chatbot.",
          "Asume la regla de oro: Quien firma responde personalmente por cada palabra ante el tribunal."
        ]
      },
      en: {
        title: "Legal Practice: Fabricated Case Law Citations (AI Hallucinations)",
        risk: "UNACCEPTABLE / PROHIBITED",
        riskClass: "badge-unacceptable",
        summary: "Submitting court filings or legal opinions citing fictitious precedents or fabricated statutes ('hallucinations') violates fundamental duties of candor toward the tribunal and professional diligence. As evidenced in Mata v. Avianca, claiming 'the machine misled me' leads directly to court sanctions and disciplinary disbarment proceedings.",
        dimensions: {
          confidentiality: "Moderate, but the main issue is deception of justice and lack of verification.",
          transparency: "Misleading the bench destroys institutional trust and due process.",
          bias: "LLMs craft eloquent, convincing prose that sounds legally authoritative while being completely fabricated.",
          humanOversight: "Completely breached when an attorney signs without manual primary source corroboration."
        },
        laws: [
          "Professional Conduct Code (Duty of competence, diligence, and candor to the court)",
          "Mata v. Avianca Landmark Sanction (SDNY 2023 - Penalty for unverified generative citations)",
          "CEPEJ European Ethical Charter on AI in Judicial Systems (2018 - Data Quality & Truthfulness)"
        ],
        checklist: [
          "Search the official court docket or primary legal repository for every cited case.",
          "Verify docket number, presiding judge, date of ruling, and actual disposition.",
          "Immediately purge any citation that cannot be verified in official gazettes.",
          "Never submit signed court filings based solely on an AI output.",
          "Remember the core canon: Whoever signs the brief bears absolute legal liability."
        ]
      },
      pt: {
        title: "Prática Forense: Citações jurisprudenciais inventadas (Alucinações de IA)",
        risk: "INACEITÁVEL / PROIBIDO",
        riskClass: "badge-unacceptable",
        summary: "Apresentar a um juiz ou cliente petições com precedentes ou acórdãos inexistentes ('alucinações') representa violação gravíssima à lealdade processual, boa-fé e ao dever de zelo profissional (Estatuto da Advocacia). Como no caso Mata v. Avianca, alegar desconhecimento do erro da IA enseja multas pecuniárias e sanções ético-disciplinares diretas.",
        dimensions: {
          confidentiality: "Moderado, porém o dano maior reside no falseamento da verdade forense.",
          transparency: "Apresentar fontes forjadas mina a integridade da administração da justiça.",
          bias: "Modelos de linguagem combinam termos jurídicos com alta plausibilidade formal, criando ilusões de verdade.",
          humanOversight: "Totalmente rompido quando o advogado assina a peça sem conferir as fontes oficiais."
        },
        laws: [
          "Estatuto da Advocacia e Código de Ética e Disciplina (Dever de veracidade e diligência)",
          "Precedente Mata v. Avianca (Tribunal Federal de Nova York, 2023 - Sanção por alucinações de ChatGPT)",
          "Carta Ética Europeia sobre o Uso da IA na Justiça (CEPEJ, 2018 - Princípio de Qualidade e Segurança)"
        ],
        checklist: [
          "Localize o acórdão no repositório oficial do STF, STJ, TST ou Tribunal Estadual correspondente.",
          "Verifique o número do processo, desembargador/ministro relator, data e tese jurídica fixada.",
          "Descarte incontinenti qualquer citação não localizada em bancos oficiais.",
          "Jamais protocole peças judiciais baseando-se unicamente nas respostas de um chatbot.",
          "Adote o postulado basilar: o profissional que assina a petição responde civil e disciplinarmente."
        ]
      }
    },

    // Caso 4: Confidencialidad / Subir contratos a chatbots públicos
    confidencialidad_chatbot: {
      es: {
        title: "Secreto Profesional: Subida de contratos y datos confidenciales a IA pública",
        risk: "ALTO",
        riskClass: "badge-high",
        summary: "Introducir documentos privados, contratos comerciales, historias clínicas o secretos de clientes en chatbots de acceso público viola el secreto profesional y el régimen de protección de datos personales (Ley 1581 de 2012). La mayoría de herramientas comerciales gratuitas utilizan los textos ingresados para reentrenar sus modelos, generando fuga de información sensible.",
        dimensions: {
          confidentiality: "Crítico. Los servidores de IA en la nube comercial pueden almacenar o exponer datos sensibles a terceros no autorizados.",
          transparency: "Deber de informar al cliente sobre las herramientas tecnológicas utilizadas y recabar su consentimiento previo.",
          bias: "La filtración de información empresarial confidencial compromete ventajas competitivas y la debida reserva legal.",
          humanOversight: "El profesional no debe escudarse en la comodidad de la herramienta descuidando la custodia de los datos del cliente."
        },
        laws: [
          "Ley 1581 de 2012 (Régimen General de Protección de Datos Personales en Colombia)",
          "Ley 1123 de 2007 (Art. 34 - Deber de guardar riguroso secreto profesional)",
          "Reglamento General de Protección de Datos de la UE (RGPD / GDPR)"
        ],
        checklist: [
          "Anonimizar radicalmente los documentos (eliminar nombres, cédulas, cifras exactas y ubicaciones).",
          "Revisar las políticas de privacidad y términos de servicio de la herramienta de IA (asegurar que no entrene con tus datos).",
          "Utilizar cuentas empresariales privadas con acuerdos de confidencialidad y procesamiento cerrado.",
          "Obtener consentimiento informado del cliente si se procesarán datos en infraestructuras externas.",
          "En caso de duda sobre el destino de la información: No ingresar el dato."
        ]
      },
      en: {
        title: "Professional Secrecy: Uploading Client Contracts to Public Chatbots",
        risk: "HIGH",
        riskClass: "badge-high",
        summary: "Feeding confidential contracts, medical histories, or proprietary client data into public AI engines breaches attorney-client privilege and data privacy statutes. Most free public platforms use customer inputs for ongoing model training, creating tangible risk of trade secret leaks.",
        dimensions: {
          confidentiality: "Critical risk. Public cloud LLMs may persist or leak sensitive personal identifiers to unauthorized third parties.",
          transparency: "Lawyers must disclose technological data flows to clients and secure prior informed consent.",
          bias: "Competitive injury and regulatory fines result from inadvertent disclosure of corporate records.",
          humanOversight: "Professional diligence requires actively managing and shielding client data custodianship."
        },
        laws: [
          "Data Protection Acts (GDPR / Statutory Personal Data Protection frameworks)",
          "Legal Ethics Code (Strict duty to maintain client confidentiality and professional privilege)",
          "Constitutional Ruling T-323 of 2024 (Data protection standards in digital legal environments)"
        ],
        checklist: [
          "Thoroughly pseudonymize documents (redact names, IDs, monetary terms, addresses).",
          "Inspect terms of service to verify whether data opting-out from training is enforced.",
          "Deploy enterprise-grade API connections bound by business non-disclosure terms.",
          "Secure client informed consent prior to off-premises cloud processing.",
          "Golden rule of prudence: When in doubt, do not upload the file."
        ]
      },
      pt: {
        title: "Sigilo Profissional: Envio de contratos e dados a chatbots públicos",
        risk: "ALTO",
        riskClass: "badge-high",
        summary: "Inserir minutas confidenciais, prontuários ou segredos empresariais em chatbots públicos viola frontalmente o sigilo da advocacia e a Lei Geral de Proteção de Dados (LGPD). Versões gratuitas frequentemente utilizam o texto submetido para reentrenamento dos modelos, expondo informações privadas.",
        dimensions: {
          confidentiality: "Crítico. Servidores abertos podem reter ou vazar dados pessoais sensíveis e cláusulas de sigilo.",
          transparency: "Dever de prestar contas ao assistido sobre o uso de soluções computacionais no manejo de seus arquivos.",
          bias: "Quebra de segredo de negócio e risco de indenizações por danos morais e patrimoniais.",
          humanOversight: "A guarda e custódia da documentação é dever indelegável do operador do direito."
        },
        laws: [
          "Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)",
          "Código de Ética da Advocacia (Dever imperativo de sigilo profissional)",
          "Sentença T-323 de 2024 (Parâmetros de privacidade e custódia de dados em IA)"
        ],
        checklist: [
          "Tarjar previamente qualquer dado identificável (nomes, CPFs, razões sociais e valores).",
          "Consultar a política de privacidade da plataforma para desativar o uso de dados em treino.",
          "Priorizar planos corporativos que assegurem ambientes criptografados e isolados.",
          "Obter autorização formal do cliente antes de processar informações em serviços de nuvem.",
          "Em caso de dúvida quanto à política de retenção: Não faça o upload."
        ]
      }
    },

    // Caso 5: Sesgo algorítmico / Selección de personal
    sesgo_contratacion: {
      es: {
        title: "Derechos Fundamentales: Discriminación y sesgo algorítmico en contratación",
        risk: "ALTO",
        riskClass: "badge-high",
        summary: "El uso de algoritmos opacos de IA para filtrar currículos o evaluar créditos que descartan de forma sistemática a mujeres, personas de cierta edad o grupos étnicos vulnera el derecho fundamental a la igualdad (Art. 13 CP) y la no discriminación. El Reglamento Europeo de IA clasifica los sistemas de selección laboral como de Alto Riesgo, exigiendo auditorías y explicabilidad obligatoria.",
        dimensions: {
          confidentiality: "Moderado a alto por el acopio masivo de perfiles y datos laborales de postulantes.",
          transparency: "Crítico. Exigencia del principio de explicabilidad: la persona excluida tiene derecho a saber qué parámetros algorítmicos motivaron el descarte.",
          bias: "Máximo. Los datos de entrenamiento basados en contrataciones pasadas replican brechas históricas de género y exclusión.",
          humanOversight: "Indispensable. Una decisión laboral relevante jamás puede ser 100% automatizada sin revisión de un gestor humano."
        },
        laws: [
          "Constitución Política (Art. 13 - Derecho a la igualdad y prohibición de discriminación)",
          "Reglamento de IA de la Unión Europea (Art. 6 y Anexo III - Sistemas de empleo de Alto Riesgo)",
          "Recomendación sobre la Ética de la IA de la UNESCO (2021 - Principio de Justicia y No Discriminación)"
        ],
        checklist: [
          "Auditar los datos de entrenamiento para neutralizar variables subrogadas discriminatorias (código postal, género, edad).",
          "Garantizar canales de contradicción para que los candidatos conozcan la lógica de evaluación.",
          "Establecer supervisión humana previa a cualquier decisión de descarte de postulantes.",
          "Realizar evaluaciones periódicas de impacto ético y métricas de equidad algorítmica.",
          "Cumplir con la normatividad laboral de igualdad de oportunidades y no segregación."
        ]
      },
      en: {
        title: "Fundamental Rights: Algorithmic Bias and Discrimination in Hiring",
        risk: "HIGH",
        riskClass: "badge-high",
        summary: "Deploying opaque AI software to filter job applications that systematically disadvantages women, older workers, or ethnic minorities infringes constitutional guarantees of equal treatment. The EU AI Act explicitly categorizes employment and HR algorithms as High-Risk, mandating strict bias mitigation and explainability audits.",
        dimensions: {
          confidentiality: "High due to bulk processing of applicant biometric and background data.",
          transparency: "Critical. Applicants are entitled to understand the criteria that drove automated rejection.",
          bias: "Maximum danger. Historical hiring data frequently embeds exclusionary patterns.",
          humanOversight: "Indispensable. Adverse personnel actions must never be left purely to algorithmic automations."
        },
        laws: [
          "Equal Rights & Non-Discrimination Constitutional Clauses",
          "EU AI Act (Annex III - High-Risk Employment & Worker Management Systems)",
          "UNESCO Recommendation on the Ethics of AI (2021 - Principle of Fairness & Human Dignity)"
        ],
        checklist: [
          "Audit training sets for proxy variables that reinforce discrimination.",
          "Provide transparent explanations for candidate scoring and selection matrices.",
          "Ensure meaningful human intervention prior to any candidate rejection.",
          "Conduct recurrent fairness tests and ethical impact assessments.",
          "Comply with national labor equality and affirmative action policies."
        ]
      },
      pt: {
        title: "Direitos Fundamentais: Viés algorítmico e discriminação em recrutamento",
        risk: "ALTO",
        riskClass: "badge-high",
        summary: "O emprego de sistemas automatizados de triagem curricular que descartem desproporcionalmente mulheres ou grupos vulneráveis afronta o princípio constitucional da igualdade e não discriminação. O AI Act europeu classifica ferramentas de recrutamento como de Alto Risco, demandando auditorias rigorosas e explicabilidade algorítmica.",
        dimensions: {
          confidentiality: "Alto pelo tratamento volumoso de históricos e dados pessoais de candidatos.",
          transparency: "Crítico. Todo cidadão tem o direito de compreender as diretrizes que nortearam a análise de seu perfil.",
          bias: "Máximo. Bases históricas refletem preconceitos sociais que o algoritmo reproduz e amplifica.",
          humanOversight: "Mandatório. Nenhuma eliminação profissional pode ocorrer sem o crivo de um gestor humano."
        },
        laws: [
          "Constituição Federal (Princípio da Igualdade e Proibição de Discriminação)",
          "AI Act da União Europeia (Sistemas de Alto Risco em Recursos Humanos e Emprego)",
          "Recomendação da UNESCO sobre Ética da IA (2021 - Equidade e Dignidade Humana)"
        ],
        checklist: [
          "Auditar os dados de treino para eliminar variáveis substitutas que gerem exclusão oculta.",
          "Assegurar explicabilidade clara e transparente sobre os critérios adotados pelo software.",
          "Garantir a intervenção humana conclusiva em todas as fases seletivas.",
          "Efetuar testes periódicos de paridade e métricas de justiça algorítmica.",
          "Observar a legislação trabalhista antidiscriminatória e as políticas de inclusão social."
        ]
      }
    },

    // Caso 6: Educación y Universidad (V Congreso Internacional de Ética)
    educacion_universidad: {
      es: {
        title: "Ámbito Académico: Uso ético de IA generativa en universidades y tesis de Derecho",
        risk: "MODERADO",
        riskClass: "badge-moderate",
        summary: "Como se debatió en el V Congreso Internacional de Ética (ponencias sobre bioética algorítmica y pensamiento crítico en educación superior), la IA generativa puede ser una excelente aliada para contrastar literatura o mejorar la redacción, siempre y cuando no reemplace el esfuerzo intelectual propio ni caiga en plagio u ocultamiento.",
        dimensions: {
          confidentiality: "Bajo a moderado. Cuidar no subir investigaciones en trámite de patente o datos de trabajo de campo sin anonimizar.",
          transparency: "Fundamental. Declarar con honestidad académica cómo y en qué secciones se utilizó la IA generativa.",
          bias: "Moderado. Recordar que los LLMs suelen citar predominantemente doctrina anglosajona o fuentes sesgadas.",
          humanOversight: "Primordial. El estudiante o docente es el único responsable de la originalidad y veracidad de sus conclusiones."
        },
        laws: [
          "Estatutos de Propiedad Intelectual y Honestidad Académica Universitaria",
          "V Congreso Internacional de Ética (Ponencias de bioética algorítmica y dignidad humana)",
          "Recomendaciones UNESCO sobre Ética de la IA en Educación Superior (2021)"
        ],
        checklist: [
          "Utilizar la IA para lluvias de ideas, esquemas y contrastes bibliográficos preliminares.",
          "Comprobar físicamente cada libro, autor, página y sentencia citada en bibliotecas oficiales.",
          "Incluir una declaración metodológica transparente indicando la herramienta de IA utilizada.",
          "No presentar texto generado por computadora como creación intelectual original personal.",
          "Fortalecer el pensamiento crítico y el debate jurídico propio frente a las respuestas de la máquina."
        ]
      },
      en: {
        title: "Academic Field: Ethical Use of Generative AI in Law Schools and Theses",
        risk: "MODERATE",
        riskClass: "badge-moderate",
        summary: "As explored at the V International Ethics Congress (panels on algorithmic bioethics and critical thinking in higher education), generative AI can be an enriching partner for literature reviews and brainstorming, provided it does not replace personal intellectual diligence or degenerate into academic fraud.",
        dimensions: {
          confidentiality: "Low to moderate. Avoid uploading proprietary field research or patent-pending treatises.",
          transparency: "Essential. Openly disclose in method sections which tools were used and for what drafting purposes.",
          bias: "Moderate. Acknowledge that models lean toward Anglo-American sources and selective doctrinal schools.",
          humanOversight: "Utmost priority. The researcher remains solely accountable for academic veracity."
        },
        laws: [
          "Academic Integrity Codes & Copyright Legislation",
          "V International Ethics Congress (Algorithmic bioethics and human care panels)",
          "UNESCO Recommendations on the Ethics of AI in Education and Research (2021)"
        ],
        checklist: [
          "Leverage AI for exploratory outlines and preliminary comparative overviews.",
          "Independently verify every cited book, chapter, case, and author in authentic library sources.",
          "Affix an explicit AI Disclosure Statement in your paper or dissertation.",
          "Refrain from presenting AI-generated prose as your original intellectual contribution.",
          "Nurture independent legal critical thinking and ethical dialogue."
        ]
      },
      pt: {
        title: "Ambiente Acadêmico: Uso ético de IA generativa em faculdades e teses de Direito",
        risk: "MODERADO",
        riskClass: "badge-moderate",
        summary: "Conforme discutido no V Congresso Internacional de Ética (debates sobre bioética algorítmica e pensamento crítico no ensino superior), a IA generativa constitui valiosa ferramenta de auxílio a estudos e sínteses, desde que não substitua a reflexão intelectual autoral nem resvale em plágio disfarçado.",
        dimensions: {
          confidentiality: "Baixo a moderado. Preservar dados de campo não publicados ou pesquisas em vias de registro.",
          transparency: "Fundamental. Declarar formalmente na metodologia da pesquisa a extensão e as ferramentas de IA empregadas.",
          bias: "Moderado. Lembrar que os modelos tendem a reproduzir preponderantemente doutrinas hegemônicas.",
          humanOversight: "Prioritário. O aluno ou pesquisador é o único titular da responsabilidade ética do conteúdo acadêmico."
        },
        laws: [
          "Regimentos Acadêmicos de Integridade e Lei de Direitos Autorais",
          "V Congresso Internacional de Ética (Bioética algorítmica e dignidade no ensino superior)",
          "Diretrizes da UNESCO sobre Ética da IA na Educação e Pesquisa (2021)"
        ],
        checklist: [
          "Utilizar a IA para mapas conceituais e organização preliminar de ementas.",
          "Conferir presencialmente ou em bases oficiais cada autor, ano, citação e página referenciada.",
          "Inserir nota metodológica declarando a utilização assistida por inteligência artificial.",
          "Não assumir textos automáticos como produção autoral original.",
          "Preservar o senso crítico e o rigor deontológico na pesquisa jurídica."
        ]
      }
    }
  },

  /**
   * Evalúa una consulta del usuario (bien sea preset o pregunta libre)
   */
  evaluateQuery(userQuery, lang = "es") {
    const q = (userQuery || "").toLowerCase();
    
    // 1. Detectar si coincide con un caso conocido
    if (q.includes("salario") || q.includes("empleador") || q.includes("sueldo") || q.includes("trabajo") || q.includes("wage") || q.includes("salary")) {
      return this.cases.laboral_salario[lang];
    }
    if (q.includes("sentencia") || q.includes("juez") || q.includes("juzgado") || q.includes("t-323") || q.includes("motivaci") || q.includes("judicatura") || q.includes("judge") || q.includes("ruling")) {
      return this.cases.judicial_motivacion[lang];
    }
    if (q.includes("cita") || q.includes("alucinaci") || q.includes("inventa") || q.includes("mata") || q.includes("avianca") || q.includes("hallucinat") || q.includes("jurisprudencia")) {
      return this.cases.citas_alucinaciones[lang];
    }
    if (q.includes("confidencial") || q.includes("secreto") || q.includes("contrato") || q.includes("1581") || q.includes("subir") || q.includes("privacidad") || q.includes("client")) {
      return this.cases.confidencialidad_chatbot[lang];
    }
    if (q.includes("sesgo") || q.includes("discriminaci") || q.includes("hoja de vida") || q.includes("curricul") || q.includes("seleccion") || q.includes("bias") || q.includes("hiring")) {
      return this.cases.sesgo_contratacion[lang];
    }
    if (q.includes("tesis") || q.includes("universidad") || q.includes("estudiante") || q.includes("congreso") || q.includes("academ") || q.includes("plagio") || q.includes("paper")) {
      return this.cases.educacion_universidad[lang];
    }

    // 2. Consulta libre generada dinámicamente con heurística ético-jurídica
    return this.generateCustomEvaluation(userQuery, lang);
  },

  /**
   * Generador dinámico para preguntas abiertas del usuario
   */
  generateCustomEvaluation(query, lang = "es") {
    const q = query.toLowerCase();
    let risk = "MODERADO";
    let riskClass = "badge-moderate";

    if (q.includes("penal") || q.includes("cárcel") || q.includes("libertad") || q.includes("falsificar") || q.includes("secreto") || q.includes("engañar")) {
      risk = lang === "es" ? "ALTO / CRÍTICO" : (lang === "en" ? "HIGH / CRITICAL" : "ALTO / CRÍTICO");
      riskClass = "badge-high";
    }

    if (lang === "es") {
      return {
        title: `Evaluación Especial: "${query.substring(0, 45)}..."`,
        risk: risk,
        riskClass: riskClass,
        summary: `Tu consulta sobre "${query.substring(0, 60)}" involucra la interacción entre tecnología, deberes legales y salvaguarda de derechos. Desde la perspectiva de IUS ÉTICA, la inteligencia artificial puede orientarte o procesar información, pero la responsabilidad y validez jurídica recae enteramente en el criterio y verificación humana.`,
        dimensions: {
          confidentiality: "Revisa si estás manejando datos personales o reservados protegidos por la Ley 1581 de 2012. Si es así, anonimiza antes de interactuar con cualquier IA.",
          transparency: "Asegúrate de entender cómo la IA llegó a esa conclusión y declara su uso si genera consecuencias procesales o académicas.",
          bias: "Verifica que la respuesta no contenga generalizaciones arbitrarias ni aplique legislaciones incompatibles con tu jurisdicción.",
          humanOversight: "Regla de oro: La IA es un instrumento de apoyo auxiliar; nunca delegues la decisión final ni firmes documentos sin revisión humana."
        },
        laws: [
          "Sentencia T-323 de 2024 de la Corte Constitucional (Límites éticos y auxilio instrumental de la IA)",
          "Ley 1581 de 2012 (Habeas Data y protección de datos en Colombia)",
          "Principios de UNESCO sobre Ética de la Inteligencia Artificial (2021)",
          "Reglamento (UE) 2024/1689 de Inteligencia Artificial (AI Act)"
        ],
        checklist: [
          "Identificar las normas vigentes y consultar fuentes oficiales primarias.",
          "Verificar la veracidad de cualquier cita legal o afirmación fáctica generada.",
          "Anonimizar nombres, números de identificación y datos privados.",
          "Explicar con claridad a las partes involucradas qué tareas apoyó la tecnología.",
          "Acudir a un profesional calificado para la toma de decisiones definitivas."
        ]
      };
    } else if (lang === "en") {
      return {
        title: `Custom Assessment: "${query.substring(0, 45)}..."`,
        risk: risk === "MODERADO" ? "MODERATE" : "HIGH / CRITICAL",
        riskClass: riskClass,
        summary: `Your inquiry regarding "${query.substring(0, 60)}" touches upon the essential intersection of technology, procedural duties, and human rights. Under the IUS ÉTICA framework, AI can provide preliminary guidance, but ultimate legal liability and truthfulness remain strictly human.`,
        dimensions: {
          confidentiality: "Ensure no private, financial, or sensitive information is processed on uncertified open servers without prior consent.",
          transparency: "Understand the logic behind the suggestion and declare technological assistance whenever procedural rights are affected.",
          bias: "Verify that recommendations do not import discriminatory assumptions or mismatched legal jurisdictions.",
          humanOversight: "Golden Rule: AI is merely an auxiliary tool; human review and accountability must remain intact."
        },
        laws: [
          "Constitutional Court Ruling T-323 of 2024 (Auxiliary limits of generative AI)",
          "Statutory Personal Data Protection & Privacy Frameworks",
          "UNESCO Recommendations on the Ethics of Artificial Intelligence (2021)",
          "EU Artificial Intelligence Act (Regulation EU 2024/1689)"
        ],
        checklist: [
          "Consult authoritative primary sources and official gazettes.",
          "Thoroughly verify factual data and statute citations before taking action.",
          "Pseudonymize identities, account numbers, and sensitive client facts.",
          "Maintain transparency regarding AI intervention in documents and decisions.",
          "Consult a qualified legal practitioner for formal counsel and representation."
        ]
      };
    } else {
      return {
        title: `Avaliação Personalizada: "${query.substring(0, 45)}..."`,
        risk: risk === "MODERADO" ? "MODERADO" : "ALTO / CRÍTICO",
        riskClass: riskClass,
        summary: `Sua dúvida sobre "${query.substring(0, 60)}" envolve a articulação entre ferramentas computacionais, deveres processuais e direitos fundamentais. Para o IUS ÉTICA, a IA pode fornecer subsídios preliminares, contudo a responsabilidade final permanece indelegável da pessoa humana.`,
        dimensions: {
          confidentiality: "Certifique-se de não veicular dados pessoais sensíveis ou segredos em plataformas abertas sem consentimento.",
          transparency: "Compreenda a fundamentação apresentada e certifique-se da possibilidade de ampla defesa e contraditório.",
          bias: "Confira se a orientação não perpetua generalizações indevidas ou leis de outros países.",
          humanOversight: "Regra Fundamental: A tecnologia assiste, mas a decisão e a assinatura cabem sempre ao ser humano."
        },
        laws: [
          "Sentença T-323 de 2024 (Parâmetros éticos de suporte instrumental da IA)",
          "Lei Geral de Proteção de Dados (LGPD) e sigilo profissional",
          "Recomendação da UNESCO sobre a Ética da Inteligência Artificial (2021)",
          "Regulamento Europeu de Inteligência Artificial (AI Act 2024/1689)"
        ],
        checklist: [
          "Verificar a vigência das leis nas fontes oficiais e jurisprudência consolidada.",
          "Conferir a autenticidade de dados, prazos e citações legais.",
          "Tarjar nomes, documentos e informações de sigilo de terceiros.",
          "Informar com clareza a intervenção da tecnologia no processo ou relatório.",
          "Buscar orientação jurídica habilitada para providências judiciais formais."
        ]
      };
    }
  }
};
