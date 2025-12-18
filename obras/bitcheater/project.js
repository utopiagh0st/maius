// @ts-nocheck
//1. Deposit some money
//2. How many lines will the goober bet on
//3. Collect a bet amount
//4. Spin slot machine
//5. Check if lucky
//6. Give prize or laugh
//7. AGAIN

const prompt = require("prompt-sync")();

const depositMoney = () => {
    const depositAmount = Number(prompt("Enter an amount: "));
    if (isNaN(depositAmount) || depositAmount <= 0) {
        console.log("Invalid, try again.")
        depositMoney();
    } else {
        return depositAmount;
    }
}

const chooseNumberOfLines = () => {
    const numberOfLines = Number(prompt("How many lines? (1-3): "));
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
        console.log("Invalid, try again.")
        chooseNumberOfLines();
    } else {
        return numberOfLines;
    }
}

const getBet = (balance, numberOfLines) => {
    const bet = Number(prompt("How much to bet per line?: "));
    if (isNaN(bet) || bet <= 0 || bet > balance/numberOfLines) {
        console.log("Invalid, try again.")
        getBet(balance);
    } else {
        return numberOfLines;
    }
}

const ROWS = 3;
const COLUMNS = 3;
const SYMBOLS_AMOUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}
const SYMBOLS_MULT = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}
const SYMBOLS = ["A","B","C","D"]

const spin = () => {
    const symbolsBag = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_AMOUNT)) {
        for (let i = 0; i < count; i++) {
            symbolsBag.push(symbol);
        }
    }
    
    const reels = [];
    for (let i = 0; i < COLUMNS; i++) {
        reels.push([]);
        const reelSymbols = [...symbolsBag];
        for (let j = 0; j < ROWS; j++) {
            reels[i][j] = reelSymbols.splice(Math.floor(Math.random() * reelSymbols.length), 1);
        }
    }

    return reels;
}

const checkWin = () => {
    
}

const reels = spin();

let balance = depositMoney();
const numberOfLines = chooseNumberOfLines();
const bet = getBet(balance, numberOfLines);