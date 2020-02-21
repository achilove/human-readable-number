module.exports = function toReadable(number) {
    const base_strings = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };

    if (number === 0) return "zero";

    let floored = Math.floor(number / 100)
    const hundreds_string = base_strings[floored] ? `${base_strings[floored]} hundred`: "";

    let isTen = number % 100;
    let _isTen = number % 100 >= 10 && number % 100 <= 20;
    const tenths = _isTen ? isTen : Math.floor(isTen / 10) * 10;
    const tenths_string = tenths ? ` ${base_strings[tenths]}` : "";

    const ones = _isTen ? 0 : isTen % 10;
    const ones_string = ones ? ` ${base_strings[ones]}` : "";

    return `${hundreds_string}${tenths_string}${ones_string}`.trim();
}
