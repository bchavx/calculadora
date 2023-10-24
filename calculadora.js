let operador = '';
let numero1;
let numero2;
let resultado;

function calculadora(){
    // entrada do operador selecionado

    operador = document.querySelector('#slcOperador').value;

    // verifica se é o operador de soma
    if (operador == '+') {
        somar();
    }

    // verifica se é o operador de subtração
    if (operador == '-') {
        subtrair();
    }

    // verifica se é o operador de multiplicação
    if (operador == '*') {
        multiplicar();
    }

    // verifica se é o operador de divisão
    if (operador == '/') {
        dividir();
    }

}

    // declaração da função de somar
    function somar(){
        // entrada de dado do número 1
        numero1 = parseInt(document.querySelector('#numero1').value);
        // entrada de dado do número 1
        numero2 = parseInt(document.querySelector('#numero2').value);
        // processamento (somar)
        resultado = numero1 + numero2;
        // saída (valor da soma)
        document.querySelector('#resultado').innerHTML = resultado;
        // alert('resultado: ' + resultado);
        }

            // declaração da função de subtrair
    function subtrair(){
        // entrada de dado do número 1
        numero1 = parseInt(document.querySelector('#numero1').value);
        // entrada de dado do número 1
        numero2 = parseInt(document.querySelector('#numero2').value);
        // processamento (subtrair)
        resultado = numero1 - numero2;
        // saída (valor da subtração)
        document.querySelector('#resultado').innerHTML = resultado;
        // alert('resultado: ' + resultado);
        }

            // declaração da função de multiplicar
    function multiplicar(){
        // entrada de dado do número 1
        numero1 = parseInt(document.querySelector('#numero1').value);
        // entrada de dado do número 1
        numero2 = parseInt(document.querySelector('#numero2').value);
        // processamento (multiplicar)
        resultado = numero1 * numero2;
        // saída (valor da multiplicação)
        document.querySelector('#resultado').innerHTML = resultado;
        // alert('resultado: ' + resultado);
        }

            // declaração da função de dividir
    function dividir(){
        // entrada de dado do número 1
        numero1 = parseInt(document.querySelector('#numero1').value);
        // entrada de dado do número 1
        numero2 = parseInt(document.querySelector('#numero2').value);
        // processamento (dividir)
        resultado = numero1 / numero2;
        // saída (valor da divisão)
        document.querySelector('#resultado').innerHTML = resultado;
        }

        // tratamento das imagens dos operadores

        let select = document.querySelector('#slcOperador');
        select.addEventListener('change', function(){
            // alert('teste')

            let imgOperacao = document.querySelector('#imgOperacao');
            let op = select.options[select.selectedIndex].value;

            if(op == '+'){
                imgOperacao.setAttribute('src', 'img/adicionar.png');
            }

            if(op == '-'){
                imgOperacao.setAttribute('src', 'img/subtracao.png');
            }

            if(op == '*'){
                imgOperacao.setAttribute('src', 'img/multiplicacao.png');
            }

            if(op == '/'){
                imgOperacao.setAttribute('src', 'img/divisao.png');
            }

        });

        // função limpar formulário

        function limpar(){
            document.querySelector('#numero1').value = '';
            document.querySelector('#numero2').value = '';
            document.querySelector('#resultado').innerHTML = '-';
        }