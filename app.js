alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

nome = prompt('Qual o seu nome ?')
    alert(`Bem vindo e boa sorte ${nome}`)

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`${nome}, O número secreto é menor que ${chute}`);
        } else {
            alert(`${nome}, O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

if (tentativas > 1) {
     alert(`Isso ai ${nome}! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        alert(`Isso ai ${nome}! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
 }
