//Jonathan Melo
//MD5 = 18dc3e6b84d012ba71f9b1beebc533c4
//S = 1
const matriz: number[] = [2,1,1,2,3,3,4,3,4,5,66,12]
const numS = 1;

const ordenamiento = (lista: number[]) =>{
    const long = lista.length
    for(let i = 0; i<long; i++){
        for (let j = 0; j < long - 1 - i; j++ ) {
            if(lista[j] > lista[j+1]){
                [lista[j],lista[j+1]] = [lista[j+1],lista[j]]
            }
        }
    }
    return lista;
}

const raiseNumbers = (s: number, lista: number[]) =>{
    let ss = s*11;
    let newList: number[] = [];
    let longM = lista.length

    if(longM){
        let listRaise: number[] =[];
        for(let i = 0; i<longM; i++){
            newList[i] = lista[i]
        }
        let long = newList.length;
        let j = 0;
        
        for(let i = 0; i<long; i++){
            let numSquares = newList[i]*newList[i];
            if(numSquares < ss){
                listRaise[j]= numSquares
                j++
            } 
        }
        listRaise = ordenamiento(listRaise)
        console.log('matriz original', lista)
        console.log('el resultado de la matriz es:', listRaise)
        console.log('teniendo un rango de:',`[0 , ${ss}]`)
        return listRaise;
    }else{
        console.log('la matriz se encuentra vacia')
        console.log('ingrese una matriz valida')
    }
}

raiseNumbers(numS, matriz)