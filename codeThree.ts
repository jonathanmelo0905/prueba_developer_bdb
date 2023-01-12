const coins : number[] = [1,22,2,2,2,5,6,1,2,3,3,3,2,2,2,4,4,89,5,6,6,7,7,2,3,9,1,2,3,3,3,33,5,6,12,22,33,44,55,66];
//const coins : number[] = [1,2,2,2,10,78,12,45,21]

const minimumMoney = (coin: any) => {
    let long = coin.length;
    if(long){        
        coin.sort((a: number, b: number)=> a-b);
        let coin1 = [].concat(coin.filter((e: number) => e < 10));
        let coin3 = [].concat(coin.filter((e: number) => e >= 10));
        let band1 = 0;
        let numref = 1;
        while(band1 === 0){

            let band = 0;

            while(band === 0){
                let busqueda = coin1.find((e) => e === numref) 
                if(busqueda === numref){
                    numref++;
                }else{
                    band = 1;
                }
            }

            let coin2 = [].concat(coin1.filter((e) => e <= numref))
            let res = add(coin2);
            if(res >= numref) numref = res;

            if(numref >= 10){
                band1 = 1;
            }else{
                let long2 = coin2.length
                let suma = 0;
                for(let i = 0; i<long2; i++){
                    suma += coin2[i]
                    if(suma === numref){
                        i = long2;
                        numref++;
                    }else if(suma > numref){
                        i = long2;
                    }
                    if(i === long2-1 && suma < numref){
                        band1 = 1;
                    }
                }
            }
        }
        if(numref >= 10){
            numref = 1 + add(coin1);
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

const add = (arr: number[]) => {
    return arr.reduce((a, b) => a + b, 0);
};

minimumMoney(coins)
