const prompt = require('prompt-sync')();

function GenerateOrderId() {
    return Math.floor(100000 + Math.random() * 9000000);
}

function GenerateOrderDate() {
    const date = new Date();
    return date.toISOString().replace('T', ' ').split('.')[0];
}

function input (message){
    return prompt(message);
 }

module.exports = {
    GenerateOrderId,
    GenerateOrderDate,
    input
};