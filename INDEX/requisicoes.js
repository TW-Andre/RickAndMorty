
class Character {
    constructor(name, idChar) {
       this.name = name
       this.id = idChar
    }
}

let array = []

$(window).ready(() => {

    for(let i = 1; i <= 6; i++) {
        let random = parseInt(Math.random() * 1000)
    
        while(random > 826) {
            random = parseInt(Math.random() * 1000)
        }

        $.get(`https://rickandmortyapi.com/api/character/${random}`, (dados, status) => {
            
            array.push(new Character(dados.name, dados.id))

            $('#img'+i).attr('src',
                    `https://rickandmortyapi.com/api/character/avatar/${random}.jpeg`
            )
            $('#ancorName'+i).html(
                    `<h2>${dados.name}</h2>`
                    /*.attr(
                        'href',
                        `char${i}.html`
                    ) */
            )
            $('#icon'+i).attr('class', `iconCondition icon${dados.status}`)
            $('#p'+i).html(
                `<p>${dados.status} - ${dados.species}</p>`
            )
            $('#ancorLocal'+i).attr('href',
                    `${dados.location.url}`
            ).html(
                `<p>${dados.location.name}</p>`
            )
            $.get(`${dados.episode[0]}`, (dados,status) => {
                $('#ancorEpisode'+i).html(
                    `<p>${dados.name}</p>`
                )
            })
        })
    }
    console.log(array)
    
    //EXIBIR O OBJETO
    
})

/*CRIAR UM OBJETO QUE GUARDARÁ INFORMAÇÕES DE CADA PERSONAGEM ESCRITO*/

/*
 DEFINIR 'FUNCTIONS' PARA CADA AÇÕES
*/