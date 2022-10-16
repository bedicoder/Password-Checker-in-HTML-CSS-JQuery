/** @format */

$(document).ready(function () {
	$(".wrapper").on("focus", ".form-group input", function (e) {
		$(this).parent().addClass("active");
	});
	$(".wrapper").on("blur", ".form-group input", function () {
		if (!$(this).val().length > 0) {
			$(this).parent().removeClass("active");
		}
	});
	$(".wrapper").on("keyup", ".form-group input", function () {
		$(".wrapper .from").text($(this).val().length);
		if ($(this).val().length >= 6) {
			$(".wrapper .count").addClass("active");
		} else {
			$(".wrapper .count").removeClass("active");
		}
		if ($(this).val().search(/\d/) != -1) {
			$(".wrapper .number").addClass("active");
		} else {
			$(".wrapper .number").removeClass("active");
		}
		if (/[A-Z]/.test($(this).val())) {
			$(".wrapper .upper").addClass("active");
		} else {
			$(".wrapper .upper").removeClass("active");
		}
		if (/[@$%&-+*]/.test($(this).val())) {
			$(".wrapper .symbol").addClass("active");
		} else {
			$(".wrapper .symbol").removeClass("active");
		}
	});
	$(".wrapper").on("click", ".form-group .icon:not(.active)", function () {
		$(this).addClass("active");
		$(".wrapper input").attr("type", "text");
	});
	$(".wrapper").on("click", ".form-group .icon.active", function () {
		$(this).removeClass("active");
		$(".wrapper input").attr("type", "password");
	});
});
