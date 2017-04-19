/**
 * @name jquery.onFullyAppear.js
 * @version 1.0.0
 * @update Apr 19, 2017
 * @website https://github.com/earthchie/jquery.onFullyAppear.js
 * @license WTFPL v.2 - http://www.wtfpl.net/
 * @dependencies: jQuery <https://jquery.com/>
 **/
$.fn.extend({
    isFullyVisible: function(){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(this).offset().top;
        var elemBottom = elemTop + $(this).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    },
    onFullyAppear: function(callback){
        var self = this;
        $(window).on('scroll', function(){
            $(self).each(function(){
                if($(this).isFullyVisible()){
                    $(this).data('appear', 1);
                    $(this).trigger('appear');
                    if(typeof callback === 'function'){
                        (callback.bind(this))()
                    }
                }
            });
        });
        return this;
    },
    onFullyDisappear: function(callback){
        var self = this;
        $(window).on('scroll', function(){
            $(self).each(function(){
                if(!$(this).isFullyVisible()){
                    if($(this).data('appear') == 1 && typeof callback === 'function'){
                        (callback.bind(this))()
                    }
                }
            });
        });
        return this;
    }
});
