let n1 = parseInt(prompt("Escolha o primeiro valor: "));
let n2 = parseInt(prompt("Escolha o segundo valor: "));
let oper = prompt("Escolha a operação: ");

const soma = (num1, num2) => {return num1 + num2};
const subtrair = (num1, num2) => {return num1 - num2};
const multiplicar = (num1, num2) => {return num1 * num2};
const dividir = (num1, num2) => {return num2 === 0 ? 'Impossivel dividir por zero' : num1 / num2};

class Calculadora {

  constructor(num1, num2) {

    this.num1 = num1;
    this.num2 = num2;

    this.calcular = oper => {

      switch (oper) {

        case "+": return alert("Resultado: " + soma(this.num1, this.num2));
        case "-": return alert("Resultado: " + subtrair(this.num1, this.num2));
        case "*": return alert("Resultado: " + multiplicar(this.num1, this.num2));
        case "/": return alert("Resultado: " + dividir(this.num1, this.num2));
        default: alert("Digite uma opção válida!");

      }
    }
  }
}

let calc = new Calculadora(n1,n2);
calc.calcular(oper);