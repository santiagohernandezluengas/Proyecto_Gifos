const menuActivo = () =>{
    const menuH = document.querySelector('.fotoMenuHamburguesa');
    const nav = document.querySelector('.linksMenu');

    menuH.addEventListener('click', ()=>{
        nav.classList.toggle('menuHamburguesaActivo');
    });

}

menuActivo();

