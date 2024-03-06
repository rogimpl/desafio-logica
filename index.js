let nomeHeroi = "Pedro"
let xpHeroi = "11000"
let xp = ""

if(xpHeroi <= 1000){
   xp = "Ferro"
}else if (xpHeroi <= 2000){
  xp = "Bronze"
}else if (xpHeroi <= 5000){
  xp= "Prata"
}else if (xpHeroi <= 7000){
    xp =" Ouro"
}else if (xpHeroi <= 8000){
    xp ="Platina"
}else if (xpHeroi <= 9000){
    xp = "Ascendente"
}else if (xpHeroi <= 10000){
    xp ="Imortal"
}else if ( xpHeroi >= 10001){
  xp = "Radiante"
}

console.log("O Herói de nome",nomeHeroi,"está no nível de",xp)



