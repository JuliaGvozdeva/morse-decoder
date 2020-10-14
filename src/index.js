const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let varb = "";
    let answer = "";
    
    for (let i = 0; i < expr.length; i+=10){ 
        let str = "";
        varb = expr.slice(i,i+10);
        if (varb === "**********") {
            answer += " ";
            continue;
        }
        for (let j = 0; j < varb.length; j+=2) {
            if (varb.slice(j, j+2) === "10"){
                str += '.';
            } else if (varb.slice(j, j+2) === "11") {
                str += '-';
            }
        }
        answer += MORSE_TABLE[str];
    }
    return answer;
}

// decode("0000001111**********0000000010");
module.exports = {
    decode
}