
var posicaoAleatoria = Math.ceil(Math.random() * 5); //variável que define que a posição é escolhida aleatoriamente

var parte1 = posicaoAleatoria;//variável que define a posição da primeira parte
var parte2 = parte1+1;//variável que define a posição da segunda parte
var parte3 = parte2 +1;//variável que define a posição da terceira parte

var parteEscolhida = []; // variável que controla se uma parte do barco já foi atingida

var jogada;// variável de controlo que define a jogada do utilizador
var atingidas = 0;//variável de controlo que define o número de partes atingidas
var totalJogadas = 0;//variável de controlo que define o número de jogadas

var afundado = false;//variável que determina se o jogo chegou ao fim

while (afundado === false) { //enquanto todas as partes não forem atingidas o ciclo irá continuar
	
	jogada = prompt("Pode jogar - Escolha um número entre 1 e 7:"); //obtém o valor que o utilizador selecionou
	
	if (isNaN(jogada)) { /*determina se a jogada é válida, ou seja, se o valor introduzido é um número.
	Caso não seja o ciclo volta ao início*/
	
		alert("Insira um número entre 1 e 7!");
	
	} else if (jogada < 1 || jogada > 7) { //garante que o valor está nos critérios do jogo, ou seja, se está entre 1 e 7

		alert("Jogada inválida. Tente de novo!");
	
	} else if (jogada % 1 !== 0) { //assegura que o valor introduzido pelo utilizador é um número inteiro
		
		alert("O número tem de ser inteiro!");
		
	} else {
		var comando = 0; 
	
		for (i=0; i < parteEscolhida.length; i++) { //ciclo que se repete por cada valor do array "parteEscolhida"
		    if (jogada == parteEscolhida[i]) { //caso o valor "jogada" seja igual a um valor do array este adiciona uma unidade à variável "comando"
		        comando++;
		    }
		}

		if (comando !== 0) { //caso "comando" nao seja zero o utilizador está a repetir uma jogada com o mesmo valor, isto porque o valor já se encontra no array "parteEscolhida"
		    
		alert("Já atingiste essa parte. Tenta de novo!");
		
		} else {  //se for zero o utilizador não está a repetir uma jogada ocorre usualmente
		
		    totalJogadas += 1;
		
		    parteEscolhida.push(jogada); //insere a jogada no array "parteEscolhida"
        
		    if (jogada == parte1 || jogada == parte2 || jogada == parte3) { //determina se com a jogada alguma das partes foi atingida

			    alert("Acertaste em uma parte!");

			    atingidas += 1;
            
			    if (atingidas == 3) { //caso as três partes sejam atingidas o jogo acaba

				    afundado = true;

				    alert("Parabéns! Afundaste o navio por completo!");

			    }
        
		    } else { //se o utilizador não acertar em nenhuma parte o jogo dá o seguinte alerta

			    alert("OH OH! Falhaste! Tenta de novo!");

		    }

	    }

    }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas); //variável que calcula a estatistica do jogador, ou seja, a sua precisão

alert(estatistica);