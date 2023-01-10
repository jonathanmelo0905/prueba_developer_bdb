//Jonathan Melo
//MD5 = 18dc3e6b84d012ba71f9b1beebc533c4
//S = 1
const valorS: number = 1;
const lista: number[] = [91, 929, 13, 9, 45, 89, 539, 125, 634, 987];

const codigoOne = (s: number, lista: number[]) => {
    let l = lista.length
    let newLista: number[] = [];
    let listaRes: number[] = [];
    let pos = 0;
    if(l <= 100){
        l--;
        for(let i = l; i >= 0; i--){
            newLista[l-i] = lista[i]
        }
    }else{
        console.log('en el else')
        for(let i = 0; i<l; i++){
            newLista[i] = lista[i]
        }
    }

    console.log(newLista, 'Original')
    
    for(let numero of newLista){
        let res = numero.toString()
        let newNum: any = []
        let newS = s.toString()
        let i = 0;
        for(let num of res){
            if(num < newS ){
                newNum[i] = num;
                i++;
            }
        }
        newNum= newNum.join('')
        newNum= Number(newNum);
        if(newNum){
            listaRes[pos] = newNum;
            pos++
        }
    }
    console.log(listaRes, 'resultado quitando el numero:',s)
}     
    
codigoOne(valorS, lista)