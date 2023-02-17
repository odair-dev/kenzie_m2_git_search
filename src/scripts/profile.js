function renderProfile(){
    const profile = JSON.parse(localStorage.getItem('searchUser'))
    const cardHeader = document.querySelector('.lefth');
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    const pName = document.createElement('pName');

    divImg.className='divImg';
    img.src=profile.avatar_url;
    img.alt=profile.name;
    pName.className='pName';
    pName.innerText=profile.name;

    cardHeader.appendChild(divImg);
    divImg.appendChild(img);
    cardHeader.appendChild(pName);

    renderRepository(profile.repos_url);
}

renderProfile();

async function renderRepository(repos_url){
    const user = await fetch(`${repos_url}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then( response => response.json()
    
    ).then(resp=>{

        console.log(resp);
        let ulRepository = document.querySelector('.ulRepository');
        resp.forEach(element => {
            let li = document.createElement('li');
            let divCard = document.createElement('div');
            let pTitle = document.createElement('p');
            let pText = document.createElement('p');
            let btnOpen = document.createElement('button');

            divCard.className='card';
            pTitle.className='pTitle';
            pTitle.innerText=element.name;
            pText.className='pText';
            pText.innerText=element.description;
            btnOpen.className='btnOpen';
            btnOpen.innerText='Repositório'

            li.appendChild(divCard);
            divCard.appendChild(pTitle);
            divCard.appendChild(pText);
            divCard.appendChild(btnOpen);
            ulRepository.appendChild(li);

            btnOpen.addEventListener('click', (event)=>{
                event.preventDefault();
                window.location.replace(`${element.html_url}`);
            })
        });  
    }) 
}

let btnHome = document.querySelector('.btnHome')
btnHome.addEventListener('click', (event)=>{
    event.preventDefault();
    window.location.replace('../../index.html');
})