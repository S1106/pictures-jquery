'use strict';

$(document).ready(function(){
        let ul = $('ul');
        let imgLi = ul.find('img');
        let overlay = $('.overlay');
        let close = overlay.find('.close');
        overlay.hide();

        imgLi.bind('click',function(){
            let src = $(this).attr('src');
            overlay.show(500).find('img').attr('src',src);
        });

        close.bind('click',function(){
            overlay.hide();
        });
});