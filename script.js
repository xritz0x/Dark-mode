const checkbox = document.querySelector('.checkbox');
const toggleText = document.querySelector('.toggle-text');
const imgs = document.querySelectorAll('img');
var mode;
const changeMode = (localS = 'no') => {
    const icon = [...document.getElementById('toggle-icon').children][1];
    if(localS === 'no'){
        mode = document.documentElement.getAttribute('data-theme');
    }else{
        mode = localStorage.getItem('theme')
    }
    toggleText.textContent = `${mode} Mode`;
    if(mode === 'dark'){
        icon.classList.replace('fa-sun','fa-moon');
        document.querySelector('nav').style.background = "rgb(0 0 0 / 50%)";   
        imgs.forEach(img => {
            img.src = img.src.replace('light','dark');
        });
    }else {
        icon.classList.replace('fa-moon','fa-sun');        
        document.querySelector('nav').style.background = "rgb(255 255 255 / 50%)";
        imgs.forEach(img => {
            img.src = img.src.replace('dark','light');
        });
    }
}

checkbox.addEventListener('change',(event) => {
    var iconMode = document.querySelector('svg.icon-mode');
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        changeMode();
    } else {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        changeMode();
    }
})
const localData = localStorage.getItem('theme');
if(localData){
    if(localData === 'dark'){
        document.documentElement.setAttribute('data-theme','dark');
        checkbox.checked = true;
        changeMode(localData);          
    }else if(localData === 'light'){
        document.documentElement.setAttribute('data-theme','light');
        changeMode(localData);
    }
}