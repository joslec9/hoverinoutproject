$(document).ready(function() {
			console.log(this);
			$('div').hover(function() {
				$('img.'+this.id).fadeOut()}, function() {
				$('img').fadeIn();
			});
		});