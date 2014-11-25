head.ready(function() {

	//cycle progress bar
	var progress = $('.progress-bar'),
		slideshow = $( '.cycle-slideshow' );

	slideshow.on( 'cycle-initialized cycle-before', function( e, opts ) {
		progress.stop(true).css( 'width', 0 );
	});

	slideshow.on( 'cycle-initialized cycle-after', function( e, opts ) {
		if ( ! slideshow.is('.cycle-paused') )
			progress.animate({ width: '100%' }, opts.timeout, 'linear' );
	});

	slideshow.on( 'cycle-paused', function( e, opts ) {
		progress.stop();
	});

	slideshow.on( 'cycle-resumed', function( e, opts, timeoutRemaining ) {
		progress.animate({ width: '100%' }, timeoutRemaining, 'linear' );
	});

	//cycle keyboard
	$(document.documentElement).keyup(function (event) {
			if (event.keyCode == 37) {
				$('.cycle-slideshow').cycle('prev');
			} else if (event.keyCode == 39) {
				$('.cycle-slideshow').cycle('next')
		}
	});

});