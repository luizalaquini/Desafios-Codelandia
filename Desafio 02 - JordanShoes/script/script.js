/* Type */
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30
    });

    /* Scroll Reveal */
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 2000,
        reset: true
    });

    ScrollReveal().reveal('.logo', { delay: 50 });
    ScrollReveal().reveal('.text-shop', { delay: 50 });
    ScrollReveal().reveal('.text-banner', { delay: 50 });
    ScrollReveal().reveal('.item', { delay: 50 });