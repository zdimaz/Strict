;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			/* self.NameFunction*/
			self.AnimateAnchor();

		},

		windowLoad: function(){

			var self = this;

			/* self.NameFunction*/

		},

		/*
		*
		*	Remove Default Anchor end add animate scroll for id
		*
		*/

 		AnimateAnchor: function() {

	        $('a[href^="#"]').on('click',function(e){

	            e.preventDefault();

	            var id  = $(this).attr('href'),
	                top = $(id).offset().top;

	            $('html, body').stop().animate({scrollTop: top }, 2000);

	        });

 		},


 		/*
		*
		*	NameFunction
		*
		*/

 		NameFunction: function() {

 		},


	}


	$(document).ready(function(){

		Core.DOMReady();


	});

	$(window).load(function(){

		Core.windowLoad();

	});

})(jQuery);