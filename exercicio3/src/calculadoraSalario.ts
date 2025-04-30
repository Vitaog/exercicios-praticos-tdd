import { Funcionario, Cargo } from './funcionario';

export function calcularSalarioLiquido(funcionario: Funcionario): number {
    const salario = funcionario.salarioBase;
    const role = funcionario.cargo;

    let disconto = 0;

    switch (role) {
        case Cargo.DESENVOLVEDOR:
            disconto = salario >= 3000 ? 0.2 : 0.1;
            break;

        case Cargo.DBA:
        case Cargo.TESTADOR:
            disconto = salario >= 2000 ? 0.25 : 0.15;
            break;

        case Cargo.GERENTE:
            disconto = salario >= 5000 ? 0.3 : 0.2;
            break;
    }

    return salario * (1 - disconto);
}
