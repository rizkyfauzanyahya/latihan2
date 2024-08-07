// soal 1
function minimal(a: number, b: number) {
    let luas = a * b
    let keliling = 2 * (a+b)
    return [luas, keliling]
}

const minimal1 = minimal(1, 2);
const minimal2 = minimal(3, 4);
const minimal3 = minimal(5, 6);

console.log(minimal1, minimal2, minimal3)

//soal 2
function power(a: number, b: number) {
    let result = Math.pow(a, b)
    return result
}

const power1 = power(2, 3);
const power2 = power(3, 4);
const power3 = power(5, 6); 

console.log(power1, power2, power3)

//soal 3
function penjumlahanbilangan(a: number[], b: string) {
    return a.reduce((acc, current) => acc + current)+b
}

const penjumlahanbilangan1 = penjumlahanbilangan([1, 2, 3, 4], "ganjil");
const penjumlahanbilangan2 = penjumlahanbilangan([5, 6, 7], "genap");
const penjumlahanbilangan3 = penjumlahanbilangan([1.,11], "ganjil");

console.log(penjumlahanbilangan1)
console.log(penjumlahanbilangan2)
console.log(penjumlahanbilangan3)

//soal 4

class Animal {
   name : string;
   age : number;
   isanimal : boolean;

   constructor(name : string, age : number, isanimal : boolean) {
       this.name = name
       this.age = age
       this.isanimal = isanimal
   }
}

//soal 5
class rebit extends Animal {
    constructor (name : string, age : number,) {
        super(name, age, true)
    }

    eat() {
        console.log(`${this.name} sedang makan` )
    }
}

//soal 6
class eagle extends Animal {
    
}