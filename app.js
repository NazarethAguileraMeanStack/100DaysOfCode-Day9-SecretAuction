const prompt = require("prompt-sync")({ sigint: true });
const gameplay = require("./gameplayFunctions");
const Bidder = require("./Bidder");

function main() {
    gameplay.initTopIntro();
    let bidders = [];
    
    while (true) {
        let name = prompt("What is your name?: ");
        let bid = prompt("What is your bid?: $");
        let bidder = new Bidder(name, Number(bid));
        bidders.push(bidder);
        let continueAuction = prompt("Are there any other bidders? Type 'yes' or 'no': ");
        continueAuction = continueAuction.toLowerCase();
        
        if (continueAuction === "yes" || continueAuction === "no") {
            if (continueAuction === "yes") {
                console.clear();
            } else {
                break;
            }
        } else {
            console.log("Invalid Command");
            break;
        }
    }

    let winner = gameplay.determineWinner(bidders);
    gameplay.declareWinner(winner);
}

main();

