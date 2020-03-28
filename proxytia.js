var nama=prompt('nama harus di isi:','');
var peran=prompt('Halo, '+nama+'. Silahkan pilih peranmu! (Ksatria, Tabib, Penyihir)');

if(peran == "Ksatria"){
    console.log('"Selamat datang di dunia Proxytia, '+nama+'"');
    console.log('"Halo Ksatria '+nama+ ', kamu dapat menyerang dengan senjatamu!"');
}else if(peran == "Tabib"){
  console.log('"Selamat datang di dunia Proxytia, '+nama+'"');
  console.log('"Halo Tabib ' +nama+ ', kamu akan membantu temanmu yang terluka."');
}else {
  console.log('"Selamat Datang di dunia Proxytia, '+nama+'"');
  console.log('"Halo penyihir '+nama+', Ciptakan keajaiban yang membantu kemenanganmu!"');

}