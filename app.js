var operando1 = '';
var operando2 = '';
var operacao = '';
var output = "";

// botões de apagar da calculadora;
function apagar() {
    var output = document.getElementById("resultado");
    output.value = output.value.slice(0, -1);
}
function limpar() {
    document.getElementById("resultado").value = '';
    operando1 = '';
    operando2 = '';
    operacao = '';
}

// botões da calculadora;
function calcular(op) {
    if (op == '+' || op == '-' || op == '*' || op == '/') {
        operacao = op;
        operando1 = parseFloat(document.getElementById("resultado").value);
        document.getElementById("resultado").value = '';
    } else if (op == '=') {
        operando2 = parseFloat(document.getElementById("resultado").value);
        var resultado = 0;
        if (operacao == '+') {
            resultado = operando1 + operando2;
        } else if (operacao == '-') {
            resultado = operando1 - operando2;
        } else if (operacao == '*') {
            resultado = operando1 * operando2;
        } else if (operacao == '/') {
            resultado = operando1 / operando2;
        }
        document.getElementById("resultado").value = resultado;
    } else {
        document.getElementById("resultado").value += op;
    }
}

function calcular(op) {
    if (op == 'C') {
        limpar();
    } else if (op == '=') {
        try {
            var resultado = eval(document.getElementById("resultado").value);
            document.getElementById("resultado").value = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            resultadoAnterior = resultado;
        } catch (e) {
            document.getElementById("resultado").value = "Erro";
            resultadoAnterior = undefined;
        }
    } else {
        if (["", "+", "-", "*", "/"].includes(op)) {
            var ultimoCaractere = document.getElementById("resultado").value.slice(-1);
            if (["", "+", "-", "*", "/"].includes(ultimoCaractere)) {
                return;
            }
        }
        document.getElementById("resultado").value += op;
    }
}
document.addEventListener("keypress", function (event) {
    var tecla = event.key;
    if (tecla == 'Enter') {
        calcular('=');
    } else if (tecla == '.') {
        document.getElementById("resultado").value += '.';
    } else if (tecla == ',') {
        document.getElementById("resultado").value += '.';
    }
});

document.addEventListener("keydown", function (event) {
    var tecla = event.key;
    if (tecla == 'Enter') {
        tecla = '=';
    } else if (tecla == 'Escape') {
        limpar();
        return;
    } else if (tecla == 'Backspace') {
        var valorAtual = document.getElementById("resultado").value;
        document.getElementById("resultado").value = valorAtual.slice(0, -1);
        return;
    } else if (tecla == '/' || tecla == '*' || tecla == '-' || tecla == '+') {
        calcular(tecla);
        return;
    } else if (tecla >= '0' && tecla <= '9') {
        calcular(tecla);
        return;
    }
});

// Dark mode
function frifa() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  function toggleMode () {
    const html = document.documentElement
    html.classList.toggle("luz")
  }    
