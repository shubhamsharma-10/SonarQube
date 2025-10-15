import { describe, expect, test } from 'vitest';
import { add, multiply, ops } from '../src/index';

describe('Math functions', () => {
    test('adds two numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('multiplies two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });
});

describe('Combined operations', () =>   {
    test('adds and multiplies two numbers', () => {
        const result = { sum: 5, product: 6 };
        expect(ops(2, 3)).toEqual(result);
    });
});