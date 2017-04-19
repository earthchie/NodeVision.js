/**
 * @name jquery.onFullyAppear.js
 * @version 1.0.1
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

        execute(self);
        $(window).on('scroll', function(){

            if(timer){
                clearTimeout(timer);
            }

            timer = setTimeout(function(){
                execute(self);
            }, 250);
            
        });
        return this;
    },
    onFullyDisappear: function(callback){
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

        execute(self);
        $(window).on('scroll', function(){

            if(timer){
                clearTimeout(timer);
            }

            timer = setTimeout(function(){
                execute(self);
            }, 250);
            
        });
        return this;
    }
});

$('.uk-card').onFullyAppear(function() {
    $(this).find('h3').text('yay');
});
$('.uk-card').onFullyDisappear(function() {
    $(this).find('h3').text('bye');
});
