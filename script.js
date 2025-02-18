let tg = window.Telegram.WebApp;
tg.expand();

async function fetchText() {
    let userData = tg.initDataUnsafe.user;
    if (!userData) return;

    let userId = userData.id;
    let response = await fetch(`https://твой_сервер/get_text/${userId}`);
    let text = await response.text();
    document.getElementById("textInput").value = text;
}

fetchText();

function sendText() {
    let text = document.getElementById("textInput").value;
    tg.sendData(text);
    tg.close();
}