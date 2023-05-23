const Mahasiswa = {
  nama: "Anggi Permana",
  nim: "02032111020",
  email: "anggipermana490@gmail.com",
};

let { nama, nim, email } = Mahasiswa;

console.log(nama);
console.log(nim);
console.log(email);

let arr1 = ["Bagas", "Kurniawan"];
let arr2 = ["Riyan", "Fadli"];
let arr3 = ["Dede", "Agus"];

const hasil = [...arr1, ...arr2, ...arr3];

console.log(hasil);
