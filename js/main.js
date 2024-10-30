var manySlides = 		0,
	realWidthMini = 	0,
	sliderCounter = 	0,
	sliderSpeed = 		400,
	$buttonsSlider,
	$next,$prev;

/*Slider*/

function controlsSlider() {
	if ( sliderCounter == (manySlides - 1) ) {
		$next.hide();
	}else if ( sliderCounter == 0 ) {
		$prev.hide();
	}
	else if ( sliderCounter == 1 ) {
		$prev.show();
	}
	
	if ( $prev.css( 'display') == 'none' && sliderCounter > 0 ) {
		$prev.show();
	}
	else if ( $next.css( 'display') == 'none' && sliderCounter < ( manySlides - 1 ) ) {
		$next.show();
	}
	
}

function createSlider( $containerSlider ) {
	var $containerSliderList =		$containerSlider.find( 'ul' ),
		$miniSliderContainer =  	$containerSliderList.clone();
		
		$miniSliderContainer.addClass( 'miniSlider' ).removeClass( 'big' ).appendTo( $containerSlider );
		
		var $containerSliderList =		$containerSlider.find( '.big' ),
		$containerMiniSliderList =		$containerSlider.find( '.miniSlider' ),
		$miniSliderElements =			$containerMiniSliderList.find( 'li' );
		manySlides = 				$miniSliderElements.length;
		
		$containerSliderList.width( manySlides * 100 + '%');
		
		
		realWidthMini = $miniSliderContainer.find( 'li').width() + parseInt($miniSliderContainer.find( 'li').css( 'margin-right' ));
		
		var $elementsMiniSlider = 	$miniSliderContainer.find( 'li' );
		
		$buttonsSlider.on( 'click', function() {
			var $this = 		$(this);
			if ( $this.hasClass( 'next' ) && sliderCounter < ( manySlides - 1 ) ) {
				sliderCounter++;
			}
			else if ( $this.hasClass( 'prev' ) && sliderCounter > 0 ) {
				sliderCounter--;
			}
			
			controlsSlider();

			$containerSliderList.animate({
				left: '-' + sliderCounter * 100 + '%'
				}, sliderSpeed, function() {
				
				$elementsMiniSlider.removeClass( 'active' );
				$elementsMiniSlider.eq(sliderCounter).addClass( 'active' );					
			});
		});
		
		$miniSliderElements.on( 'click', function() {
			var $this =				$( this ),
			whoClick =				$this.index();
			$containerSliderList.animate({
				left: '-' + 100 * whoClick +'%'
				}, sliderSpeed, function() {
				
				$elementsMiniSlider.removeClass( 'active' );
				$elementsMiniSlider.eq(whoClick).addClass( 'active' );
				sliderCounter = 		whoClick;
				controlsSlider();
			});
			
			/*$miniSliderContainer.animate({
				left: '-=' + realWidthMini + 'px',
				}, sliderSpeed, function() {
				sliderCounter++;
				$elementsMiniSlider.removeClass( 'active' );
				$elementsMiniSlider.eq(sliderCounter).addClass( 'active' );
			});*/
		});
		
}

/*Slider*/

/* Video */
function showVideo(type, id) { 
	
	var html = '';
	if (type.toLowerCase() == 'youtube') {
		html += '<div id="video_player" class="youtube">';
		html += '	<iframe src="https://www.youtube.com/embed/'+id+'?rel=0" frameborder="0" width="100%" height="100%"></iframe>';	
	}
	else if (type.toLowerCase() == 'kewego')  {
		html += '<div id="video_player" class="kewego">';
		html += '	<video id="video-js-'+id+'" class="video-js vjs-default-skin" width="100%" height="100%">';
		html += '		<source src="https://apissl.kewego.com/video/getHTML5Stream/?playerKey=26b3e48babb5&sig='+id+'" type="video/mp4" />';
		html += '		<source src="https://apissl.kewego.com/video/getHTML5Stream/?playerKey=26b3e48babb5&sig='+id+'&format=ogg_w960" type="video/ogg" />';
		html += '	</video>';
	}
	html += '</div>';
	
	$.lightbox({
		html: html,
		//inline : '#video_player',
		onComplete : function() {
			if (type.toLowerCase() == 'kewego') {
				videojs.options.flash.swf = "./swf/video-js.swf";
				//videojs.options.flash.swf = "{main.swf.videojs}";
				videojs('video-js-'+id, {"controls": true, "preload": "auto"}, function(){	
					this.play();
				});
			}
		},
		onCleanup : function() {
			if (type.toLowerCase() == 'kewego') {
				$('#lboxLoadedContent').html('');
				var myPlayer = videojs('video-js-'+id);
				myPlayer.dispose();
			}
		}
	});
}

$(document).ready(function() {
	
	if ($('#nofont').attr('data-content') == 'true') {
		$('h1').addClass('nofont');
		$('h2').addClass('nofont');
		$('p').addClass('nofont');
		$('#header li a').addClass('nofont');
		$('#eurocup #sec_04 a.button').addClass('nofont');
		$('#footer p').addClass('nofont');
		$('#footer a.button').addClass('nofont');
		$('#back a.button').addClass('nofont');
		$('#social p').addClass('nofont');
		
		
		$('#theCalendar #circuits li .title').addClass('nofont');
		$('#theCalendar #circuits li .title .date span').addClass('nofont');
		$('#theCalendar #circuits li .title .name').addClass('nofont');
		$('#theCalendar #circuits li .title .alias').addClass('nofont');
		$('#theCalendar #circuits li .records').addClass('nofont');
		$('#theCalendar #circuits li .records dl dt').addClass('nofont');
		$('#theCalendar #circuits li .records dl dd').addClass('nofont');
		$('#theCalendar #circuits li .schedule h3').addClass('nofont');
		$('#theCalendar #circuits li .schedule dl dt').addClass('nofont');
		$('#theCalendar #circuits li .schedule dl dd').addClass('nofont');
		$('#theCalendar #menuCircuits li a').addClass('nofont');
		$('#theCalendar #menuCircuits li a .date').addClass('nofont');
		$('#theCalendar #menuCircuits li a .name').addClass('nofont');
		$('#theCalendar #driversTeams .teamContainer .title').addClass('nofont');
		$('#theCalendar #driversTeams .teamContainer strong').addClass('nofont');
		$('#theCalendar #driversTeams .teamContainer strong a').addClass('nofont');
		$('#theCalendar #driversTeams .teamContainer .up .team').addClass('nofont');
		
		
		
		
	}
	
	//alert($('body').attr('id'));
	var page = $('body').attr('id');
	if(page == 'thecar') {
		/* Lightbox gallery */
		$("#thecar #sec_04 .box.gallery a").lightbox({
			rel:'#thecar #sec_04 .box.gallery a',
			/*
			onComplete : function() {
				if ($('#nofont').attr('data-content') == 'true') {
					$('#lboxTitle .title').addClass('nofont');
					$('#lboxTitle .subtitle').addClass('nofont');
				}
			}
			*/
		});
		//new
	}else if ( page == 'eurocup' ) {
	
		$("#sec_end01 .playButton .video").on('click', function() {
			var $this = 	$(this);
			
			var type = $this.prev().attr('data-type');
			var id = $this.prev().attr('data-id');
			
			showVideo(type, id);
		});
	}
	//new
	
	//slider ---------------------------------------
	var $containerSlider =			$( '#containerSlider' );
	
	$buttonsSlider =			$containerSlider.find( '.buttonSlider' ),
	$next =					$containerSlider.find( '.next' ),
	$prev =					$containerSlider.find( '.prev' );
	
	createSlider( $containerSlider );
	
});