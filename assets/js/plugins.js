// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

/*
  Responsive embedded videos (YouTube & Vimeo)
*/
(function($, doc, win) {
  "use strict";

  $(function() {
    var $allVideos = $("iframe[src*='www.youtube.com'], iframe[src*='player.vimeo.com']");
    var $fluidEl = $(".content");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
      $(this)
        .data('aspectRatio', this.height / this.width)
        // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');
    });

    // When the window is resized
    $(win).resize(function() {
      var newWidth = $fluidEl.width();

      // Resize all videos according to their own aspect ratio
      $allVideos.each(function() {
        var $el = $(this);
        $el
          .width(newWidth)
          .height(newWidth * $el.data('aspectRatio'));
      });

    // Kick off one resize to fix all videos on page load
    }).resize();
  });
})(jQuery, document, window);
