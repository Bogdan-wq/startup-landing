$('a[href^="#"]').click(function () {
        if(!document.body.style.scrollBehavior) {
            let elementClick = $(this).attr('href');
            let destination = $(elementClick).offset().top;
            $('body,html').animate({scrollTop: destination},1100)
        }
    });


document.getElementById("burgerJS").onclick = () => {
    document.getElementById("burgerContentJS").classList.toggle("burger-menu__content_show");
}

window.onclick = function(event) {
    if(!event.target.dataset.close) {
        document.getElementById("burgerContentJS").classList.remove("burger-menu__content_show")
    }
}




