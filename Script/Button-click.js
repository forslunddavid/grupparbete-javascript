export{playButton}


// skapa referens till knappar och inputfält
const nameInput = document.querySelector(".player-name");
const playButton = document.querySelector("#button");
const playbutton2 = document.querySelector("#button");
const newGameButton = document.querySelector(".header-game-button");

// lägg till en eventlistener för att klicka på knappar

nameInput.addEventListener("keydown", function (event) {
    event.stopPropagation();
});

nameInput.addEventListener("input", function () {
    playButton.disabled = this.value === "";
});

newGameButton.addEventListener('click', () => {
        location.reload();
        return false;
    });

playbutton2.addEventListener("click", function () {
    // ta namnet från input och spara i Local Storage
    let newUserName = document.querySelector(".player-name").value;
    let currentUser = {
        name: newUserName,
        score: 0,
        result: "no game played",
        lastPlayed: new Date().getTime(),
    };

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    // välj alla divar med stil welcome
    const divs = document.querySelectorAll(".welcome");
    console.log("click", divs);
    // Dölj visa div

    divs.forEach(function (div) {
        div.classList.toggle("welcome-hidden");
    });
});

////////////////////////////////////////////////////////////////
const statistics = document.querySelector(".statistics");
let users = JSON.parse(localStorage.getItem("users")) || [];
users = users.map((user) => {
    if (!user.lastPlayed) {
        user.lastPlayed = new Date(0).getTime();
    }
    return user;
});

statistics.addEventListener("click", function () {
    // Skapa overlay och content
    const statisticsOverlay = document.createElement("div");
    statisticsOverlay.className = "overlay";
    const statisticsContent = document.createElement("section");
    statisticsContent.className = "statistics-content";

    // skapa Header
    const statisticsHeader = document.createElement("h2");
    statisticsHeader.className = "statistics-header";
    statisticsHeader.innerText = "Statistik";

    // skapa sorteringslänkar
    const statisticsSorterName = document.createElement("a");
    statisticsSorterName.className = "statistics-sorter";
    statisticsSorterName.href = "#";
    statisticsSorterName.innerText = "Senast";
    const statisticsSorterPoints = document.createElement("a");
    statisticsSorterPoints.className = "statistics-sorter";
    statisticsSorterPoints.href = "#";
    statisticsSorterPoints.innerText = "Poäng";

    // Skapa meny-section
    const menuSection = document.createElement("section");
    menuSection.className = "menu-section";

    // skapa ul och sortera på senaste
    let userList = document.createElement("ol");
    userList.className = "user-list";
    users.sort((a, b) => (a.lastPlayed > b.lastPlayed ? -1 : 1));
    users.forEach((user) => {
        let userItem = document.createElement("li");
        userItem.className = "user-item";
        userItem.textContent = `${user.name} - Score: ${user.score}, Result: ${user.result}`;
        userList.appendChild(userItem);
    });

    // lägg till element till content
    statisticsContent.appendChild(statisticsHeader);
    statisticsContent.appendChild(menuSection);
    menuSection.appendChild(statisticsSorterName);
    menuSection.appendChild(statisticsSorterPoints);
    statisticsContent.appendChild(userList);
    statisticsOverlay.appendChild(statisticsContent);
    document.body.appendChild(statisticsOverlay);

    // event listener för att släcka ner overlay
    statisticsOverlay.addEventListener("click", function (event) {
        if (event.target === statisticsOverlay) {
            statisticsOverlay.remove();
        }
    });

    // event listener för att sortera efter poäng
    statisticsSorterPoints.addEventListener("click", function (event) {
        event.preventDefault();
        users.sort((a, b) => (a.score > b.score ? 1 : -1)); // sortera efter poäng
        userList.innerHTML = "";
        users.forEach((user) => {
            let userItem = document.createElement("li");
            userItem.className = "user-item";
            userItem.textContent = `${user.name} - Score: ${user.score}, Result: ${user.result}`;
            userList.appendChild(userItem);
        });
    });

    // event listener för att sortera efter senaste
    statisticsSorterName.addEventListener("click", function (event) {
        event.preventDefault();
        users.sort((a, b) => (a.lastPlayed > b.lastPlayed ? -1 : 1));
        userList.innerHTML = "";
        users.forEach((user) => {
            let userItem = document.createElement("li");
            userItem.className = "user-item";
            userItem.textContent = `${user.name} - Score: ${user.score}, Result: ${user.result}`;
            userList.appendChild(userItem);
        });
    });
});


