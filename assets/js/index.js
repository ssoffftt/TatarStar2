const init = () => {
    headerModal()
    openModal ()
    swiper()
    headerBcc()
    initCartModal(); 
}


const headerModal = () => {
    
    const headerBurger = document.querySelectorAll(".header-modal__icons");

    const headerModalEl = document.querySelector(".header-modal");

    const overlayEl = document.querySelector('.overlay')
    
    const headerClose = document.querySelector(".header-modal__icons.close");

    const headerOpen = document.querySelector(".header-modal__icons.open");

    const bodyEl = document.querySelector ("body");

    if (!headerBurger || !headerModalEl || !overlayEl || !headerClose || !headerOpen || !bodyEl) return false


    headerBurger.forEach(burger => {
        burger.addEventListener('click', () => {
            headerModalEl.classList.toggle('active');
            overlayEl.classList.toggle('active');
            headerClose.classList.toggle('active');
            headerOpen.classList.toggle('active');
            bodyEl.classList.toggle("active");
        })
    });
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

const headerBcc = () => {
    
    const headerEl = document.querySelector("header");
    const headerIcons = document.querySelector(".fa-basket-shopping")
    
    if (!headerEl || !headerIcons) return false

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight/6) {
            headerEl.style.backgroundColor = "#2C3531"
            headerEl.style.color = "#fff"
            headerIcons.style.color = "#fff"

        } else {
            headerEl.style.backgroundColor = "transparent"
            headerEl.style.color = "#000"
            headerIcons.style.color = "#000"
        }
    })

}
document.addEventListener('DOMContentLoaded', init);

function openModal() {
    const overlayModal = document.querySelector('.popup-overlay')
    const bigImageModal = document.querySelector('.popup-image')
    console.log(bigImageModal);

    
    const triggerModals = document.querySelectorAll('.new-card')
    

    triggerModals.forEach(triggerModal => {
        triggerModal.addEventListener("click", () => {
            const imageModal = triggerModal.querySelector('img').src
            console.log(imageModal);
            bigImageModal.src = imageModal
            console.log(bigImageModal);
            overlayModal.style.display = 'flex'
            document.body.style.overflow = 'hidden'
        })

        const closeModal = document.querySelector('.popup-close')
        if (!closeModal) return false

        closeModal.addEventListener('click', () => {
            overlayModal.style.display = 'none'
            document.body.style.overflow = 'scroll'
        })

        overlayModal.addEventListener("click", (event) => {
            if (event.target === overlayModal) {
                overlayModal.style.display = 'none'
                document.body.style.overflow = 'scroll'
            }
        })

    });
}

const initCartModal = () => {
    // ищет иконку корзины во всем доке
    const cartIcon = document.querySelector('.fa-basket-shopping'); 
    // ищет фон модалки, чтобы ткнуть и закрылось
    const cartOverlay = document.querySelector('.cart-overlay');
    // ищет крестик
    const cartClose = document.querySelector('.cart-close');
    
    // проверяем все ли элементы существуют, если нет, завершаем работу
    if (!cartIcon || !cartOverlay || !cartClose) return;
    

    // обработчик клика на иконку корины 
    cartIcon.addEventListener('click', (e) => {

        // епревент дефолт это метод объекта события event, который убирает стандартное поведение, т е иконка корзины у меня ссылка а, но мне не нужно по ней переходить, перезагружать страницу и тд. поэтому я взяла и отменила эт все 
        e.preventDefault();
        // не дает странице листаться пока окно открыто 
        document.body.style.overflow = 'hidden';
        // делает оверфлоу видимым (изначально он скрыт) 
        cartOverlay.style.display = 'block';
        // добавляет с задержкой 10 миллисек класс актив (он в ссс) чтобы анимация была плавной 
        setTimeout(() => {
            cartOverlay.classList.add('active');
        }, 10);
    });
    
    // Зачем нужна е в параметре?  это параметр функции-обработчика, который содержит объект события, как раз для превентдефолта и нужен. 
    
    // закрывает все при клике на крестик, снова можно листать, а модалку не видно 
    cartClose.addEventListener('click', () => {
        cartOverlay.style.display = 'none';
        document.body.style.overflow = 'scroll';
    });

    // закрывает все при клике вне модалки
    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            cartOverlay.style.display = 'none';
            document.body.style.overflow = 'scroll';
        }
    });
};


