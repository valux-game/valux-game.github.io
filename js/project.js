let games = [];

fetch("config/games.json")
    .then((response) => response.json())
    .then((data) => {
        games = data;
        const container = document.getElementById("game-container");
        data.forEach((project) => {
            const game = document.createElement("a");
            game.href = project.link;
            game.className = "game-link container";
            game.innerHTML = `
                <div class="game-tile">
                    <img class="game-icon" src="${project.imgSrc}" alt="icon" />
                    <p class="game-title">${project.title}</p>
                </div>`;
            container.appendChild(game);
        });
        document.getElementById("loader").style.display = "none";
    })
    .catch((error) => console.error("Error:", error));

function searchGames() {
    const input = document.getElementById("search");
    const filter = input.value.toUpperCase();
    const container = document.getElementById("game-container");
    container.innerHTML = "";
    games
        .filter((game) => game.title.toUpperCase().includes(filter))
        .forEach((project) => {
            const game = document.createElement("a");
            game.href = project.link;
            game.className = "game-link container";
            game.innerHTML = `
                <div class="game-tile">
                    <img class="game-icon" src="${project.imgSrc}" alt="icon" loading="lazy" />
                    <p class="game-title">${project.title}</p>
                </div>`;
            container.appendChild(game);
        });
}

const backToTopButton = document.getElementById('back-to-top');
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
