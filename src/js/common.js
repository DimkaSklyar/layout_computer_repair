$(document).ready(function () {
  
  //$('.slider').slick();

});

// Выбираем все ссылки с хэшем
$('a[href*="#"]')
/* Убираем ненужные, либо те которые нужны для других целей, например для галерей, так что сюда можешь добавить список хешей на который плавный скролл не будет реагировать */
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
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
                    }, 1000, function() {
                        // Callback after animation
                        // Меняем фокус (бывает полезно, обычно не мешает)
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Получил ли целевой элемент фокус
                            return false;
                        } else {
                            $target.attr('tabindex','-1');
                            $target.focus(); 
                        };
                    });
                }
            }
        });