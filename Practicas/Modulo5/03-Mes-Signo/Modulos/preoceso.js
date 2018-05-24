exports.signo = function(m,d){

    let day = parseInt(d);
    
    if(isNac(day)){return "ingrese un día válido";}

	switch(m){

		case '1': 
			if( day >= 20){
                return "Acuario";
			}else{
                return "Capricornio";
			}
        break;

		case '2': 
			if( day > 21){
                return "";
			}else{
                return "";
			}

		break;
        
        default:
            return "ingrese un mes correcto";
        break;
	}

}