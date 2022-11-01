def n_first_primes(n):
    if n < 1:
        return []
    
    primes = [2]
    current_number = 3
    count = 1
    while count < n:
        is_prime = True
        for prime in primes:
            if current_number % prime == 0:
                is_prime = False
                break

        if is_prime:
            primes.append(current_number)
            count += 1

        current_number += 1

    return primes

n = input("Enter the ammount of primes: ")

print(n_first_primes(int(n)))
