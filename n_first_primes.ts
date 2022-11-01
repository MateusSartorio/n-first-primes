const n_first_primes = (n: number) : number[] => {
    if(n < 1)
        return [];
    
    const primes= [2];
    let current_number = 3;
    let count = 1;
    while(count < n) {
        let is_prime = true;
        for(let prime of primes)
            if(current_number % prime == 0) {
                is_prime = false;
                break;
            }

        if(is_prime) {
            primes.push(current_number);
            count++;
        }

        current_number++;
    }

    return primes;
}



console.log(n_first_primes(10))
