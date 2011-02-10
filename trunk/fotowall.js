function autoToolSize(width) {
	if(width < 480 || full_width < 480) {
		jQuery(".trackbackURL dt").hide();
	} else {
		jQuery(".trackbackURL dt").show();
	}
}

function sendTwitter(obj, message) {
//	obj.href = "http://twitter.com/home/?status=" + encodeURIComponent(message);
	window.open("http://twitter.com/share/?url=" + encodeURIComponent(message) + "", 'twitterSend', 'width=640, height=356');
	return false;
}

function sendFacebook(obj, link) {
	window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(link) + "&src=sp", 'facebookSend', 'width=500, height=356');
	return false;
}

function sendYozm(obj, message, link) {
	window.open("http://yozm.daum.net/api/popup/prePost?link="+link+"&prefix="+encodeURIComponent(message), 'yozmSend', 'width=500, height=356');
	return false;
}	

jQuery(document).ready(function(){	
	dropdownEvent(document);

	if(jQuery(".autoscroll").length > 0) {	
			var lastTo = 0;
			function scrollSidebar() {	
				jQuery(".autoscroll").each(function(i, item) {
					var $parent = jQuery('.autoscroll').parents();
					var $scroll = jQuery(item);

					var m_height = $parent.height();
					
					var w_t = jQuery(window).scrollTop();
					var s_t = $parent.position().top;
					var to = (w_t - s_t);

					if(to<-5) {
						to = -5;
					} else if(to>m_height) {
						to = m_height;
					}

					if(lastTo != to) {
						$scroll.css('top', to + 'px');
						lastTo = to;
					}	
				});
			}

		jQuery(window).scroll(function() {
			scrollSidebar();
		});

		scrollSidebar();	
		autoToolSize(jQuery(window).width());
	}
});