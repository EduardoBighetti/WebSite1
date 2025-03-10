document.getElementById('changeContent').addEventListener('click', function() {
    const newTeams = [
        { name: 'Internacional', description: 'Time gaúcho com grandes conquistas.' },
        { name: 'Atlético Mineiro', description: 'Campeão do Brasileirão 2021.' },
        { name: 'Corinthians', description: 'Time paulista conhecido pela sua fiel torcida.' },
        { name: 'Redbull bragantino', description: 'Equipe recente, com um projeto moderno e investimentos visando o crescimento no futebol brasileiro e internacional.' },
        { name: 'Cruzeiro', description: 'Conhecido por sua história vitoriosa, com títulos no Campeonato Brasileiro e duas conquistas da Libertadores.'},
    ];

    const teamList = document.querySelector('.team-list');
    
    newTeams.forEach(team => {
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('team');
        teamDiv.innerHTML = `<h2>${team.name}</h2><p>${team.description}</p>`;
        teamList.appendChild(teamDiv);
    });
});
