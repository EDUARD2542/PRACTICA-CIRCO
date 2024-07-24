export default class Cl_suscriptor{
    constructor(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get nombre (){
        return this._nombre;
    }
    set edad (edad){
        this._edad = +edad;
    }
    get edad (){
        return this._edad;
    }
    set sexo (sexo){
        this._sexo = sexo;
    }
    get sexo (){
        return this._sexo;
    }

    pagoEspectador(){
        if (this.edad < 12){
            return 15 - (15 * 0.10);
        }
        else if (this.edad >=12 && this.edad <18) {
            return 15- (15 * 0.10);
        }
        else {
            return 15;
        }
    }
}