class Menu{
    constructor(entrada,principal,postre, bebida){
        this._entrada= entrada;
        this._principal= principal;
        this._postre= postre;
        this._bebida= bebida;
        this._precio= 180;
    }
    /**
     * Params entrada Object
     */

    set entrada(value){
        this._entrada= value;
    }
    set principal(value){
        this._principal= value;
    }
    set postre(value){
        this._postre= value;
    }
    set bebida(value){
        this._bebida= value;
    }

    get entrada(){
        return this._entrada;
    }
    get principal(){
        return this._principal;
    }
    get postre(){
        return this._postre;
    }
    get bebida(){
        return this._bebida;
    }

}