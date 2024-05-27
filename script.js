let score = 0;

Telegram.WebApp.ready();

console.log("Telegram Web App initialized.");

function tapMiner() {
    score += 10;
    document.getElementById('score').innerText = `GOLD: ${score}`;
    showGoldAnimation();
    console.log("Miner tapped. Score: " + score);
}

function showGoldAnimation() {
    const animation = document.getElementById('gold-animation');
    animation.style.display = 'block';
    setTimeout(() => {
        animation.style.display = 'none';
    }, 1000);
    console.log("Gold animation shown.");
}

function startGame() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
    console.log("Game started.");
}

function showMiners() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('miners-screen').style.display = 'block';
    loadMiners();
    console.log("Miners screen shown.");
}

function showSettings() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'block';
    console.log("Settings screen shown.");
}

function showBoost() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('boost-screen').style.display = 'block';
    console.log("Boost screen shown.");
}

function backToMenu() {
    document.getElementById('miners-screen').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'none';
    document.getElementById('boost-screen').style.display = 'none';
    document.getElementById('main-menu').style.display = 'flex';
    console.log("Back to main menu.");
}

function saveSettings() {
    const nickname = document.getElementById('nickname').value;
    alert(`Nickname saved: ${nickname}`);
    backToMenu();
    console.log("Settings saved: " + nickname);
}

function loadMiners() {
    const minersList = document.getElementById('miners-list');
    minersList.innerHTML = '';
    const miners = ['Friend1', 'Friend2', 'Friend3'];
    miners.forEach(miner => {
        const listItem = document.createElement('li');
        listItem.textContent = miner;
        minersList.appendChild(listItem);
    });
    console.log("Miners loaded.");
}

function selectBoost(boostNumber) {
    alert(`Boost ${boostNumber} selected`);
    backToMenu();
    console.log("Boost selected: " + boostNumber);
}

window.onload = () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-menu').style.display = 'flex';
        console.log("Loading complete, showing main menu.");
    }, 5000);
};
