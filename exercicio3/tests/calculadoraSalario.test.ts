import { Funcionario, Cargo } from '../src/funcionario';
import { calcularSalarioLiquido } from '../src/calculadoraSalario';

describe('calculateNetSalary', () => {
  test('Desenvolvedor com salário >= 3000 (20%)', () => {
    const emp = new Funcionario('João', 'joao@mail.com', 5000, Cargo.DESENVOLVEDOR);
    expect(calcularSalarioLiquido(emp)).toBeCloseTo(4000);
  });

  test('Desenvolvedor com salário < 3000 (10%)', () => {
    const emp = new Funcionario('João', 'joao@mail.com', 2500, Cargo.DESENVOLVEDOR);
    expect(calcularSalarioLiquido(emp)).toBeCloseTo(2250);
  });

  test('DBA com salário >= 2000 (25%)', () => {
    const emp = new Funcionario('Maria', 'maria@mail.com', 3000, Cargo.DBA);
    expect(calcularSalarioLiquido(emp)).toBeCloseTo(2250);
  });

  test('DBA com salário < 2000 (15%)', () => {
    const emp = new Funcionario('Maria', 'maria@mail.com', 1800, Cargo.DBA);
    expect(calcularSalarioLiquido(emp)).toBeCloseTo(1530);
  });

  test('Testador com salário >= 2000 (25%)', () => {
    const emp = new Funcionario('Carlos', 'carlos@mail.com', 2500, Cargo.TESTADOR);
    expect(calcularSalarioLiquido(emp)).toBeCloseTo(1875);
  });

  test('Testador com salário < 2000 (15%)', () => {
    const emp = new Funcionario('Carlos', 'carlos@mail.com', 1500, Cargo.TESTADOR);
    expect(calcularSalarioLiquido(emp)).toBeCloseTo(1275);
  });

  test('Gerente com salário >= 5000 (30%)', () => {
    const emp = new Funcionario('Julia', 'julia@mail.com', 6000, Cargo.GERENTE);
    expect(calcularSalarioLiquido(emp)).toBeCloseTo(4200);
  });

  test('Gerente com salário < 5000 (20%)', () => {
    const emp = new Funcionario('Julia', 'julia@mail.com', 4000, Cargo.GERENTE);
    expect(calcularSalarioLiquido(emp)).toBeCloseTo(3200);
  });
});
