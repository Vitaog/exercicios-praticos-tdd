import { Person } from '../src/person';
import { Email } from '../src/email';
import { isValidToInclude } from '../src/validator';

describe('isValidToInclude', () => {
  test('Pessoa válida', () => {
    const person = new Person('Ana Maria', 30, [new Email('ana@maria.com')]);
    expect(isValidToInclude(person)).toEqual([]);
  });

  test('Nome com uma palavra só', () => {
    const person = new Person('Ana', 30, [new Email('ana@maria.com')]);
    expect(isValidToInclude(person)).toContain('Nome deve conter pelo menos duas partes.');
  });

  test('Nome com números', () => {
    const person = new Person('Ana 123', 30, [new Email('ana@maria.com')]);
    expect(isValidToInclude(person)).toContain('Nome deve conter apenas letras.');
  });

  test('Idade menor que 1', () => {
    const person = new Person('Ana Maria', 0, [new Email('ana@maria.com')]);
    expect(isValidToInclude(person)).toContain('Idade deve estar entre 1 e 200.');
  });

  test('Idade maior que 200', () => {
    const person = new Person('Ana Maria', 201, [new Email('ana@maria.com')]);
    expect(isValidToInclude(person)).toContain('Idade deve estar entre 1 e 200.');
  });

  test('Sem e-mails', () => {
    const person = new Person('Ana Maria', 30, []);
    expect(isValidToInclude(person)).toContain('Deve haver pelo menos um e-mail associado.');
  });

  test('E-mail inválido', () => {
    const person = new Person('Ana Maria', 30, [new Email('ana@.com')]);
    expect(isValidToInclude(person)).toContain('Todos os e-mails devem estar no formato correto.');
  });
});
