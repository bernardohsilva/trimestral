let usuarios = []

const addUsuario = () => {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let idade = document.getElementById('idade').value
    let CPF = document.getElementById('CPF').value
    let numero = document.getElementById('numero').value
    let poupança = Math.floor(Math.random() * 10 )
    let divErro = document.querySelector('.div-erro')

if(nome=="" || email == ""||idade == "" || CPF == "" || numero == ""){
    divErro.style.display ='block'
}else{
    divErro.style.display = 'none'
}


    if(localStorage.getItem('usuarios') != null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
    }
   
    usuarios.push([nome, email, CPF, numero, idade, poupança])
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('CPF').value = ""
    document.getElementById('idade').value = ""
    document.getElementById('numero').value = ""
}

const listUsuarios = () => {
    let tbody = document.getElementById('table-linha')
    if(localStorage.getItem('usuarios') != null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.forEach((usuario, index) => {
            tbody.innerHTML += "<tr> <td>" + usuario[0] + "</td> <td> "+ usuario[1] + "</td> " + 
            "<td> <button onclick='deleteUsuario("+ index+")'> \u{1F5D1} </button> </td> </tr>"
        });
    }else{
    tbody.innerHTML += "<tr> <td>Vazio</td> <td>Vazio</td> </tr>"
}
}

const deleteUsuario = (index) =>{

    usuarios = JSON.parse(localStorage.getItem('usuarios'))
    let = auxUsuario = usuarios.filter((v, i) => i != index)
    localStorage.setItem('usuarios' , JSON.stringify(auxUsuario))
    document.location.reload(true)
}
