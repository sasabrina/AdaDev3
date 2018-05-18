class Camion{

    constructor (patente="", ejes=""){
        this._patente= patente;
        this._ejes= ejes;
    }
    set patente(value){
        this._patente= value;
    }
    set ejes(value){
        this._ejes= value;
    }

    get patente(){
        return this._patente;
    }
    get ejes(){
        return this._ejes;
    }
    get velocidad(){
        return this._velocidad;
    }

    /*
    * 
    
    
    acelerar(){
        this._velocidad+=aceleracion;
    }
    frenar(){
        this.velocidad= 0;
    }
    */
}