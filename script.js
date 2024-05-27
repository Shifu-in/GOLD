let score = 0;

Telegram.WebApp.ready();

function tapMiner() {
    score += 10;
    document.getElementById('score').innerText = `GOLD: ${score}`;
    showGoldAnimation();
}

function showGoldAnimation() {
    const animation = document.getElementById('gold-animation');
    animation.style.display = 'block';
    setTimeout(() => {
        animation.style.display = 'none';
    }, 1000);
}

function startGame() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
}

function showMiners() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('miners-screen').style.display = 'block';
    loadMiners();
}

function showSettings() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'block';
}

function showBoost() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('boost-screen').style.display = 'block';
}

function backToMenu() {
    document.getElementById('miners-screen').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'none';
    document.getElementById('boost-screen').style.display = 'none';
    document.getElementById('main-menu').style.display = 'flex';
}

function saveSettings() {
    const nickname = document.getElementById('nickname').value;
    alert(`Nickname saved: ${nickname}`);
    backToMenu();
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
}

function selectBoost(boostNumber) {
    alert(`Boost ${boostNumber} selected`);
    backToMenu();
}

window.onload = () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-menu').style.display = 'flex';
    }, 5000);
};
