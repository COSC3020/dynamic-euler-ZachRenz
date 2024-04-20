function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}

function dynE(n, iters = 0, fact = 1, prev = 1){
    if (n === iters) return prev;
    else{
        iters += 1; fact *= iters;
        return dynE (n, iters, fact, prev + (1.0 / fact));
    }
}
