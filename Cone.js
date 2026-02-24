export default class Cone{
    constructor (raio,altura){
        this.raio = raio
        altura.altura = altura
    }
    calcularArea(){
        let area = 0.0
        area = Math.PI * this.raio * this.raio
    }
}