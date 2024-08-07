class smartphone {
    color: string
    brand: string
    model: string
    isTKDN: boolean
    constructor(color: string, brand: string, model: string,) {
        this.color = color
        this.brand = brand
        this.model = model
        this.isTKDN = true
    }

    charging(): void {
        console.log(`smartphone ${this.model} lagi di cas`);
    }
}


const samsung = new smartphone("black", "samsung", "s22");
console.log('samsung', samsung);

// class Android extends smartphone {

//     splitscreen() {
//         console.log('split screen berhasil');
//     }
// }

// const xiaomi = new Android("black", "xiaomi", "11");
// console.log('xiaomi', xiaomi);
// xiaomi.charging()
// xiaomi.splitscreen()


class Ios extends smartphone {
    airDrop() {
        console.log('air drop berhasil');
    }
}


// polymorphism

class Android extends smartphone {
    layar: number;

    constructor(color: string, brand: string, model: string, layar: number) {
        super(color, brand, model)
        super(color, brand, model)
        this.layar = layar

    }

    splitscreen() {
        console.log('split screen berhasil');
    }

    showbrand() {
        console.log(`brand hanphone ini adalah ${this.brand} dan ukuran layarnya ${this.layar}`);
    }

    charging(): void {
        super.charging()
        console.log(`smartphone ${this.model} lagi di cas`);
    }
}

const xiaomi = new Android("black", "xiaomi", "11", 6);
console.log('xiaomi', xiaomi);
xiaomi.splitscreen()
xiaomi.showbrand()
xiaomi.charging()
