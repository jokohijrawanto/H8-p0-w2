/*1.let's form sentence

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log('javascript ' + second + ' awesome ' + fourth + ' I ' + sixth + ' it! ');

*/
/*2. Index Accessing - 1 by 1

var word = 'wow JavaScript is so cool';
var FirstWord = word[0] + word[1] + word[2];
var secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13]; 
var thirdWord = word[15]+word[16];
var fourthWord = word[18]+word[19];
var fifthWord = word[21]+word[22]+word[23]+word[24];

console.log('First Word: ' + FirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

*/
/*3. Breaking Sentence (Again) using Substring

var word = 'wow JavaScript is so cool';
var FirstWord = word.substr(0, 3);
var secondWord = word.substr(4,10);
var thirdWord = word.substr(15, 2);
var fourthWord = word.substr(18, 2);
var fifthWord = word.substr(21, 4);

console.log('First Word: ' + FirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

*/
/*4. Breaking Sentence (yet Again) and Count Each Length

var word = 'wow JavaScript is so cool';
var FirstWord = word.substr(0, 3);
var secondWord = word.substr(4,10);
var thirdWord = word.substr(15, 2);
var fourthWord = word.substr(18, 2);
var fifthWord = word.substr(21, 4);

var firstWordLength = 3;
var secondWordLength = 10;
var thirdWordlength = 2;
var fourthWordLength = 2;
var fifthWordLeng = 4;


console.log('First Word: ' + FirstWord +', with length: '+ firstWordLength);
console.log('Second Word: ' + secondWord +', with length: '+ secondWordLength);
console.log('Third Word: ' + thirdWord +', with length: '+ thirdWordlength);
console.log('Fourth Word: ' + fourthWord +', with length: '+ fourthWordLength);
console.log('Fifth Word: ' + fifthWord +', with length: '+ fifthWordLeng);
*/