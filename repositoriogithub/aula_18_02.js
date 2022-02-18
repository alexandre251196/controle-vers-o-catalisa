

    var materia = ['matematica', 'portugues', 'geografia']
    var nota = [ 9, 7, 9]
    var nome = ' alexandre '

    var output = document.querySelector('#output')

    for(i = 0; i < 3; i++ ){

        console.log('materia: ' + materia[i] + ' _ ' + nota [i])

        soma += nota[i]
    }

       var media = (soma / 3)

       if( media >= 8){
           console.log(nome +'aprovado')
       }else{
           console.log(nome +'reprovado')
       }
         console.log(soma)


   
