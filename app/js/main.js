'use strict';
var $ = require('jquery');
$(document).ready(function(){


	$(".control_selector").on("change",function(e){

		console.log($(this).attr("id"));
		var idAttr = $(this).attr("id")
		var regexpTop = /^top/,regexpBot = /^bottom/;
		var regexpGetActualClass = /(bkg_[a-z_]{6,20})/;
		if (regexpTop.test(idAttr)){

			var arrActualClass = regexpGetActualClass.exec($("#img_top").attr("class"));
			var newClass = "bkg_top_"+$(this).val();
			$("#img_top").removeClass(arrActualClass[0]);
			$("#img_top").addClass(newClass);

		}


		if (regexpBot.test(idAttr)){

			var arrActualClass = regexpGetActualClass.exec($("#img_bottom").attr("class"));
			var newClass = "bkg_bottom_"+$(this).val();
			$("#img_bottom").removeClass(arrActualClass[0]);
			$("#img_bottom").addClass(newClass);
		}

	})

});