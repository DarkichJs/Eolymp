def generate_primes(x):
    """
    Generator function to yield prime numbers from 2 up to a given limit.
    If the limit is less than 2, yields nothing.
    """
    if x < 2:
        return

    def is_prime(n):
        """Check if a number is prime."""
        if n < 2:
            return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                return False
        return True

    for num in range(2, x + 1):
        if is_prime(num):
            yield num