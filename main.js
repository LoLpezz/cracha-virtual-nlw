/*var userData = { //Objeto
    name: 'Jóse José', 
    phone: 123456,
    adress: true,
}

userData.adress = "Street: I Got a Gun Bitch"

alert(userData.adress);*/

const linkSocialMedia = {
    github: "LoLpezz", //deve ser usado 2 pontos (:) e não sinal de igual (=);
    linkedin: "in/maicon-lopes-de-barros-quadros-573828210", //sempre colocar uma virgula no final se não vai dar erro
    instagram: "the.guy.with.one.eye",
    facebook: "maicon.quadros.568",
}
//DOM - Esta pegando os links das redes sociais 
function changeSocialMedia() {
    //document.getElementById('userTitle') . //Vai pegar o elemento por Id no caso o id #userTitle
    //textContent = "Quadros"; //Vai permitir trocar o nome do elemento

    //userTitle.textContent = "Barros" //Também é possivel realizar a troca dessa forma

    for(let li of socialLinks.children){
        const social = li.getAttribute('class');
        li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
    }               
    //Noma da variavel++, o JS esta pegando o que tem dentro da varaivel somando um e guardando na variavel
}

changeSocialMedia();

//JSON
function getGithubUserInfos(){
    const url = `https://api.github.com/users/${linkSocialMedia.github}` //O endereço esta acessando a const linkSocialMedia e pegando o valor do github.
                                                                          //O endereço esta guardado na variavel URL
    fetch(url).then(response => response.json()) //Vai pegar o que foi guardado na variavel response e vai transformar em JSON, pois o fetch não sabe que é um JSON)
    .then(data => {        //Esse .then vai armazenar no data a resposta da URL porem em JSON.
        userTitle.textContent = data.name;  //O userTitle é o ID do HTML, o textContent esta trocando o nome que esta no HTML pelo que esta na APi do GitHub pelo data.name
        userBio.textContent = data.bio
    })
}

getGithubUserInfos();