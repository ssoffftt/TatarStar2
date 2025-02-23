const init = () => {
    headerModal();
    swiper();
}


const headerModal = () => {
    
    const headerBurger = document.querySelector('.header-modal__open');
    if(!headerBurger) return false;

    const headerModalEl = document.querySelector('.header-modal');
    if(!headerModal) return false;

    const overlayEl = document.querySelector('.overlay')
    if(!overlayEl) return false;
    
    // const headerClose = document.querySelector('.header-modal__close');
    // if(!headerClose) return false;


    headerBurger.addEventListener('click', () => {
        headerModalEl.classList.toggle('active');
        overlayEl.classList.toggle('active');
        // headerClose.classList.toggle('active');
    })
}

const swiper = () => {

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

}
document.addEventListener('DOMContentLoaded', init);