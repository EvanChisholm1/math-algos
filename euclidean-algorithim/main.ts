const gcd = (a: number, b: number): number => {
    const big = Math.max(a, b);
    const small = Math.min(a, b);
    if (small === 0) return big;

    const r = big % small;

    return gcd(small, r);
};

console.log(gcd(100, 60));
