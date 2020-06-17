$(document).ready(function () {

    $(window).scroll(function(){
        if($(this).scrollTop()>140){
            $('.bottom-header').addClass('fixed');
        }
        else if ($(this).scrollTop()<140){
            $('.bottom-header').removeClass('fixed');
        }
    });

    $('.slider__wrapper').slick();



    $('.carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

});


function AjaxFormRequest(result_id, formMain, url) {
    jQuery.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: jQuery("#" + formMain).serialize(),
        success: function (response) {
            $(':input', '#' + formMain)
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .removeAttr('checked')
                .removeAttr('selected');
            setTimeout(() => {
                $("#message").hide();
            }, 5000);
        },
        error: function (response) {
            var par = document.getElementById(result_id);
            var error = document.createElement('p');
            error.classList.add("mt-3");
            error.innerHTML = "Возникла ошибка при отправке формы.";
            par.appendChild(error);
            setTimeout(func, 700);
        }
    });
}

function func() {
    $("p.mt-3").detach();
}
$('#order').submit(function (e) {
    e.preventDefault();
    AjaxFormRequest('message-rezult', 'order', '../order.php');
});

$('#sendmail').submit(function (e) {
    e.preventDefault();
    AjaxFormRequest('form_btn_wrapper', 'sendmail', '../feedback.php');
});


// Выбираем все ссылки с хэшем
$('a[href*="#"]')
    /* Убираем ненужные, либо те которые нужны для других целей, например для галерей, так что сюда можешь добавить список хешей на который плавный скролл не будет реагировать */
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('.nav-link')
    .not('.popup-with-zoom-anim')
    .not('#order')
    .click(function (event) {
        // Проверяем что все хеши на том домене
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Находим цель
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Существует ли целевой элемент?
            if (target.length) {
                // Блокируем поведение по умлочанию, только в случае если анимация на понадобилась
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Меняем фокус (бывает полезно, обычно не мешает)
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Получил ли целевой элемент фокус
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    