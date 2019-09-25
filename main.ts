export class Bar {
 nombre: string; //atributo
 capacidad:number;
 constructor(nom:string,cap:number){
     this.nombre=nom;
     this.capacidad=cap;
 }

}
export class BarMan{
    nombre:string;
    apellido:string;
    constructor(nom:string,ap:string){
        this.nombre=nom;
        this. apellido =ap;
    }

}
export class trago{
    nombre:string;
    color:string;
    cantidad:number;
    constructor(nom:string,col:string,cant:number){
        this.nombre=nom;
        this.color=col;
        this.cantidad=cant;
    }
}
let bar1:Bar=new Bar("nueva era",50);
let bar2:Bar=new Bar("el patio",150);



console.log(bar1);
console.log(bar2);