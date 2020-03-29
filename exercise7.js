for(var rows1 = 5; rows1 > 0; rows1--){
  console.log('*'); //Menyusun Barisan Bintang row1=5
}

var star = '*';
var rows2 = 5;
while(rows2 > 0){
  while(star.length < rows2){
    star += '*';
    star.length ++;
  }
  console.log(star);  //Menyusun Barisan Bintang Dengan Nested Looping row2=5 menggunakan while
  rows2--;              
}

var star = '*';
var rows3 = 5;
while(rows3 > 0){
  console.log(star);  //Menyusun Barisan Tangga Bintang Dengan Nested Looping dengan while
  star += '*';
  rows3--;
}
