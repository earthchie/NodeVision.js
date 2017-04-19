/**
 * @name jquery.onVisible.js
 * @version 2.0.2
 * @update Apr 19, 2017
 * @website https://github.com/earthchie/jquery.onVisible.js
 * @license WTFPL v.2 - http://www.wtfpl.net/
 * @dependencies: jQuery <https://jquery.com/>
 **/
$.fn.extend({
    isVisible: function(percentage){
        
        var viewport = {}, 
            el = {},
            side_sensitive = false,
            visibility,
            fragments = percentage.split(' ');
        
        if(fragments.length > 1){
            side_sensitive = fragments[0];
            percentage = fragments[1];
        }

        percentage = percentage || 1;
        el.percentage = parseFloat(percentage.toString().replace(/%|\,/g,''))/100;

        viewport.top = $(window).scrollTop();
        viewport.bottom = viewport.top + $(window).height()

        el.height = $(this).outerHeight();
        el.offset = el.height * el.percentage;

        el.top = {}
        el.top.start = $(this).offset().top;
        el.top.end = el.top.start + el.offset;

        el.bottom = {};
        el.bottom.end = el.top.start + el.height;
        el.bottom.start = el.bottom.end - el.offset;
        
        visibility = {
            top: el.top.start >= viewport.top && el.top.end <= viewport.bottom,
            bottom: el.bottom.start >= viewport.top && el.bottom.end <= viewport.bottom
        }

        if(side_sensitive === 'top'){
            return visibility.top;
        }else if(side_sensitive === 'bottom'){
            return visibility.bottom;
        }else{
            return visibility.top || visibility.bottom;
        }

    },

    isFullVisible: function () {
        return $(this).isVisible(100);
    },

    isHalfVisible: function () {
        return $(this).isVisible(50);
    },

    onVisible: function(percentage, onIn, onOut, wait_time_offset){
        var self = this,
            execute = function () {
                $(self).each(function () {
                    if ($(this).isVisible(percentage)) {
                        $(this).data('appear', 1);
                        if (typeof onIn === 'function') {
                            (onIn.bind(this))()
                        }
                    }else{
                        if ($(this).data('appear') == 1 && typeof onOut === 'function') {
                            (onOut.bind(this))()
                        }
                    }
                });
            },
            timer;

        execute();
        $(window).on('scroll', function () {

            timer && clearTimeout(timer);
            timer = setTimeout(execute, wait_time_offset || 200);

        });
        return this;
    },

    onFullVisible: function (onIn, onOut, wait_time_offset) {
        $(this).onVisible(100, onIn, onOut, wait_time_offset);
        return this;
    },

    onHalfVisible: function (onIn, onOut, wait_time_offset) {
        $(this).onVisible(50,  onIn, onOut, wait_time_offset);
        return this;
    },

});
