let Heroi = "Batman";
let Nivel = "12000";

if(Nivel<1000){
    Nivel = "Ferro";
}
    else if(Nivel>1001 && Nivel<=2000){
        Nivel = "Bronze";
    }
        else if(Nivel>2.001 && Nivel<=5.000){
            Nivel = "Prata"
        }
            else if(Nivel>5.001 && Nivel<=7.000){
                Nivel = "Ouro"
            }
                else if(Nivel>7.001 && Nivel<=8.000){
                    Nivel = "Paltina"
                }
                    else if(Nivel>8.001 && Nivel<=9.000){
                        Nivel = "Ascendente"
                    }
                        else if(Nivel>9.001 && Nivel<=10.000){
                            Nivel = "Imortal"
                        }
                            else{
                                Nivel = "Radiante"
                            }

console.log("O Herói " + Heroi + " está no nível " + Nivel);

