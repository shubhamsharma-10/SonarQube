export function add(a: number, b: number): number {
    console.log("Original add fn called");
    return a + b;
}

export function multiply(a: number, b: number): number {
    console.log("Original multiply fn called");
    return a * b;
}

export function ops(a: number, b: number): { sum: number; product: number } {
    const sum = add(a, b);
    const product = multiply(a, b);
    return { sum, product };

}