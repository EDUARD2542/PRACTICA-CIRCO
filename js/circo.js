export default class Cl_circo{
    constructor (){
        this.contEspectadores = 0;
        this.acEntradas =0;
        this.contNinos = 0;
        this.contAdolescentes = 0;
        this.contAdultos = 0;
    }

procesarEspectador(e){
    this.contEspectadores++;
    this.acEntradas+= e.pagoEspectador();
    if(e.edad <= 12){
        this.contNinos++;
        }
    if(e.edad > 12 && e.edad < 18){
        this.contAdolescentes++;
        }
    if(e.edad >= 18){
        this.contAdultos++;
        }
    } 
    
    promedioVentas(){
        return this.acEntradas / this.contEspectadores;
    }

    maximoAsistidor(){
        if(this.contNinos > this.contAdolescentes){
            return "   Ninos";
        }
        else if (this.contNinos < this.contAdolescentes){
            return "   Adolescentes";
        }
        else if(this.contNinos == this.contAdolescentes){
            return "Iguales";
        }
    }

    porcentajeAsistentesNinos(){
        return (this.contNinos / this.contEspectadores) * 100;
    }

}