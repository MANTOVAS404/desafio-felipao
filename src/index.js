let nome = "Pipoca" 
let xp = 47000

let nivel = ""

switch (true){

    case (xp<1000):
        nivel = "Ferro"
        break

    case (xp >= 1001 && xp <=2000):
        nivel = "Bronze"
        break

    case (xp >= 2001 && xp <=5000):
        nivel = "Prata"
        break
    case (xp >= 6001 && xp <=7000):
        nivel = "Ouro"
        break
    case (xp>=7001 && xp <=8000):
        nivel = "Platina"
        break
    case (xp >= 8001 && xp <=9000):
        nivel = "Ascendente"
        break
    case (xp >= 9001 && xp <=10000):
        nivel = "Imortal"

        default:
        xp >= 10001
        nivel = "Radiante"
                              
    }
console.log ("O heroi de nome", nome, "está no nível de", nivel )



