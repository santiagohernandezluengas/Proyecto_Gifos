const menuActivo = () => {
    const menuH = document.querySelector('.fotoMenuHamburguesa');
    const nav = document.querySelector('.linksMenu');
    const btnGif = document.getElementById('circuloMas');

    menuH.addEventListener('click', () => {
        nav.classList.toggle('menuHamburguesaActivo');
        //btnGif.remove(); Se está borrando cuando uno hace click y vuelve a desktop y no es la idea
    });

}

menuActivo();
