
let container = document.getElementById('container')

let aviso = document.createElement('div')
aviso.classList = 'aviso'
aviso.innerHTML = 'Insira um médico e a quantidade de fichas a para impressão'
container.append(aviso)

let paginaA4 = document.createElement('div')
paginaA4.id = 'pagina-a4'
paginaA4.classList = 'pagina-a4'

let medicos = []

let totalFichas = 0

function adicionarMedico(index){
    let formMedico = document.getElementsByClassName('form-add-medico')[index]
    let medicoValue = formMedico.childNodes[1].childNodes[1].value

    let fichas = formMedico.childNodes[3].childNodes[1].value
    medicos[index] = medicoValue
    totalFichas = fichas

    if(medicos.length > 0 && medicoValue != '' && fichas !== ''){
        container.innerHTML = ''
        paginaA4.innerHTML = ''
        renderFichas()
    }else{
        container.innerHTML = ''
        container.append(aviso)
    }
}


function renderFichas(){

    let fichasEl = []

    medicos.forEach(medico => {
        for (let i = 1; i <= totalFichas; i++) {
            fichasEl.push(`
            <img src='./logo_cardoso_fontes.gif'/>
            <p>${medico}</p>
            <h5>${i}</h5>
            `)
        }
    })

    paginaA4.append(
        ...fichasEl.map(f => {
            let ficha = document.createElement('div')
            ficha.classList = 'ficha'
    
            ficha.innerHTML = f
    
            return ficha
        })
    )

    container.append(paginaA4)
}

window.onload = function () {
    renderFichas()
}