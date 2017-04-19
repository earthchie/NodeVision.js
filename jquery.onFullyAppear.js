/**
 * @name jquery.onFullyAppear.js
 * @version 1.0.2
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
    onFullyAppear: function(callback, wait_time_offset){
        var self = this,
            execute = function(self){
                $(self).each(function(){
                    if($(this).isFullyVisible()){
                        $(this).data('appear', 1);
                        if(typeof callback === 'function'){
                            (callback.bind(this))()
                        }
                    }
                });
            },
            timer;
        
        wait_time_offset = wait_time_offset || 200;

        execute(self);
        $(window).on('scroll', function(){

            if(timer){
                clearTimeout(timer);
            }

            timer = setTimeout(function(){
                execute(self);
            }, wait_time_offet);
            
        });
        return this;
    },
    onNotFullyAppear: function(callback, wait_time_offset){
        var self = this,
            execute = function(self){
                $(self).each(function(){
                    if(!$(this).isFullyVisible()){
                        if($(this).data('appear') == 1 && typeof callback === 'function'){
                            (callback.bind(this))()
                        }
                    }
                });
            },
            timer;
        
        wait_time_offset = wait_time_offset || 200;
        execute(self);
        $(window).on('scroll', function(){

            if(timer){
                clearTimeout(timer);
            }

            timer = setTimeout(function(){
                execute(self);
            }, wait_time_offset);
            
        });
        return this;
    }
});
