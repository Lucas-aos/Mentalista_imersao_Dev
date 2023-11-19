function Start(){
  while(true){
var numeroSecreto = parseInt(Math.floor(Math.random() * 1000) + 1); //parse = analise, Int = inteiro | math.floor retorna numero incluindo min e max 
var tentativas = 1
var limite = 20


 while(chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 1 e 1000')  
    var tent = limite - tentativas 
    
    if (chute === null){                       //permite cancelar o prompt
       alert('Até mais!')
       return;                                //volta para o início
    } else if (chute == numeroSecreto){       //condição de sucesso
       alert('Parabéns! Você acertou!');
       return;
    } else if (chute > numeroSecreto){
       alert('Errou... o número secreto é menor do que ' + chute + ". Você já fez "+tentativas+" tentativa(s). Restam agora "+tent+" chances! ");
      tentativas++; 
    } else if (chute < numeroSecreto){
       alert('Errou... o número secreto é maior do que ' + chute + ". Você já fez "+tentativas+" tentativa(s). Restam agora "+tent+" chances! ");
      tentativas++; 
    } else if (isNaN(chute)){               //garante que apenas números sejam inseridos no prompt
       alert('Por favor insira um número')
    }
   if (tentativas > limite){                //encerrar o jogo conforme excedido o número de tentativas
      alert('Game Over');
      return;                               //volta para o início
}
 }
 }
}