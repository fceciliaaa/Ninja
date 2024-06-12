
class ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad =3;
        this.fuerza=3;
    }
    sayName(){
        console.log(`Nombre ninja: ${this.nombre}`);
    }
    showStats(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Fuerza: ${this.fuerza}`);
        console.log(`Salud: ${this.salud}`);
    }
    drinkSake(){
        this.salud +=10;
        console.log(`Salud del ninja después de beber el sake: ${this.salud}`);

    }
}

const ninja1 = new ninja ("Zeus");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
