document.addEventListener('DOMContentLoaded', function(){
    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const repositoryElement = document.querySelector('#repository');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/MarceloORJ')
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        avatarElement.src = json.avatar_url;
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        repositoryElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    })
    .catch(function(error){
        alert("ocorreu um erro ao carregar as informações, tente novamente mais tarde.")
    })
})