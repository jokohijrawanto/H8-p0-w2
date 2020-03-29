function balikKata(str) {
 var currentString = str;
 var newString = '';
for (let i = str.length - 1; i >= 0; i--) {
  newString = newString + currentString[i];
 }
 
 return newString;
}
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS