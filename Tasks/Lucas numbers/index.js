function lucasnum(n, memo = {}) {
    if (memo[n] !== undefined) {
        return memo[n];
    }

    if (n === 0) {
        return 2;
    } else if (n === 1) {
        return 1;
    }

    if (n > 1) {
        memo[n] = lucasnum(n - 1, memo) + lucasnum(n - 2, memo);
    } else {
        memo[n] = lucasnum(n + 2, memo) - lucasnum(n + 1, memo);
    }

    return memo[n];
}