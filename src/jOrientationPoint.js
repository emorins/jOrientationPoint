/**
 * @fileOverview This Plugin is auto positioning of a HTML element for a smartfon.
 * Dependencies: jQuery 1.5.1 or later,  jQuery Mobile 1.0 alpha3 or later
 * @author <a href="mailto:emorins@gmail.com">Shotaro Emori</a>
 * @version 1.0.0
 */

/**
 * Auto positioning of a HTML element.
 * @param   {Object} arg  {left, top, right, bottom}
 * @returns {Object}      jQuery Object
 */ 
(function($){
    $.fn.jOrientationPoint = function(arg) {
        rect = $.extend({
            left:   0,
            top:    0,
            right:  0,
            bottom: 0
        }, arg);
        var screenWidth = screen.width;
        var screenHeight = screen.height;
        var element = $(this).get(0);

        function resize() {
            if (window.orientation == 0) {
                var width = rect.right - rect.left;
                var height = rect.bottom - rect.top;
                $(this).width(width);
                if (element.width) {
                    element.width = width;
                }
                $(this).height(height);
                if (element.height) {
                    element.height = height;
                }
            } else {
                var width = (rect.right - rect.left) * (screenHeight / screenWidth);
                var height = (rect.bottom - rect.top) * (screenHeight / screenWidth);
                $(this).width(width);
                if (element.width) {
                    element.width = width;
                }
                $(this).height(height);
                if (element.height) {
                    element.height = height;
                }
            }
        }
        $(window).bind('orientationchange', resize);
        resize();
        return this;
    };
})(jQuery);