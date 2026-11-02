

async function getTeam() {
    try {
        const searchTerm = document.getElementById("search").value
        console.log(searchTerm)
        const url = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=" + searchTerm;

        const response = await fetch(url)

        const json = await response.json();

        console.log(JSON.stringify(json));

        const teamHolder = document.getElementById("teamHolder");

        teamHolder.innerHTML = "";

        for (team of json.teams) {
            let divContainer = document.createElement('div');
            divContainer.classList.add("card")

            let card = document.createElement('div')
            card.classList.add('container')
            let titleHeader = document.createElement("h3");
            titleHeader.textContent = team.strLeague + ": Founded in " + team.intFormedYear + ": " + team.strStadium;
            let img = document.createElement('img');
            img.src = team.strBadge;

            card.appendChild(titleHeader)

            divContainer.appendChild(img);
            divContainer.appendChild(card)

            teamHolder.appendChild(divContainer)
        }


    }
    catch (error) {
        console.log(error)
    }
}