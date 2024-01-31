const userInputString = prompt("Please enter the flavors you would like:");

const stringArray = userInputString.split(",");

const froyoflavors = {
    chocolate: 1,
    strawberry: 1,
    vanilla: 1,
    coffee: 1,
    mint: 1,
}

function orderTally(flavors) {
    let tally = 0;
    for (const froyoflavors in flavors) {
        tally += flavors;
    }
    return tally;
}