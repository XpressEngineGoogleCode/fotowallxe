/* for dropdown ui */
var lastDropdown = null;
var lastDropdownTitle = null;
function dropdownEvent(parent) {
	jQuery(parent).find(".dropdown dt a").click(function() {
		closeEvent();

		var root = jQuery(this).parent().parent();

		var nowDropdown = root.find("dd ul");
		var nowDropdownTitle = jQuery(this).parent();

		if(nowDropdown != lastDropdown) {
			if(lastDropdown != null) lastDropdown.hide();
			lastDropdown = nowDropdown;
		}

		if(nowDropdownTitle != lastDropdownTitle) {
			if(lastDropdownTitle != null) lastDropdownTitle.removeClass('down');
			lastDropdownTitle = nowDropdownTitle;
		}

		if(nowDropdown.toggle().css('display') == 'none') {
			nowDropdownTitle.removeClass('down');
		} else {
			nowDropdownTitle.addClass('down');
		}

		return false;
	});

	jQuery(parent).find(".dropdown dd ul li a").click(function() {
		if(jQuery(this).attr('disabled') == 'disabled') {
		} else {
			var root = jQuery(this).parent().parent().parent().parent();
			var text = jQuery(this).html();
			var to = jQuery(this).attr('href').split('#')[1];

			if(to != '') {
				var to2 =  to.split('@');

				if(to2.length == 2) {
					jQuery('#' + to2[0]).val(to2[1]).change();
				} else {
					jQuery('#' + to).val(text).change();
				}
			}

			jQuery(root).find("dt a span").html(text);
			jQuery(root).find("dd ul").hide();
			jQuery(root).find("dt").removeClass("down");
		}			
		return false;
	}); 
}

function dropdownCloseEvent() {
	jQuery(document).bind('click', function(e) {
		closeEvent(e.target);
	});
}

function closeEvent(obj) {
	$obj = jQuery(obj);
//	if (!$obj.parents().hasClass("dropdown")) {
		jQuery(".dropdown dd ul").hide();
		jQuery(".dropdown dt").removeClass("down");
		
		lastDropdown = null;
		lastDropdownTitle = null;
//	}
}

jQuery(function() {
	jQuery(".dropdown").parent().parent().css('overflow','visible');
	/* dropdown */
	dropdownEvent(document);
	dropdownCloseEvent();
});