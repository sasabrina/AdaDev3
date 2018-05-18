class Auto{
    
    constructor (nombre="",dni="",email="",vehiculo="",modelo="",patente=""){
        this._nombre= nombre;
        this._dni= dni;
        this._email= email;
        this._vehiculo= vehiculo;
        this._modelo= modelo;
        this._patente= patente;
    }
    //setters y getters
    set nombre(value){
        this._nombre= value;
    }
    set dni(value){
        this._dni= value;
    }
    set email(value){
        this._email= value;
    }
    set vehiculo(value){
        this._vehiculo= value;
    }
    set modelo(value){
        this._modelo= value;
    }
    set patente(value){
        this._patente= value;
    }

    get nombre(){
        return this._nombre;
    }
    get dni(){
        return this._dni;
    }
    get email(){
        return this._email;
    }
    get vehiculo(){
        return this._vehiculo;
    }
    get modelo(){
        return this._modelo;
    }
    get patente(){
        return this._patente;
    }
}