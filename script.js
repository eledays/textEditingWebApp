let tg = window.Telegram.WebApp; 
tg.expand(); // Растянуть на весь экран

function sendText() {
    let text = document.getElementById("textInput").value;
    tg.sendData(text); // Отправка текста обратно в бота
    tg.close(); // Закрытие Web App
}