$(function() {

	var li = $(".img-container li");
	li.width(($(window).width()-4*3)/4);
	li.height(li.width());
	li.tap(function() {
		if ($(this).hasClass("selected")) {
			$(this).removeClass("selected");
			$(this).find(".selected").remove();
		} else {
		if ($("li.selected").length < 2) {
				$(this).addClass("selected");
				$(this).append('<div class="selected"><img src="images/selected.png" alt=""></div>');
			}
		}
	});

	function showResult() {
		if ($("li.selected").length == 2) {
			$("body").scrollTop(0);
			$("#choose").hide();
			$("#result").show();
		} else {
			alert("必须选择两个明星的照片")
		}
	}
});