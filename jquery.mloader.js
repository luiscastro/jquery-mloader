/*
 * jQuery Media Loader Plugin 1.0
 */
(function($) {

  var methods = {
    load : function(path) {
      path = $.trim(path);
      if (path != "") {
        type = $(this).mloader("identify", path);
        switch(type) {
          case "stylesheet":
            $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', path) );
            break;
          case "javascript":
            $.getScript(path);
            break;
          case "image":
            if ($(this).is("img")) {
              $(this).attr("src", path);
            }
            else {
              $(this).html($('<img/>').attr("src", path));
            }
            break;
          default:
            $.get(path, function(data) {
              $(this).html(data);
            });
            break;
        }
      }
    },
    identify: function(path) {
      file = path.split(".");
      ext = file[file.length - 1];
      if (ext == "css") {
        return "stylesheet";
      }
      else if (ext == "js") {
        return "javascript";
      }
      else if (ext == "png" || ext == "gif" || ext == "jpeg" || ext == "jpg") {
        return "image";
      }
    },
  };

  $.fn.mloader = function( method ) {

    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.mloader' );
    }

  };

})(jQuery)
