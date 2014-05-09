 /**
  * header-shrink.js v1.0.0
  * based in cbpAnimatedHeader.js v1.0.0 (made by codrops.com)
  *
  * Thanks to 'chrisenytc' for help in this gist
  * https://gist.github.com/danielfeelfine/e55521ea04259ad830c5
  *
  * Licensed under the MIT license.
  * http://www.opensource.org/licenses/mit-license.php
  *
  */

var headerShrink = function(headerName, className) {

    var docElem = document.documentElement,
        header = document.querySelector( headerName ),
        didScroll = false,
        changeHeaderOn = 300;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, className);
        }
        else {
            classie.remove( header, className);
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

};
