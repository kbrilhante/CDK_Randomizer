function roll() {
    const min = Number(document.querySelector("#min").value);
    const max = Number(document.querySelector("#max").value);
    if (min && max) {
        const dice = randomInt(min, max);
        document.querySelector("#result").textContent = dice;
    }
}

function array() {
    const min = Number(document.querySelector("#min").value);
    const max = Number(document.querySelector("#max").value);
    const rep = document.querySelector("#repetition").checked;
    let len = Number(document.querySelector("#length").value);
    const interval = Math.abs(max - min) + 1;
    if (len <= 0 || len > interval) {
        len = interval;
        document.querySelector("#length").value = len;
    }
    console.log(rep);
    let numbers;
    if (rep) {
        numbers = [];
        for (let i = 0; i < len; i++) {
            numbers.push(randomInt(min, max));
        }
    } else {
        numbers = new Set();
        while (numbers.size < len) {
            const dice = randomInt(min, max);
            numbers.add(dice);
        }
        numbers = Array.from(numbers);
    }
    document.querySelector("#arrayResult").textContent = "[" + numbers.join(", ") + "]";
}

function sequence() {
    const numbers = new Set();
    const min = Number(document.querySelector("#min").value);
    const max = Number(document.querySelector("#max").value);
    const interval = Math.abs(max - min) + 1;
    console.log(interval)
    while (numbers.size < interval) {
        const dice = randomInt(min, max);
        numbers.add(dice);
        console.log(dice, numbers.size);
    }
    writeList(Array.from(numbers), "#sequence");
}

function list() {
    const orderedList = document.querySelector("#list").value.split("\n");
    const numbers = new Set();
    while (numbers.size < orderedList.length) {
        const dice = randomInt(0, orderedList.length - 1);
        numbers.add(dice);
    }
    let randomArray = [];
    for (index of numbers) {
        randomArray.push(orderedList[index]);
    }
    writeList(randomArray, "#divList");
}

function writeList(list, output) {
    document.querySelector(output).innerHTML = "";
    for (number of list) {
        const h2 = document.createElement('h2');
        h2.textContent = number;
        document.querySelector(output).appendChild(h2);
    }
}

function randomInt(min, max) {
    let a = min < max ? min : max;
    a = Math.floor(a);

    let b = max > min ? max : min;
    b = Math.floor(b);

    const interval = b - a + 1;
    const dice = Math.floor(Math.random() * interval) + a;
    return dice;
}