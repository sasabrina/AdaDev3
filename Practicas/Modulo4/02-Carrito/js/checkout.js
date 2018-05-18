class Checkout{
    constructor(){}

    static calcularDescuento(monto,descuento){
        let valor= (monto*descuento)/100;
        return valor;
    }
    static calcularRecargo(monto,cuotas){
        let cuota3= 1.05;
        let cuota6= 1.10
        let recargo= 0;
        switch(cuotas){
            case 3: recargo= monto*1.05;
            break;
            
            case 6: recargo= monto*1.10;
            break;
        }
        return recargo;
    }
    calcularCostoEnvio(){
        
    }
}