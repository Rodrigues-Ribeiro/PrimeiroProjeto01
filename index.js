
let heroi = {
    name : "Tonico", 
    xp : 1000

}

function DefineNivel (heroi){ 
    let Nivel 
    if (heroi.xp <=1000){
        Nivel = "ferro"
    }else if(heroi.xp >=1001 && heroi.xp <=2000){ 
        Nivel = "Bronze"
    } else if(heroi.xp >=2001 && heroi.xp <=5000){
        Nivel = "Prata"
    } else if(heroi.xp >=6001 && heroi.xp <=7000) {
        Nivel = "Ouro"
    }else if (heroi.xp >=7001 && heroi.xp <=8000){
        Nivel = "Platina"
    }else if(heroi.xp >=8001 && heroi.xp <=9000){
        Nivel = "Ascendente"
    }else if(heroi.xp >=9001 && heroi.xp <=10000){
        Nivel = "Imortal"
    }else if (heroi.xp >1000){
        Nivel ="Radiante"
    }
        
    

    console.log(" O heroí de nome " + heroi.name + " esta no nivel " + Nivel)
}

DefineNivel(heroi)