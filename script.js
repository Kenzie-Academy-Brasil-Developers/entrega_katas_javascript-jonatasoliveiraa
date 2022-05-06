let arrayNumerosNegativos = [-47,87,90,-14,-1,10,18,20,-2]

// ************************************ //
// ********* ARRAYS NUMÉRICOS ********* //
// ************************************ //

// 1-)
function contaNegativos(array){

    let contador = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] < contador){
            contador++
        }
    }

    return contador

}console.log(contaNegativos(arrayNumerosNegativos))

// 2-)
function somaValoresNegativos(array){

    let recebeNumeros = 0
    for(let i = 0; i < array.length; i ++){
        if(array[i] < 0){
            recebeNumeros += array[i]
        }
    }

    return recebeNumeros

}console.log(somaValoresNegativos(arrayNumerosNegativos))

// 3-)
function numerosPares(numero){

    let recebeNumerosPares = []
    for(let i = 0; i <= numero; i++){
        if(i % 2 == 0){
            recebeNumerosPares.push(i)
        }
    }

    return recebeNumerosPares

}console.log(numerosPares(20))

// 4-)
function numerosNegativos(array){

    let recebeNumeros = []
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            recebeNumeros.push(array[i])
        }
    }

    return recebeNumeros

}console.log(numerosNegativos(arrayNumerosNegativos))

// 5-)
function verificaValores(array){

    let retornaValor = 0
    for(let i = 0; i < array.length; i++){
        retornaValor += array[i]
        
    }
    if(retornaValor > array.length){
        return true
    }else{
        return false
    }

}console.log(verificaValores(arrayNumerosNegativos))

// 6-)
function newArray(array){

    let recebeValores = []
    for(let i = 0; i < array.length; i++){
        recebeValores.push (array[i] + 5)
    }

    return recebeValores

}console.log(newArray(arrayNumerosNegativos))

// 7-)
function media(array){

    let calculoMedia = 0
    let acimaDaMedia = []        

    for(let i = 0; i < array.length; i++){
        calculoMedia += array[i] / array.length
    }
    for(let g = 0; g < array.length; g++){
        
        if(array[g] > calculoMedia){
            acimaDaMedia.push(array[g])
        }
    }
    
    console.log(calculoMedia)
    return acimaDaMedia

}console.log(media(arrayNumerosNegativos))

// *********************************************** //
// ********* ARRAYS DE STRINGS E STRINGS ********* //
// *********************************************** //

// 1-)
function contaCharA(string){

    let recebeString = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] == "a" || string[i] == "A"){
            recebeString++
        }
    }

    return recebeString

}console.log(contaCharA("A bala é de banana"))

// 2-)
let arrayStrings = ["bola","paralelepipedo","guitarra","carro"]

function contaString(array){

    let recebeValor = 0
    for(let i = 0; i < array.length; i++){
        recebeValor += array[i].length
    }

    return recebeValor

}console.log(contaString(arrayStrings))

// 3-)
function stringImpar(string){

    let split = string.split(" ")
    let array = []
    for(let i = 0; i < split.length; i++){
        
        if(split[i].length % 2 == 1){
            array.push(split[i])
        }
    }

    return array

}console.log(stringImpar("Eu vou ser Dev junto com a Kenzie"))

// 4-)
function formataString(string){

    let stringFormatada = ""
    for(let i = 0; i <string.length; i++){
        if(string[i] == "o" || string[i] == "O"){
            stringFormatada += "0"
        }else{
            stringFormatada += string[i]
        }
    }

    return stringFormatada

}console.log(formataString("O rato roeu a roupa do rei de roma"))

// 5-)
function alteraString(string){

    let newString = ""
    for(let i = 0; i < string.length; i++){
        if(string[i] == "p"){
            newString += "P"
        }else{
            newString += string[i]
        }
    }

    return newString

}console.log(alteraString("O pelo do peito do pé de pedro é preto"))
