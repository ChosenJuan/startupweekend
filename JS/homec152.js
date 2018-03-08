if (!Fundable) { var Fundable = {}; }

Fundable.Home = {
	init:function() {

		$('div.slide-control a:first').addClass('active');		
		$('div.slide-wrapper').cycle({
			'slides': '> div.slide',
			'speed': 1500,
			'pause-on-hover': false,
		});
		$('div.slide-wrapper div.slide:first').fadeIn(250, function() {
			$('div.slide-wrapper').cycle({
				'slides': '> div.slide',
				'speed': 1500,
				'pause-on-hover': true,
			});
			$('div.slide-wrapper').on('cycle-before', function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
				$('div.slide-control a').removeClass('active');
				var postId = $(incomingSlideEl).attr('data-post-id');
				$('div.slide-control').find('a:eq('+($(incomingSlideEl).index()-1)+')').addClass('active');
			});
		});
		$(document.documentElement).keyup(function (event) {
			if (event.keyCode == 37){
				$('div.slide-wrapper').cycle('prev');
			}else if (event.keyCode == 39){
				$('div.slide-wrapper').cycle('next')
			}
		});
	},
};

$(document).ready(function() {
	Fundable.Home.init();
});