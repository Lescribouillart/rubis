// validform.js

// Récupère les données transmises via l'URL (localStorage ou query string)
function getRubisData() {
    // On utilise localStorage pour la simplicité
    try {
        const data = localStorage.getItem('rubisResult');
        if (data) return JSON.parse(data);
    } catch (e) {}
    return null;
}

function formatResult(data, mode) {
    if (!data || !data.activites) return '';
    let res = '';
    if (mode === 'bbcode') {
        res += `[b]Résumé des activités et rubis obtenus[/b]\n\n`;
        data.activites.forEach(act => {
            res += `• [b]${act.nom}[/b] : ${act.rubis} rubis\n`;
        });
        res += `\n[b]Total : ${data.total} rubis[/b]`;
    } else {
        res += `Résumé des activités et rubis obtenus\n\n`;
        data.activites.forEach(act => {
            res += `• ${act.nom} : ${act.rubis} rubis\n`;
        });
        res += `\nTotal : ${data.total} rubis`;
    }
    return res;
}

function updateResult() {
    const data = getRubisData();
    const mode = document.querySelector('input[name="format"]:checked').value;
    document.getElementById('resultat').value = formatResult(data, mode);
}

document.addEventListener('DOMContentLoaded', function() {
    updateResult();
    document.querySelectorAll('input[name="format"]').forEach(radio => {
        radio.addEventListener('change', updateResult);
    });
    document.getElementById('copy-btn').addEventListener('click', function() {
        document.getElementById('resultat').select();
        document.execCommand('copy');
    });
});