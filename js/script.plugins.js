"use strict";
(function ($) {
  $(document).ready(function () {
    /* ------------------------------------------------
				Name function
		------------------------------------------------ */

    if ($("").length) {
    }
  });

  $(window).load(function () {
    /* ------------------------------------------------
            Parallax
        ------------------------------------------------ */

    if ($('[class*="shaded"]').length) {
      $('[class*="shaded"]').each(function () {
        $(this).parallax("50%", 0.2);
      });
    }

    /* ------------------------------------------------
            End Parallax
        ------------------------------------------------ */

    /* ------------------------------------------------
				Name function
		------------------------------------------------ */

    if ($(".portfolio").length) {
      $(".portfolio").magnificPopup({
        delegate: ".portfolio_zoom",
        type: "image",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">' +
          '<span class="fa fa-close" style="user-select: none; pointer-events: none;"></span>' +
          "</button>",
        gallery: {
          enabled: true,
        },
      });
    }

    /* ------------------------------------------------
				End of Name function
		------------------------------------------------ */

    /* ------------------------------------------------
				Name function
		------------------------------------------------ */

    if ($(".typed_txt").length) {
      $(".typed_txt").typed({
        strings: ["STRICT", "Power", "Strong", "Dеsign"],
        typeSpeed: 100,
        showCursor: false,
        loop: true,
      });
    }

    /* ------------------------------------------------
				End of Name function
		------------------------------------------------ */
  });
})(jQuery);
