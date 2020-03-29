var date = new Date();
var tahun = date.getFullYear(1900 - 2200);
var bulan = date.getMonth(1 - 12);
var tanggal = date.getDate(1 - 31);

switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "Tanggal: " + ", " + tanggal + " " + bulan + " " + tahun;
console.log(tampilTanggal);