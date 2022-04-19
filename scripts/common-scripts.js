;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="phone"],.main-wrap input[type="number"],.main-wrap input[type="search"],.main-wrap textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        })
        $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="phone"],.main-wrap input[type="number"],.main-wrap input[type="search"],.main-wrap textarea').blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.

        // Add class for Nav hover effect 
        $(".nav-wrap > ul > li > a").mouseenter(function () {
            $(this).parents(".nav-wrap").addClass("hovered");
        })
        $(".nav-wrap > ul > li > a").mouseleave(function () {
            $(this).parents(".nav-wrap").removeClass("hovered");
        });

        // Home page logo modal open function
        $(".logo-item").each(function () {
            $(this).on('click touch', function (e) {
                e.stopPropagation();
                var temContent = $(this).html();
                $(".healt-meater-section").removeClass("modalshown");
                $(this).parents(".healt-meater-section").addClass("modalshown");
                $("#modal-inner").html(temContent);
            });
        });

        // Logo modal close function
        $("#close-icon, body").on('click touch', function () {
            $(".healt-meater-section").removeClass("modalshown");
        });

        $(".modal-wrap").on('click touch', function (e) {
            e.stopPropagation();
        })


        // Click to scroll down function
        var headerHeight = $(".main-header").outerHeight();
        $("#scroll-bottom").on('click touch', function () {
            $("html, body").stop(true, true).animate({
                scrollTop: $("#after-hero-section").offset().top - headerHeight
            }, 800)
        })

        // iPad  menu expand function
        if ($(window).width() < 992 && $(window).width() > 767) {
            $("#phone-nav").on('click touch', function () {
                $(".nav-wrap").slideToggle();
            })
        }

        // Mobile menu expand function
        if ($(window).width() < 768) {
            $("#phone-nav").on('click touch', function () {
                $(".navigation-wrap").slideToggle();
            })
        }


        // Selectrick function
        if ($("select.styled-select").length) {
            $('select.styled-select').selectric();
        }


        // Team carousel slick function
        if ($('#team-carousel').length) {
            $('#team-carousel').slick({
                dots: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
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
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false
                        }
                    }
                ]
            });
        }

        // Single product modal function
        if ($("#products-info-section").length) {
            $(".product-item").each(function () {
                var itemLogo = $(this).find("> figure").html(),
                    itemTitle = $(this).find("> .info h6").text();
                itemContent = $(this).find(".descriptions").html();

                $(this).find('> .info > .btn-wrap > a').on('click touch', function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    $(".modal-header figure").html(itemLogo);
                    $(".product-modal-inner > h1").text(itemTitle);
                    $(".product-modal-inner .descriptions").html(itemContent);

                    $(".single-product-modal-section").fadeIn(300, function () {

                        $("body").addClass("shownModal");

                        $(".accordion-item h6").each(function () {
                            $(this).on('click touch', function () {
                                $(".accordion-item").removeClass("active");
                                $(this).parent().addClass("active");
                                $(".accordion-item p").slideUp();
                                if ($(this).parent().find("p:visible").length) {
                                    $(".accordion-item").removeClass("active");
                                    $(this).parent().find("p").slideUp();
                                } else {
                                    $(".accordion-item p").slideUp();
                                    $(this).parent().find("p").slideDown();
                                }
                            })
                        })
                    });
                })
            })
        }

        // Product modal close function
        $("#close-box, body").on('click touch', function () {
            $("body").removeClass("shownModal");
            $(".single-product-modal-section").fadeOut(300);
        })

        // Modal click event inherit in modal inner area
        $(".single-product-modal").on('click touch', function (e) {
            e.stopPropagation();
        })

        // Add class in body tag for home page
        if ($(".home").length) {
            $("body").addClass("homepageBody")
        }



        // Click to Scroll product item section
        $(".products-nav ul li a").on('click touch', function (e) {
            e.preventDefault();
            var id = $(this).attr('href');

            $("html, body").stop(true, true).animate({
                scrollTop: $(id).offset().top - headerHeight
            }, 500)
        });


        // this is for sticky menu 
        if ($(window).width() > 768) {
            $(window).on('scroll', function () {

                var wSclTop = $(this).scrollTop();

                if (wSclTop > 150) {
                    $('body').addClass('sticky')
                } else {
                    $('body').removeClass('sticky')
                }

            });
        }
        
        //this is check
        
        $('.multiple-chose-inner ul li input:checkbox').change(function(){
            
            checked = $(this).parents("ul").find("input:checkbox:checked").length;
            
            if( checked >= 1){
                
                $('.multiple-chose-inner').addClass("enable");
                
            }else{
                $('.multiple-chose-inner').removeClass("enable");
            }
            
            
        });

        
        //this function for accordion
        $('.vision-categori-item > span').click(function () {
            if ($(this).parent().hasClass('open')) return false;
            else {
                $(this).parent().siblings().removeClass('open').find('.details').slideUp(500);
                $(this).parent().toggleClass('open').find('.details').slideToggle(500)
                return false;
            }

        });
        
        

    }) // End ready function.


})(jQuery)