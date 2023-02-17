let btnHome = document.querySelector('.btnHome')
btnHome.addEventListener('click', (event)=>{
    event.preventDefault();
    window.location.replace('../../index.html');
})