import { classificarTriangulo } from '../src/triangulo';

describe('classifyTriangle', () => {
  // Válidos
  test('Triângulo escaleno válido', () => {
    expect(classificarTriangulo(3, 4, 5)).toBe('escaleno');
  });

  test('Triângulo isósceles válido', () => {
    expect(classificarTriangulo(5, 5, 3)).toBe('isósceles');
  });

  test('Triângulo isósceles - permutação 1', () => {
    expect(classificarTriangulo(5, 3, 5)).toBe('isósceles');
  });

  test('Triângulo isósceles - permutação 2', () => {
    expect(classificarTriangulo(3, 5, 5)).toBe('isósceles');
  });

  test('Triângulo equilátero válido', () => {
    expect(classificarTriangulo(6, 6, 6)).toBe('equilátero');
  });

  // Inválidos
  test('Um lado igual a zero', () => {
    expect(classificarTriangulo(0, 4, 5)).toBe('inválido');
  });

  test('Um lado negativo', () => {
    expect(classificarTriangulo(-3, 4, 5)).toBe('inválido');
  });

  // Soma de dois lados igual ao terceiro
  test('Soma igual ao terceiro - 1', () => {
    expect(classificarTriangulo(1, 2, 3)).toBe('inválido');
  });

  test('Soma igual ao terceiro - 2', () => {
    expect(classificarTriangulo(3, 1, 2)).toBe('inválido');
  });

  test('Soma igual ao terceiro - 3', () => {
    expect(classificarTriangulo(2, 3, 1)).toBe('inválido');
  });

  // Soma de dois lados menor que o terceiro
  test('Soma menor que o terceiro - 1', () => {
    expect(classificarTriangulo(1, 1, 3)).toBe('inválido');
  });

  test('Soma menor que o terceiro - 2', () => {
    expect(classificarTriangulo(3, 1, 1)).toBe('inválido');
  });

  test('Soma menor que o terceiro - 3', () => {
    expect(classificarTriangulo(1, 3, 1)).toBe('inválido');
  });

  test('Todos lados iguais a zero', () => {
    expect(classificarTriangulo(0, 0, 0)).toBe('inválido');
  });
});
