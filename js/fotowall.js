// 너비가 조절됨에 따라 보이거나 보이지 않아야할 element 정함
function autoToolSize(width) {
	if(width < 480 || full_width < 480) {
		jQuery(".trackbackURL dt").hide();
	} else {
		jQuery(".trackbackURL dt").show();
	}
}

// 소셜공유 : 트위터
function sendTwitter(obj, message) {
//	obj.href = "http://twitter.com/home/?status=" + encodeURIComponent(message);
	window.open("http://twitter.com/share/?url=" + encodeURIComponent(message) + "", 'twitterSend', 'width=640, height=356');
	return false;
}

// 소셜공유 : 페이스북
function sendFacebook(obj, link) {
	window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(link) + "&src=sp", 'facebookSend', 'width=500, height=356');
	return false;
}

// 소셜공유 : 요즘 ( 미포함 )
function sendYozm(obj, message, link) {
	window.open("http://yozm.daum.net/api/popup/prePost?link="+link+"&prefix="+encodeURIComponent(message), 'yozmSend', 'width=500, height=356');
	return false;
}	

jQuery(document).ready(function(){	
	dropdownEvent(document);

	// 자동으로 특정 영역내에서는 화면에서 사라지지 않도록 설정함
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