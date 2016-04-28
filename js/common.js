$(document).ready(function() {

    // ------menu-contact header  index.html -------------

    $(' .menu_contact .block_menu_button  a').click(function(){
        $(' .menu_contact li').slideToggle();

    });
    // -------------------------------------------


    // --------------header hover shoppingbag time index.html--------

    $(' .shoppingbag').hover(

        function(){
            setTimeout(function() {
                $('header .miniCartModalFlyout').slideDown();
            }, 
                       50); 
        },

        function(){
            setTimeout(function() {
                $('header .miniCartModalFlyout').slideUp();
            }, 
                       50); 
        }
    );
    // ------------------------------------------------------------


    // ------menu-products header  index.html-------------

    $(' .zillaHeader .block_menu_button a').click(function(){
        $(' .menu_products li ').slideToggle();
    });

    // --------------------------------------------------




    //    этот код должен работать если экран меньше 992px

//
//        if($(window).width() < 992){ 
//            $(window).resize(function(){
//                if($(this).width()<992){
//    
//                    $('.firstMegaMenu > a').click(function(){
//                        $('.naw_Wrapper:visible').slideUp().prev().removeClass('open');
//                        if (($(this).next().is(".naw_Wrapper")) && (!$(this).next().is(":visible"))) {
//                            $(this).next().slideDown();
//                            $(this).addClass('open');
//                        };
//                    });
//    
//                };
//            });
//
//        };



    //fnstart();
    //function fnstart(){
    //        alert("Функция сработала при старте");
    //    }
    // 
//
//    $(window).resize(function(){
//        var winBr = $(window).width();
//        if(winBr<992){
//
//            $('.firstMegaMenu > a').click(function(){
//                $('.naw_Wrapper:visible').slideUp().prev().removeClass('open');
//                if (($(this).next().is(".naw_Wrapper")) && (!$(this).next().is(":visible"))) {
//                    $(this).next().slideDown();
//                    $(this).addClass('open');
//                };
//            });
//
//        }
//    }); 


//
//    function windowSize(){
//        if ($(window).width() <= 992 ){
//            
//            $('.firstMegaMenu > a').click(function(){
//                $('.naw_Wrapper:visible').slideUp().prev().removeClass('open');
//                if (($(this).next().is(".naw_Wrapper")) && (!$(this).next().is(":visible"))) {
//                    $(this).next().slideDown();
//                    $(this).addClass('open');
//                };
//            });
//        };
//    };
   // $(window).load(windowSize); // при загрузке
   // $(window).resize(windowSize); // при изменении размеров
    // или "два-в-одном", вместо двух последних строк:
//    $(window).on('load resize',windowSize);    


    
        $('.firstMegaMenu > a').click(function(){
            $('.naw_Wrapper:visible').slideUp().prev().removeClass('open');
            if (($(this).next().is(".naw_Wrapper")) && (!$(this).next().is(":visible"))) {
                $(this).next().slideDown();
                $(this).addClass('open');
            }
        });  



});