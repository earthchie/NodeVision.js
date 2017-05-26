/**
 * @name NodeVision.js
 * @version 3.0.0
 * @update May 26, 2017
 * @website https://github.com/earthchie/NodeVision.js
 * @license WTFPL v.2 - http://www.wtfpl.net/
 **/
function NodeVision(el) {
    
    if(typeof el === 'string'){
        el = document.querySelectorAll(el)[0]
    }

    return {
        isVisible: function (percentage) {

            var viewport = {},
                pos = {
                    top: {},
                    bottom: {}
                },
                side_sensitive = false,
                visibility,
                fragments;

            viewport.top = window.scrollY;
            viewport.bottom = viewport.top + window.innerHeight

            pos.height = el.offsetHeight;
            pos.top = el.getBoundingClientRect().top + viewport.top;
            pos.bottom = pos.top + pos.height;

            visibility = {
                top: pos.top >= viewport.top && pos.top <= viewport.bottom,
                bottom: pos.bottom >= viewport.top && pos.bottom <= viewport.bottom,
                body: pos.top <= viewport.bottom && pos.bottom >= viewport.top
            }
            visibility.isVisible = visibility.top || visibility.bottom || visibility.body;

            if (typeof percentage === 'undefined') {
                return visibility.isVisible;
            } else {
                percentage = percentage || 1;

                fragments = percentage.split(' ');
                if (fragments.length > 1) {
                    if (fragments[0] === 'top' || fragments[0] === 'bottom') {
                        side_sensitive = fragments[0];
                    }
                    percentage = fragments[1];
                }

                pos.percentage = parseFloat(percentage.toString().replace(/%|\,/g, '')) / 100;

                pos.offset = pos.height * pos.percentage;

                if (side_sensitive === 'top') {
                    pos.bottom = pos.top + pos.offset;
                } else if (side_sensitive === 'bottom') {
                    pos.top = pos.bottom - pos.offset;
                }

                if (!visibility.top) {
                    pos.top = viewport.top;
                }
                if (!visibility.bottom) {
                    pos.bottom = viewport.bottom;
                }
                pos.visible_portion = (pos.bottom - pos.top) / pos.height;
                return visibility.isVisible && pos.visible_portion >= pos.percentage;

            }

        },
        ifVisible: function (percentage) {
            var self = this,
                visible = false,
                tracker,
                promises = {};

            if (arguments.length === 2) {
                onOut = onIn;
                onIn = percentage;
                percentage = undefined;
            }

            window.addEventListener('scroll', function () {
                if (tracker) {
                    clearTimeout(tracker);
                }

                tracker = setTimeout(function () {
                    if (self.isVisible(percentage)) {
                        if (!visible) {
                            visible = true;
                            if (typeof onIn === 'function') {
                                (onIn.bind(el))();
                            }
                        }
                    } else {
                        if (visible) {
                            visible = false;
                            if (typeof onOut === 'function') {
                                (onOut.bind(el))();
                            }
                        }
                    }
                }, 10);
            });

            // imitate Promise

            promises.then = function (callback) {
                onIn = callback;
                return {
                    catch: function (callback) {
                        onOut = callback;
                    },
                    else: function (callback) {
                        onOut = callback;
                    }
                }
            };

            promises.catch = function (callback) {
                onOut = callback;
                return {
                    then: function (callback) {
                        onIn = callback;
                    }
                }
            };

            promises.else = function (callback) {
                onOut = callback;
                return {
                    then: function (callback) {
                        onIn = callback;
                    }
                }
            };

            promises.fromTop = function () {
                if (percentage) {
                    if (percentage.split(' ').length === 1) {
                        percentage = 'top ' + percentage;
                    }
                }

                return {
                    then: promises.then,
                    else: promises.else,
                    catch: promises.catch
                }
            };

            promises.fromBottom = function () {
                if (percentage) {
                    if (percentage.split(' ').length === 1) {
                        percentage = 'bottom ' + percentage;
                    }
                }

                return {
                    then: promises.then,
                    else: promises.else,
                    catch: promises.catch
                }
            }

            return promises;

        }
    }
}
