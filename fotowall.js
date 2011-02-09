jQuery(document).ready(function(){	
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
	}
});