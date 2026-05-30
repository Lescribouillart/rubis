// --- Configuration des défis ---
const defis = [
    // Catégorie : Défis principaux
    {
        categorie: "Défis principaux",
        defis: [
            {
                id: "lion",
                titre: "La hardiesse du lion",
                desc: "Rapportez quatre Optimal en sept jours (le décompte commence au premier O obtenu après votre post d'inscription)",
                type: "checkbox",
                rubis: 15,
                unique: true
            },
            {
                id: "perseverance",
                titre: "Persévérance",
                desc: "Rendez un devoir de chaque matière obligatoire dans le mois (voir règles pour options et filière Total)",
                type: "checkbox",
                rubis: 30,
                bonus: 10,
                bonusLabel: "+10 rubis si toutes les matières optionnelles ou filière Total",
                unique: true
            },
            {
                id: "combattant",
                titre: "Combattant.e de l'extrême",
                desc: "Rapportez 45 points dans le mois (devoirs, jeux, services...)",
                type: "checkbox",
                rubis: 30,
                unique: true
            },
            {
                id: "roi",
                titre: "Roi ou reine de la savane",
                desc: "Rapportez 75 points dans le mois (devoirs, jeux, services...)",
                type: "checkbox",
                rubis: 50,
                unique: true
            },
            {
                id: "queue",
                titre: "La queue qui touille",
                desc: "Passez tous les jours du mois à ajouter un ingrédient dans la potion (1 oubli toléré)",
                type: "checkbox",
                rubis: 8,
                unique: true
            },
            {
                id: "emissaire",
                titre: "L'émissaire de Gryffondor",
                desc: "Faites un post RP, d'au moins 220 mots, avec un personnage élève de chaque maison et un personnage adulte (5 posts RP au total)",
                type: "checkbox",
                rubis: 8,
                unique: true
            },
            {
                id: "ecrivain-chat",
                titre: "Ecrivain Chat",
                desc: "Rédigez 15 RPs dans le mois d'au moins 220 mots dans des sujets RP (bonus pour RPG+ et RPG++)",
                type: "ecrivain",
                rubis: 20,
                seuil: 15
            },
            {
                id: "ecrivain-lynx",
                titre: "Ecrivain Lynx",
                desc: "Rédigez 30 RPs dans le mois d'au moins 220 mots dans des sujets RP (bonus pour RPG+ et RPG++)",
                type: "ecrivain",
                rubis: 45,
                seuil: 30
            },
            {
                id: "ecrivain-guepard",
                titre: "Ecrivain Guépard",
                desc: "Rédigez 45 RPs dans le mois d'au moins 220 mots dans des sujets RP (bonus pour RPG+ et RPG++)",
                type: "ecrivain",
                rubis: 70,
                seuil: 45
            }
        ]
    },
    // Catégorie : Défis Sablier
    {
        categorie: "Défis Sablier",
        defis: [
            {
                id: "sablier1",
                titre: "Sablier #1",
                desc: "Chaque E ou O rapporté dans le mois vous permet de gagner 3 rubis (cumulable)",
                type: "number",
                rubis: 3
            },
            {
                id: "sablier2",
                titre: "Sablier #2",
                desc: "Chaque A rapporté dans le mois vous permet de gagner 2 rubis (cumulable)",
                type: "number",
                rubis: 2
            },
            {
                id: "sablier3",
                titre: "Sablier #3",
                desc: "Chaque autre note rapportée dans le mois vous permet de gagner 1 rubis (cumulable)",
                type: "number",
                rubis: 1
            },
            {
                id: "sablier4",
                titre: "Sablier #4",
                desc: "Finir son année devoir (hors BUSE et ASPIC) - 5 rubis",
                type: "checkbox",
                rubis: 5,
                unique: true
            },
            {
                id: "sablier5",
                titre: "Sablier #5",
                desc: "Obtenir 5 points grâce aux jeux/services (cumulable, 4 rubis par tranche de 5 points)",
                type: "number",
                rubis: 4
            },
            {
                id: "sablier6",
                titre: "Sablier #6",
                desc: "Finir tous ses BUSE obligatoires - 5 rubis (+2 rubis bonus)",
                type: "checkbox",
                rubis: 5,
                bonus: 2,
                bonusLabel: "+2 rubis si toutes les matières optionnelles ou filière Total",
                unique: true
            },
            {
                id: "sablier7",
                titre: "Sablier #7",
                desc: "Finir tous ses ASPIC obligatoires - 5 rubis (+2 rubis bonus)",
                type: "checkbox",
                rubis: 5,
                bonus: 2,
                bonusLabel: "+2 rubis si toutes les matières optionnelles ou filière Total",
                unique: true
            },
            {
                id: "sablier8",
                titre: "Sablier #8",
                desc: "Finir le mois dans le top 10 des élèves ayant rapporté le plus de points aux sabliers. - 10 rubis",
                type: "checkbox",
                rubis: 10,
                unique: true
            },
            {
                id: "sablier9",
                titre: "Sablier #9",
                desc: "Participer à un service (hors services internes à la maison) - 2 rubis (cumulable)",
                type: "number",
                rubis: 2
            }
        ]
    },
    // Catégorie : Défis Maison
    {
        categorie: "Défis Maison",
        defis: [
            {
                id: "maison1",
                titre: "Maison #1",
                desc: "Ajouter plus de 20 ingrédients à la potion dans le mois - 4 rubis",
                type: "checkbox",
                rubis: 4,
                unique: true
            },
            {
                id: "maison2",
                titre: "Maison #2",
                desc: "Commenter l'édition du Gryffon'heure (1 fois/mois) - 2 rubis",
                type: "checkbox",
                rubis: 2,
                unique: true
            },
            {
                id: "maison3",
                titre: "Maison #3",
                desc: "Jouer au moins 3 fois à tous les jeux de la salle commune - 2 rubis",
                type: "checkbox",
                rubis: 2,
                unique: true
            },
            {
                id: "maison4",
                titre: "Maison #4",
                desc: "Terminer un RP dans la salle commune - 2 rubis",
                type: "checkbox",
                rubis: 2,
                unique: true
            },
            {
                id: "maison5",
                titre: "Maison #5",
                desc: "Être nommé.e gryffon.e du mois - 10 rubis",
                type: "checkbox",
                rubis: 10,
                unique: true
            },
            {
                id: "maison6",
                titre: "Maison #6",
                desc: "Participer au concours du Gryffon'Heure - 6 rubis",
                type: "checkbox",
                rubis: 6,
                unique: true
            },
            {
                id: "maison7",
                titre: "Maison #7",
                desc: "Voir son article publié dans le Gryffon'Heure - 6 rubis",
                type: "checkbox",
                rubis: 6,
                unique: true
            },
            {
                id: "maison8",
                titre: "Maison #8",
                desc: "Participer à un article du Gryffon'Heure - 3 rubis",
                type: "checkbox",
                rubis: 3,
                unique: true
            },
            {
                id: "maison9",
                titre: "Maison #9",
                desc: "Faire un podium à une session actualité quotidienne de fake news or not fake news - 3/2/1 rubis selon la place",
                type: "number",
                rubis: [3,2,1],
                label: ["1ère place","2e place","3e place"]
            },
            {
                id: "maison10",
                titre: "Maison #10",
                desc: "Faire un podium à une session breaking news de fake news or not fake news - 5/3/2 rubis selon la place",
                type: "number",
                rubis: [5,3,2],
                label: ["1ère place","2e place","3e place"]
            },
            {
                id: "maison11",
                titre: "Maison #11",
                desc: "Avoir posté trois rappels de jeux dans le panneau des jeux (1 fois/mois) - 2 rubis",
                type: "checkbox",
                rubis: 2,
                unique: true
            }
        ]
    },
    // Catégorie : Défis Écriture
    {
        categorie: "Défis Écriture",
        defis: [
            {
                id: "ecriture1",
                titre: "Écriture #1",
                desc: "Chaque post RPG écrit dans le mois rapporte 1 rubis (cumulable)",
                type: "number",
                rubis: 1
            },
            {
                id: "ecriture2",
                titre: "Écriture #2",
                desc: "Chaque post RPG+ écrit dans le mois rapporte 2 rubis (cumulable)",
                type: "number",
                rubis: 2
            },
            {
                id: "ecriture3",
                titre: "Écriture #3",
                desc: "Chaque post RPG++ écrit dans le mois rapporte 3 rubis (cumulable)",
                type: "number",
                rubis: 3
            },
            {
                id: "ecriture4",
                titre: "Écriture #4",
                desc: "Poster trois fois des RPG de 110 à 220 mots (cumulable) - 2 rubis",
                type: "number",
                rubis: 2
            }
        ]
    },
    // Catégorie : Défis Autre
    {
        categorie: "Défis Autre",
        defis: [
            {
                id: "autre1",
                titre: "Autre #1",
                desc: "Terminer premier au classement de la cabane de Cristal - 5 rubis",
                type: "checkbox",
                rubis: 5,
                unique: true
            },
            {
                id: "autre2",
                titre: "Autre #2",
                desc: "S’inscrire et/ou avoir participé à un club tenu par un élève - 3 rubis",
                type: "checkbox",
                rubis: 3,
                unique: true
            },
            {
                id: "autre3",
                titre: "Autre #3",
                desc: "Participer à une session de jeu de créativité - 3 rubis (cumulable)",
                type: "number",
                rubis: 3
            }
        ]
    }
];

// --- Génération du formulaire ---
const form = document.getElementById('defis-form');
const totalRubisElem = document.getElementById('total-rubis');

function createDefiBlock(defi, catIndex, defiIndex) {
    const block = document.createElement('div');
    block.className = 'defi-block';
    const title = document.createElement('div');
    title.className = 'defi-title';
    title.textContent = defi.titre;
    block.appendChild(title);
    const desc = document.createElement('div');
    desc.className = 'defi-desc';
    desc.textContent = defi.desc;
    block.appendChild(desc);

    // Champs selon le type
    if (defi.type === 'checkbox') {
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = defi.id;
        input.dataset.cat = catIndex;
        input.dataset.defi = defiIndex;
        block.appendChild(input);
        if (defi.bonus) {
            const bonus = document.createElement('label');
            bonus.innerHTML = `<input type="checkbox" id="${defi.id}-bonus"> <span>${defi.bonusLabel}</span>`;
            block.appendChild(bonus);
        }
    } else if (defi.type === 'number') {
        if (Array.isArray(defi.rubis)) {
            // Plusieurs places (ex : podium)
            defi.rubis.forEach((val, idx) => {
                const label = document.createElement('label');
                label.textContent = defi.label[idx] + ` :`;
                const input = document.createElement('input');
                input.type = 'number';
                input.min = 0;
                input.value = 0;
                input.id = `${defi.id}-${idx}`;
                input.dataset.cat = catIndex;
                input.dataset.defi = defiIndex;
                input.dataset.idx = idx;
                label.appendChild(input);
                block.appendChild(label);
            });
        } else {
            const input = document.createElement('input');
            input.type = 'number';
            input.min = 0;
            input.value = 0;
            input.id = defi.id;
            input.dataset.cat = catIndex;
            input.dataset.defi = defiIndex;
            block.appendChild(input);
        }
    } else if (defi.type === 'ecrivain') {
        // Saisie du nombre de RPG, RPG+, RPG++
        const labelRPG = document.createElement('label');
        labelRPG.textContent = 'RPG :';
        const inputRPG = document.createElement('input');
        inputRPG.type = 'number';
        inputRPG.min = 0;
        inputRPG.value = 0;
        inputRPG.id = `${defi.id}-rpg`;
        labelRPG.appendChild(inputRPG);
        block.appendChild(labelRPG);
        const labelRPGp = document.createElement('label');
        labelRPGp.textContent = 'RPG+ :';
        const inputRPGp = document.createElement('input');
        inputRPGp.type = 'number';
        inputRPGp.min = 0;
        inputRPGp.value = 0;
        inputRPGp.id = `${defi.id}-rpgp`;
        labelRPGp.appendChild(inputRPGp);
        block.appendChild(labelRPGp);
        const labelRPGpp = document.createElement('label');
        labelRPGpp.textContent = 'RPG++ :';
        const inputRPGpp = document.createElement('input');
        inputRPGpp.type = 'number';
        inputRPGpp.min = 0;
        inputRPGpp.value = 0;
        inputRPGpp.id = `${defi.id}-rpgpp`;
        labelRPGpp.appendChild(inputRPGpp);
        block.appendChild(labelRPGpp);
    }
    return block;
}

function renderForm() {
    form.innerHTML = '';
    defis.forEach((cat, catIndex) => {
        const catTitle = document.createElement('h2');
        catTitle.textContent = cat.categorie;
        form.appendChild(catTitle);
        cat.defis.forEach((defi, defiIndex) => {
            const block = createDefiBlock(defi, catIndex, defiIndex);
            form.appendChild(block);
        });
    });
}

function calculerRubis() {
    let total = 0;
    defis.forEach((cat, catIndex) => {
        cat.defis.forEach((defi, defiIndex) => {
            if (defi.type === 'checkbox') {
                const input = document.getElementById(defi.id);
                if (input && input.checked) {
                    total += defi.rubis;
                    if (defi.bonus) {
                        const bonusInput = document.getElementById(`${defi.id}-bonus`);
                        if (bonusInput && bonusInput.checked) {
                            total += defi.bonus;
                        }
                    }
                }
            } else if (defi.type === 'number') {
                if (Array.isArray(defi.rubis)) {
                    defi.rubis.forEach((val, idx) => {
                        const input = document.getElementById(`${defi.id}-${idx}`);
                        if (input) {
                            total += val * parseInt(input.value || 0);
                        }
                    });
                } else {
                    const input = document.getElementById(defi.id);
                    if (input) {
                        total += defi.rubis * parseInt(input.value || 0);
                    }
                }
            } else if (defi.type === 'ecrivain') {
                const nRPG = parseInt(document.getElementById(`${defi.id}-rpg`).value || 0);
                const nRPGp = parseInt(document.getElementById(`${defi.id}-rpgp`).value || 0);
                const nRPGpp = parseInt(document.getElementById(`${defi.id}-rpgpp`).value || 0);
                const totalPosts = nRPG + nRPGp + nRPGpp;
                if (totalPosts >= defi.seuil) {
                    total += defi.rubis;
                    // Bonus RPG+ et ++
                    total += nRPGp * 1 + nRPGpp * 2;
                }
            }
        });
    });
    totalRubisElem.textContent = total;
}

function addListeners() {
    form.addEventListener('input', calculerRubis);
    form.addEventListener('change', calculerRubis);
    document.getElementById('reset-btn').addEventListener('click', () => {
        form.reset();
        calculerRubis();
    });
}

renderForm();

// Ajout du bouton Valider
function getSelectedActivities() {
    let activites = [];
    defis.forEach((cat) => {
        cat.defis.forEach((defi) => {
            if (defi.type === 'checkbox') {
                const input = document.getElementById(defi.id);
                if (input && input.checked) {
                    let rubis = defi.rubis;
                    let nom = defi.titre;
                    if (defi.bonus) {
                        const bonusInput = document.getElementById(`${defi.id}-bonus`);
                        if (bonusInput && bonusInput.checked) {
                            rubis += defi.bonus;
                            nom += ' (+bonus)';
                        }
                    }
                    activites.push({ nom, rubis });
                }
            } else if (defi.type === 'number') {
                if (Array.isArray(defi.rubis)) {
                    defi.rubis.forEach((val, idx) => {
                        const input = document.getElementById(`${defi.id}-${idx}`);
                        if (input && parseInt(input.value) > 0) {
                            activites.push({ nom: `${defi.titre} - ${defi.label[idx]}`, rubis: val * parseInt(input.value) });
                        }
                    });
                } else {
                    const input = document.getElementById(defi.id);
                    if (input && parseInt(input.value) > 0) {
                        activites.push({ nom: defi.titre, rubis: defi.rubis * parseInt(input.value) });
                    }
                }
            } else if (defi.type === 'ecrivain') {
                const nRPG = parseInt(document.getElementById(`${defi.id}-rpg`).value || 0);
                const nRPGp = parseInt(document.getElementById(`${defi.id}-rpgp`).value || 0);
                const nRPGpp = parseInt(document.getElementById(`${defi.id}-rpgpp`).value || 0);
                const totalPosts = nRPG + nRPGp + nRPGpp;
                if (totalPosts >= defi.seuil) {
                    let rubis = defi.rubis + nRPGp * 1 + nRPGpp * 2;
                    let nom = `${defi.titre} (${nRPG} RPG, ${nRPGp} RPG+, ${nRPGpp} RPG++)`;
                    activites.push({ nom, rubis });
                }
            }
        });
    });
    return activites;
}

function getTotalRubis(activites) {
    return activites.reduce((acc, act) => acc + act.rubis, 0);
}

function onValider() {
    const activites = getSelectedActivities();
    const total = getTotalRubis(activites);
    // Stocker dans localStorage
    localStorage.setItem('rubisResult', JSON.stringify({ activites, total }));
    window.location.href = 'resultat.html';
}

function addListenersV2() {
    form.addEventListener('input', calculerRubis);
    form.addEventListener('change', calculerRubis);
    document.getElementById('reset-btn').addEventListener('click', () => {
        form.reset();
        calculerRubis();
    });
    document.getElementById('valider-btn').addEventListener('click', onValider);
}

addListenersV2();
calculerRubis();
