// let age : number = 12345;
// let nama : string = '12345'


// let siswa : {
//     nama: string,
//     umur: number,
//     ispelajar: boolean,
//     alamat?: string
// } 

// siswa = {
//     nama: "rizky",
//     umur: 17,
//     ispelajar: false,
//     alamat: "jakarta"
// };

// siswa = {
//     nama: "danif",
//     umur: 15,
//     ispelajar: true,
// };

// // intrface untuk medefenisikan tipe data object

// interface produck {
//     id : number
//     name : string
//     price : number
//     note? : string
//     ispremium : boolean
// }

// const prdouct1 : produck = {
//     id : 1,
//     name : 'hp',
//     price : 40000,
//     ispremium : false,
//     note : 'bagus'
// }
// const produk2 : produck = {
//     id : 1,
//     name : 'hp',
//     price : 40000,
//     ispremium : false,
//     note : 'bagus'
// }

// // nested object

// interface produckDetail1 {
//     maufacture : string,
//     year : number
// }

// interface produkitem {
//     id : number,
//     produkName : string,
//     price : number,
//     detail : produckDetail1,
// }


// //array

// const a = [1,2,3,4,5]

// //

// let b : number[]
// b = [1,2,3,4,5]

// let c : string[]
// c = ['faris', 'akbar', 'faisal']

// let d : (string | number | boolean)[]
// d = [1, 'satu', 2, false];

// let e : {nama: string; umur: number}[] =[
//     {nama: "akbar", umur:17},
//     {nama: "akbar", umur:17},
// ]

// //soal 1

// let dataDiri =[{
//     nama: "fulan",
//     alamat: "jonggol",
//     umur: 27,

//     status :[{
//         issekolah?:false,
//     }],
// }]
//  //jawaban 1


//  interface dataDiri {
//     nama: string,
//     alamat: string,
//     umur: number
//     status: {
//         issekolah?: boolean
//     }
//  }[]

// function hitungvolumebalok(panjang : number, lebar : number, tinggi : number) {
//     const balok = panjang * lebar * tinggi;
//     return balok    
// }

// function pembagian({ a, b, c = 1 }: { a: number, b: number, c?: number }) {
//     const hasil = (a / b) * c;
//     return hasil
// }

// const kali1 = pembagian({ a: 5, b: 10, c: 2 });
// const kali2 = pembagian({ a: 5, b: 10 });

// console.log("kali1", kali1);
// console.log("kali2", kali2);

// interface SatuInterface {
//     a: number;
//     b: number;
// }

// function satu({ a, b }: SatuInterface): void { //void untuk mematikan return
//     console.log(a, b);
// }

// function dua({ a, b }: SatuInterface): number {
//     return 100
// }

// function tiga({ a, b }: SatuInterface): boolean {
//     return true
// }

// function empat({ a, b }: SatuInterface): string {
//     return "yayayaayayayayayayya"
// }

// soal

// interface satuInterface {
//     a: string;
//     b: string;
// }

// const checkNumberInArray = (array: number[], number: number): boolean => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {
//             return true;
//         }
//     }
//     return false;
// };

// // Contoh penggunaan:
// const arr = [1, 2, 3, 4, 5];
// const num = 3;

// const result = checkNumberInArray(arr, num);
// console.log(result); // Output: true





// soal 2


// class Profile {
//     user: {
//         Username: string,
//         password: string
//     }[]

//     constructor() {
//         this.user = [{
//             Username: "admin",
//             password: "admin"
//         },
//         {
//             Username: "user",
//             password: "user"
//         },
//         {
//             Username: "admin2",
//             password: "admin2"
//         },
//         {
//             Username: "rahsya",
//             password: "radis"
//         }]
//     }

//     login({ username, password }: { username: string, password: string }) {
//         const user = this.user.find(u => u.Username === username && u.password === password);
//         if (user) {
//             return {
//                 status: "berhasil",
//                 msg: "berhasil login"
//             };
//         } else {
//             return {
//                 status: "gagal",
//                 msg: "username dan password berbeda"
//             };
//         }
//     }
// }

// const profile = new Profile();
// console.log(profile.login({ username: "admin", password: "admin" })); 
// console.log(profile.login({ username: "user", password: "user" }));


