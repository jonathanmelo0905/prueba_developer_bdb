const coins : number[] = [1,1,1,1,1,1,1,1];


const coinsVueltas = (coin: any) => {
    let coin1 = [].concat(coin);
    coin1.sort((a, b)=> a-b)
    let long = coin1.length;
    if(long){
        let suma = 0;
        let coin2 = [];
        let coin3 = [].concat(coin1.filter((e) => e >= 10)) 
        coin1 = coin1.filter((e) => e<10) 
        let band1 = 0;
        let numref = 1; 
        while(band1 === 0){
            let band2 =0 ;
            let busqueda = coin1.find((e) => e === numref) 
            if(busqueda === numref){
                numref++
            }
            coin2 = [].concat(coin1.filter((e) => e <= numref))
            let permutaciones = permutations(coin2)
            let long2 = permutaciones.length;
            for(let i = 0; i<long2; i++){
                let long3 = permutaciones[i].length
                suma = 0;
                for(let j=0; j<long3; j++){
                    suma += permutaciones[i][j];
                    if(suma === numref){
                        numref ++; 
                        j = long3;
                        i = long2;
                        band2 = 1;
                    }else if(suma > numref){
                        j = long3;
                    }
                }
            }
            if(numref >= 10){
                band2 = 0;
            }
            if(band2 === 0 ){
                band1 = 1;
            }
        }
        if(numref >= 10){
            numref = 1;
            for(let num of coin1){
                numref += num;
            }
        }
        for(let num of coin3){
            if(numref >= num){
                numref += num;
            }
        }
        console.log('lista de dinero disponible:', coin)
        console.log('el dinero minimo que no se puede dar vueltas es:', numref)
    }else{
        console.log('el array ingresdo se encuentra vacio')
    }
}

const permutations: any = (arr: number[]) => {
    if (arr.length <= 2) {
        return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    }

    return arr.reduce((acc, el, i) =>
        acc.concat(
            permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val: number[]) => [el, ...val])
        ),
        []
    );
}

coinsVueltas(coins)