class Persona{
    constructor(nombre, apellido, fecha, dni){
        this._nomnbre= nombre;
        this._apellido= apellido;
        this._fechaNac= fecha;
        this._dni= dni;
    }

    set nombre(value){
        this._nomnbre= value;
    }
    get nombre(){
        return this._nombre;
    }

    set fechaNac(value){
        this._fechaNac= value;
    }
    getEdad(){
        let hoy= "2018-05-11"; // new Date()
        return (hoy - this._fechaNac);
    }
}