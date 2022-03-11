//Exercicio Detetive
// Renan Carvalho

let name = []//Declaração de array vazia, para preenchimento de respostas (s/n).

let a = 0 // variavel para calculo no laço  - Do while - e para mudar o alocamento da resposta no array 'name'.

let b = 0 // variavel para mudar qual pergunta será escolhida e impressa do array 'pergutas'.

let perguntas =["Você estava no shopping ontem a noite?(s/n)","Você esta em frente a loja Taurus?(s/n)","Você comprou sorvete?(s/n)","Você estava usando o celular?(s/n)", "Você pegou onibus?(s/n)"] // array que contem as 5 perguntas do detetive.

let contador = 0 // variavel para verificar quantos "s" foram respondidos.

    do { // laço de repetição para realizar as perguntas existentes no array 'perguntas'.
  
      console.log("\nDigite S ou N para continuar !!!!!\n")
      name [a] = name.push = prompt(perguntas[b])// adiciona ao array 'name' a resposta de cada pergunta do array 'perguntas'.
          
        if (name[a] == 's'){
            b ++    
            a ++
          console.clear()
        }else if (name[a]=='n'){
           b ++    
           a ++
          console.clear()
        }
      
     }while(a<=4)

      for (let i = 0; i <= 5; i++) // laço para verificar quantas strings "s" existe na array 'name'.
        
           {
              if (name[i] == 's')
              {
                  contador ++
              }
           }
  // nesse ponto, ja se sabe quantos "s" existe no array 'name' e verifica se a pessoa se enquadra entre SUSPEITO, CULPADO OU LIBERADO.

      if (contador <= 2)
                {
                    console.log("\nVocê está LIBERADO !\n")
                }
            
      else if (contador == 3)
                {
                  console.log("\nVocê é o SUSPEITO !\n")
                }    
                    
      else if (contador >=4)
                {
                    console.log("\nVocê é o CULPADO !\n")                   
                } 

// FIM DO CÓDIGO.
