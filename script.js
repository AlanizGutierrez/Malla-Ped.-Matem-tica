const malla = [
  // 📘 PRIMER SEMESTRE
  { id: "mat_elem", nombre: "Matemática Elemental", creditos: 8, semestre: 1, requisitos: [] },
  { id: "geom_elem", nombre: "Elementos de la Geometría Euclidiana y Analítica", creditos: 6, semestre: 1, requisitos: [] },
  { id: "tic_fund", nombre: "Fundamentos del uso de las TIC's para la Matemática", creditos: 6, semestre: 1, requisitos: [] },
  { id: "ped_ident", nombre: "Pedagogía e Identidad Profesional Docente", creditos: 4, semestre: 1, requisitos: [] },
  { id: "proc_aprend", nombre: "Procesos de Aprendizaje en Matemática", creditos: 6, semestre: 1, requisitos: [] },

  // 📘 SEGUNDO SEMESTRE
  { id: "pract_1", nombre: "Práctica I de Inducción al Contexto Educativo", creditos: 4, semestre: 2, requisitos: ["mat_elem", "geom_elem", "tic_fund", "ped_ident", "proc_aprend"] },
  { id: "alg_intro", nombre: "Introducción al Álgebra", creditos: 6, semestre: 2, requisitos: ["mat_elem"] },
  { id: "proc_inf", nombre: "Procesos Infinitos", creditos: 6, semestre: 2, requisitos: ["mat_elem"] },
  { id: "geom_plana", nombre: "Geometría Euclidiana Plana", creditos: 6, semestre: 2, requisitos: ["geom_elem"] },
  { id: "tic_aprend", nombre: "TIC para el Aprendizaje de la Matemática", creditos: 4, semestre: 2, requisitos: ["tic_fund"] },
  { id: "reflexion", nombre: "Reflexión Crítica y Filosófica de los Procesos Educativos", creditos: 4, semestre: 2, requisitos: [] },

  // 📘 TERCER SEMESTRE
  { id: "pract_2", nombre: "Práctica II de Colaboración", creditos: 4, semestre: 3, requisitos: ["pract_1", "alg_intro", "proc_inf", "geom_plana", "tic_aprend", "reflexion"] },
  { id: "calc_diff", nombre: "Cálculo Diferencial en Una Variable", creditos: 6, semestre: 3, requisitos: ["proc_inf", "alg_intro", "geom_plana"] },
  { id: "geom_esp", nombre: "Geometría del Espacio y Vectorial", creditos: 6, semestre: 3, requisitos: ["geom_plana"] },
  { id: "estadistica", nombre: "Estadística Descriptiva", creditos: 6, semestre: 3, requisitos: ["mat_elem", "tic_aprend"] },
  { id: "didac_fund", nombre: "Elementos Fundamentales de la Didáctica de la Matemática", creditos: 4, semestre: 3, requisitos: ["pract_1", "alg_intro", "proc_inf", "geom_plana", "tic_aprend", "reflexion"] },
  { id: "idioma_1", nombre: "Segundo Idioma I", creditos: 4, semestre: 3, requisitos: [] },

  // 📘 CUARTO SEMESTRE
  { id: "sist_num", nombre: "Fundamentos de los Sistemas Numéricos", creditos: 6, semestre: 4, requisitos: ["alg_intro"] },
  { id: "calc_int", nombre: "Cálculo Integral en Una Variable y Modelos Diferenciales", creditos: 6, semestre: 4, requisitos: ["calc_diff"] },
  { id: "geom_curvas", nombre: "Taller de Geometría de Curvas y Superficies", creditos: 2, semestre: 4, requisitos: ["geom_esp", "calc_diff"] },
  { id: "prob_discretas", nombre: "Elementos de Probabilidades Discretas", creditos: 4, semestre: 4, requisitos: ["estadistica", "alg_intro", "proc_inf"] },
  { id: "teo_didac", nombre: "Teorías Didácticas de la Matemática", creditos: 4, semestre: 4, requisitos: ["didac_fund", "estadistica", "pract_2", "reflexion"] },
  { id: "idioma_2", nombre: "Segundo Idioma II", creditos: 4, semestre: 4, requisitos: ["idioma_1"] },
  { id: "soc_educ", nombre: "Interpretaciones Sociológicas de la Educación", creditos: 4, semestre: 4, requisitos: ["ped_ident"] },

  // 📘 QUINTO SEMESTRE
  { id: "pract_3", nombre: "Práctica III de Codocencia en Atención a la Diversidad", creditos: 4, semestre: 5, requisitos: ["sist_num", "calc_int", "geom_curvas", "prob_discretas", "teo_didac", "idioma_2", "soc_educ"] },
  { id: "algebra_lin", nombre: "Álgebra Lineal", creditos: 6, semestre: 5, requisitos: ["sist_num"] },
  { id: "teoremas", nombre: "Modelos de Variables Aleatorias Continuas y Teoremas Límites", creditos: 6, semestre: 5, requisitos: ["prob_discretas", "calc_int"] },
  { id: "div_inclu", nombre: "Diversidad e Inclusión en Educación Matemática", creditos: 4, semestre: 5, requisitos: ["sist_num", "calc_int", "geom_curvas", "prob_discretas", "teo_didac", "idioma_2", "soc_educ"] },
  { id: "politicas", nombre: "Políticas Educacionales y Relaciones de Poder", creditos: 4, semestre: 5, requisitos: ["soc_educ"] },
  { id: "idioma_3", nombre: "Segundo Idioma III", creditos: 4, semestre: 5, requisitos: ["idioma_2"] },

  // 📘 SEXTO SEMESTRE
  { id: "analisis_reales", nombre: "Análisis de los Reales", creditos: 6, semestre: 6, requisitos: ["calc_int"] },
  { id: "no_euclideanas", nombre: "Geometrías No Euclideanas", creditos: 6, semestre: 6, requisitos: ["geom_curvas", "algebra_lin"] },
  { id: "inferencia", nombre: "Elementos de Inferencia Estadística", creditos: 6, semestre: 6, requisitos: ["teoremas"] },
  { id: "tic_ensenanza1", nombre: "TIC para la Enseñanza de la Matemática I", creditos: 6, semestre: 6, requisitos: ["pract_3", "div_inclu"] },
  { id: "paradigmas", nombre: "Paradigmas, Teorías y Enfoques Contemporáneos de la Educación", creditos: 4, semestre: 6, requisitos: ["politicas"] },
  { id: "curriculum", nombre: "Currículum y Planificación para Educación Matemática", creditos: 4, semestre: 6, requisitos: ["teo_didac", "teoremas", "politicas", "pract_3"] },

  // 📘 SÉPTIMO SEMESTRE
  { id: "pract_4", nombre: "Práctica IV de Codocencia en Contextos Educativos Diversos", creditos: 4, semestre: 7, requisitos: ["pract_3", "algebra_lin", "teoremas", "div_inclu", "politicas","idioma_3", "paradigmas", "curriculum", "inferencia"] },
  { id: "calc_varias", nombre: "Cálculo en Varias Variables", creditos: 6, semestre: 7, requisitos: ["analisis_reales"] },
  { id: "didac_mate", nombre: "Didáctica de la Matemática", creditos: 6, semestre: 7, requisitos: ["div_inclu", "teo_didac", "inferencia", "curriculum"] },
  { id: "evaluacion", nombre: "Evaluación para Educación Matemática", creditos: 4, semestre: 7, requisitos: ["curriculum", "paradigmas"] },
  { id: "mencion_1", nombre: "Mención I", creditos: 8, semestre: 7, requisitos: ["inferencia", "tic_ensenanza1"] },

  // 📘 OCTAVO SEMESTRE
  { id: "pract_5", nombre: "Práctica V Docencia: Enseñanza para el Aprendizaje de la Matemática", creditos: 6, semestre: 8, requisitos: ["pract_4", "didac_mate", "evaluacion"] },
  { id: "teo_grupos", nombre: "Teoría de Grupos y Anillos", creditos: 6, semestre: 8, requisitos: ["algebra_lin", "analisis_reales"] },
  { id: "invest_innova", nombre: "Investigación e Innovación en Educación Matemática", creditos: 4, semestre: 8, requisitos: ["pract_4", "didac_mate", "evaluacion", "mencion_1"] },
  { id: "orientacion", nombre: "Orientación y Convivencia Educacional", creditos: 4, semestre: 8, requisitos: ["didac_mate", "evaluacion"] },
  { id: "proyecto", nombre: "Proyecto para Educación Matemática", creditos: 4, semestre: 8, requisitos: ["pract_4", "didac_mate", "evaluacion", "mencion_1"] },
  { id: "mencion_2", nombre: "Mención II", creditos: 8, semestre: 8, requisitos: ["mencion_1"] },

  // 📘 NOVENO SEMESTRE
  { id: "pract_6", nombre: "Práctica VI de Docencia Final", creditos: 24, semestre: 9, requisitos: ["pract_5", "teo_grupos", "invest_innova", "orientacion", "proyecto", "mencion_2"] },
  { id: "egreso", nombre: "Fortalecimiento de Competencias de Egreso", creditos: 4, semestre: 9, requisitos: ["pract_4", "didac_mate", "evaluacion", "mencion_1"] },

  // 📘 DÉCIMO SEMESTRE
  { id: "titulo", nombre: "Trabajo de Título en Educación Matemática", creditos: 32, semestre: 10, requisitos: ["pract_6"] },
];

const totalCreditos = malla.reduce((sum, ramo) => sum + ramo.creditos, 0);
document.getElementById("creditos-totales").textContent = totalCreditos;

const container = document.getElementById("malla-container");

function crearMalla() {
  const semestres = {};

  malla.forEach(ramo => {
    if (!semestres[ramo.semestre]) {
      semestres[ramo.semestre] = [];
    }
    semestres[ramo.semestre].push(ramo);
  });

  for (const semestre in semestres) {
    const box = document.createElement("div");
    box.className = "semestre";
    box.innerHTML = `<h2>Semestre ${semestre}</h2>`;

    semestres[semestre].forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;
      div.dataset.id = ramo.id;
      div.dataset.creditos = ramo.creditos;
      div.dataset.requisitos = JSON.stringify(ramo.requisitos);
      box.appendChild(div);
    });

    container.appendChild(box);
  }
// Marcar los ramos guardados en localStorage
const guardados = JSON.parse(localStorage.getItem("ramosCursados") || "[]");
guardados.forEach(id => {
  const div = document.querySelector(`.ramo[data-id="${id}"]`);
  if (div) div.classList.add("cursado");
});

  actualizarEstado();
  activarClicks();
}

function activarClicks() {
  document.querySelectorAll(".ramo").forEach(div => {
    div.addEventListener("click", () => {
      div.classList.toggle("cursado");
      actualizarEstado();
    });
  });
}

function actualizarEstado() {
  const cursados = new Set();

  document.querySelectorAll(".ramo").forEach(div => {
    const requisitos = JSON.parse(div.dataset.requisitos);
    const cumplidos = requisitos.every(r => cursados.has(r));

    if (!div.classList.contains("cursado")) {
      div.classList.toggle("bloqueado", !cumplidos);
    }

    if (div.classList.contains("cursado")) {
      cursados.add(div.dataset.id);
    }
  });

  // Guardar en localStorage
  localStorage.setItem("ramosCursados", JSON.stringify([...cursados]));

  // Calcular créditos
  let creditosCursados = [...cursados].reduce((total, id) => {
    const ramo = malla.find(r => r.id === id);
    return total + (ramo ? ramo.creditos : 0);
  }, 0);

  // Actualizar interfaz
  document.getElementById("creditos-cursados").textContent = creditosCursados;
  const porcentaje = ((creditosCursados / totalCreditos) * 100).toFixed(1);
  document.getElementById("porcentaje-avance").textContent = `${porcentaje}%`;
  document.getElementById("barra-avance").style.width = `${porcentaje}%`;
}


crearMalla();
