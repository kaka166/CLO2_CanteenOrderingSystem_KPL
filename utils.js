const prompt = require('prompt-sync')();

function generateOrderId() {
    return Math.floor(100000 + Math.random() * 9000000);
}

function generateOrderDate() {
    const date = new Date();
    return date.toISOString().replace('T', ' ').split('.')[0];
}

function input (message){
    return prompt(message);
 }

module.exports = {
    generateOrderId,
    generateOrderDate,
    input
};