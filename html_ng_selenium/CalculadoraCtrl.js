angular.module('Calculadora')
    .controller('CalculadoraCtrl', function ($scope) {

       
            
            switch (this.operacao) {
                case "Somar":
                    return this.resultado = parseInt(numero1) + parseInt(numero2);

                case "Subtrair":
                    return this.resultado = numero1 - numero2;

                case "Dividir":
                    return this.resultado = numero1 / numero2;

                case "Multiplicar":
                    return this.resultado = numero1 * numero2;
                
                default:
                return this.resultado = "POR FAVOR, SELECIONE UMA OPERAÇÃO";
            }
        }
    });
