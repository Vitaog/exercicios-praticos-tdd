export function classificarTriangulo(a: number, b: number, c: number): string {
    if (a <= 0 || b <= 0 || c <= 0) return "inválido";
    if (a + b <= c || a + c <= b || b + c <= a) return "inválido";
  
    if (a === b && b === c) return "equilátero";
    if (a === b || b === c || a === c) return "isósceles";
    return "escaleno";
  }
  