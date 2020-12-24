/**
 * Toggling the menu
 */

$(document).ready(() => {
    $('.dropbtn').off().on('click', (event) => {
        event.preventDefault();
        /**
         * On click show the menu
         */
        if($('.dropdown-content').css('display') == 'none') {
            $('.dropbtn').hide();
            $('.dropdown-content').fadeToggle("slow");
        }
    });

    $('.close_menu').off().on('click', (event) => {
        event.preventDefault();
        /**
         * Close the menu
         */
        if($('.dropdown-content').css('display') == 'block') {
            $('.dropdown-content').fadeToggle("slow");
            setTimeout(() => {
                $('.dropbtn').fadeToggle("fast");
            }, 700);
        }
    });

});
