/*
 *
 * Ghetto Console
 * by Hunter Bridges
 *
 * Drop-in console for IE debugging.
 * Use at your own risk.
 *
 * Sorry this depends on jQuery.
 * It really doesn't need to.
 *
 */

(function ($) {
  if (typeof console === 'undefined') {
    window.console = {};
    var $console = null;

    console.log = function(message) {
      if (!$console) {
        $('body').append('<textarea class="ghetto_console"></textarea>');
        $console = $('body .ghetto_console');
        $console.css({
          position: 'absolute',
          width: '100%',
          height: '100px',
          top: $(window).scrollTop() + $(window).height() - 100,
          left: 0,
          fontFamily: 'monospace'
        });
        $(window).bind('scroll', function() {
          $console.css({
            top: $(window).scrollTop() + $(window).height() - $('body .ghetto_console').outerHeight()
          });
        });
      }

      $console.append(message + "\r\n").scrollTop($console[0].scrollHeight - $console.height());
    };
  }
}(jQuery));
