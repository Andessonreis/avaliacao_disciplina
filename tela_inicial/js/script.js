
const disciplinasEsperando = [
    { title: "Matemática", course: "Informática", class: "2° A", date: "23/07/2023" },
   
];

const disciplinasProgresso = [
    { title: "História", course: "Informática", class: "2° A", date: "28/07/2023" },

];

const disciplinasConcluido = [
    { title: "Geografia", course: "Informática", class: "2° A", date: "30/07/2023" },
   
];


function createDisciplinaCard(disciplina) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="status-bar"></div>
        <i class="bx bx-time"></i>
        <h3 class="subject-title">${disciplina.title}</h3>
        <p class="subject-info">Curso: ${disciplina.course}</p>
        <p class="subject-info">Turma: ${disciplina.class}</p>
        <p class="subject-info">Dia: ${disciplina.date}</p>
    `;
    return card;
}

function addDisciplinaCards(containerId, disciplinas) {
    const container = document.getElementById(containerId);
    disciplinas.forEach((disciplina) => {
        const card = createDisciplinaCard(disciplina);
        container.appendChild(card);
    });
}


addDisciplinaCards("waiting-cards-container", disciplinasEsperando);
addDisciplinaCards("progress-cards-container", disciplinasProgresso);
addDisciplinaCards("completed-cards-container", disciplinasConcluido);
