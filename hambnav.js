let hambnavbar = document.querySelector('.hambnavbar')

document.querySelector('#menu-bar').onclick = () =>{
    hambnavbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    hambnavbar.classList.remove('active');
}

window.onscroll = () =>{

    hambnavbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }

}

