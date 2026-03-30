const { sum, subtract, multiply, divide } = require('../src/calculator');

test('deve somar 2 + 3 e retornar 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('deve subtrair 10 - 4 e retornar 6', () => {
    expect(subtract(10, 4)).toBe(6);
});

test('deve multiplicar 3 * 5 e retornar 15', () => {
    expect(multiply(3, 5)).toBe(15);
});

test('deve dividir 10 / 2 e retornar 5', () => {
    expect(divide(10, 2)).toBe(5);
});
