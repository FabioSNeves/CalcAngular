angular.module('Calculadora')
    .controller('CalculadoraCtrl', function ($scope) {

        $scope.calcular = function (num1, num2, operacao) {

                switch (operacao) {
                case "+":
                    return $scope.resultado = num1 + num2;

                case "-":
                    return $scope.resultado = num1 - num2;

                case "/":
                    return $scope.resultado = num1 / num2;

                case "*":
                    return $scope.resultado = num1 * num2;

            }
        }

        $scope.apagar = function (num1, num2, operacao, resultado) {

            $scope.num1 = null;
            $scope.num2 = null;
            $scope.operacao = null;
            $scope.resultado = "";
        }    
      
    });
