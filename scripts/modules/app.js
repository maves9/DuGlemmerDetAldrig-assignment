/*
*   Footer
*/

$(document).ready(function() {

  "use strict";

  var $el = $("[data-js=footer]");

  if ($el.length)  init($el);

});

function init($el) {

  var toggleContainer = $el.find("[data-js=footerToggleContainer]"),
      toggleBtn = $el.find("[data-js=footerToggleBtn]"),
      toggleBtnText = toggleBtn.attr('data-toggle-text'),
      btnText = toggleBtn.text();

  toggleContainer.css('display', 'none');

  $el.on( 'click', '[data-js=footerToggleBtn]', function() {

    var $this = $(this);

    toggleContainer.slideToggle();
    toggleBtn.toggleClass('open');

    if (toggleContainer.attr('data-expand') === "false") {

      $this.text(toggleBtnText);
      toggleContainer.attr('data-expand', 'true');

    }else {

      $this.text(btnText);
      toggleContainer.attr('data-expand', 'false')
    }
  });

}
