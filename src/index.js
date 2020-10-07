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
  let encodeSymbols = [''];

  for (let j = 0, i = 0; i < expr.length; i++) {
    if (i !== 0 && i % 10 === 0) {
      j++
      encodeSymbols[j] = '';
    };
    encodeSymbols[j] += expr[i];    
  }
  
  encodeSymbols = encodeSymbols    
    .map(item => {
      if (item[0] === '*') return ' ';

      let morseString = '';
      for (let i = 0; i < item.length; i += 2) {  
        if (item[i] + item[i + 1] === '10') {
          morseString += '.';
        } else if (item[i] + item[i + 1] === '11') {
          morseString += '-';
        } else continue;
      }

      return MORSE_TABLE[morseString];
    });
  
  return encodeSymbols.join('');
}

module.exports = {
  decode
}