const prompt = require('prompt-sync')();

function generateOrderId() {
    return Math.floor(100000 + Math.random() * 9000000);
}

function generateOrderDate() {
    const date = new Date();
    date.setHours(date.getHours());

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

function input (message){
    return prompt(message);
 }

module.exports = {
    generateOrderId,
    generateOrderDate,
    input
};