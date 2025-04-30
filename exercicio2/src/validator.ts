import { Person } from './person';

export function isValidToInclude(person: Person): string[] {
  const errors: string[] = [];

  // Validação do nome
  const nameParts = person.name.trim().split(/\s+/);
  if (nameParts.length < 2) {
    errors.push('Nome deve conter pelo menos duas partes.');
  } else if (!nameParts.every(part => /^[A-Za-zÀ-ÿ]+$/.test(part))) {
    errors.push('Nome deve conter apenas letras.');
  }

  // Validação da idade
  if (person.age < 1 || person.age > 200) {
    errors.push('Idade deve estar entre 1 e 200.');
  }

  // Validação de e-mails
  if (!person.emails || person.emails.length === 0) {
    errors.push('Deve haver pelo menos um e-mail associado.');
  } else {
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    const invalidEmails = person.emails.filter(email => !emailRegex.test(email.endereco));
    if (invalidEmails.length > 0) {
      errors.push('Todos os e-mails devem estar no formato correto.');
    }
  }

  return errors;
}
