const art = require("./asciiArt");

function initTopIntro() {
    console.clear();
    console.log(art.gavel);
    console.log("Welcome to the secret auction program.");
}

function determineWinner(bidders) {
    let winnerIndex = 0;
    for (let i = 1; i < bidders.length; i++) {
        if (bidders[i].Bid > bidders[winnerIndex].Bid) {
            winnerIndex = i;
        }
    }
    return bidders[winnerIndex];
}

function declareWinner(bidder) {
    
    console.clear();
    console.log(`The winner is ${bidder.Name} with a bid of $${bidder.Bid}.`);
}

exports.initTopIntro = initTopIntro;
exports.determineWinner = determineWinner;
exports.declareWinner = declareWinner;