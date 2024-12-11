let Heroi = "Batman";
let Nivel = 10500;

if(Nivel<=1000){
    Nivel = "Ferro";
}
    else if(Nivel>=1001 && Nivel<=2000){
        Nivel = "Bronze";
    }
        else if(Nivel>=2001 && Nivel<=5000){
            Nivel = "Prata"
        }
            else if(Nivel>=5001 && Nivel<=7000){
                Nivel = "Ouro"
            }
                else if(Nivel>=7001 && Nivel<=8000){
                    Nivel = "Paltina"
                }
                    else if(Nivel>=8001 && Nivel<=9000){
                        Nivel = "Ascendente"
                    }
                        else if(Nivel>=9001 && Nivel<=10000){
                            Nivel = "Imortal"
                        }
                            else{
                                Nivel = "Radiante"
                            }

console.log("O Herói " + Heroi + " está no nível " + Nivel);

