function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36file:///C:/Users/lucas/OneDrive/%C3%81rea%20de%20Trabalho/PADILHA.HTML-20240701T221820Z-001/PADILHA.HTML/1000017057-removebg-preview.pngdp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}