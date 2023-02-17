let btnSearch = document.querySelector('.btnSearch');

btnSearch.addEventListener('click', async (event)=>{  
    event.preventDefault();
    let inputSearch = document.querySelector('#inputSearch');
    
    const user = await fetch(`https://api.github.com/users/${inputSearch.value}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response)=>{
        if(response.ok){
            return response.json();
        }
        return response;
    }).then(resp=>{ 
        if(resp.ok==false){
            window.location.replace('./src/pages/error.html');
        }
        else{
            localStorage.setItem('searchUser', JSON.stringify(resp));
            window.location.replace('./src/pages/profile.html');
        }   
    }) 
})