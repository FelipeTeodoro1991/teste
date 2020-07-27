function sum(a,b){
    if(typeof(a) !="number" || typeof(b)!= "number"){
        return undefined;
    }
    return a + b;
}

function sumThree(a,b,c){
    if(typeof(a) !="number" || typeof(b)!= "number" || typeof(c) !="number"){
        return undefined;
    }
    return a + b + c;
}



function multiplica(a,b){
    return a * b;
}

function somaMultiplica(a,b,c){
    return (a+b)*c
}


module.exports = {sum, sumThree, multiplica, somaMultiplica};
