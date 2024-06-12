
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
        console.log(`Salud: ${this.salud}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Fuerza: ${this.fuerza}`);
    }
    drinkSake(){
        this.salud +=10;
    }
}

const ninja1 = new ninja ("Zeus");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


class sensei extends ninja{
    constructor (nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Puedes fallar en lo que no quieres. Así que también podrías tener la oportunidad de hacer lo que amas")
    }
}

const superSensei = new sensei ("Master Zeus");
superSensei.speakWisdom();
superSensei.showStats();