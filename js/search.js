$(document).ready(function  () {
	if (!$('#search').get(0).autofocus) {
		$('#search')[0].focus();
		console.log("JS focus");
	};
	$('#btn').click(function (event) {
		event.preventDefault();// 阻止默认的表单域传送
	    
	    if ($('.info-reg')) {
	    	$('.info-reg').remove();
	    };
	    /**
	     * 空输入检测，为空改变input边框颜色,感叹号提示
	     * @param  {string} $('#search').val() input输入
	     * @return {}                    
	     */
		if ($('#search').val() == '') {
			var alert = $('<span class="info">输入为空</span>')
						.appendTo($(".search"))
						.fadeOut(8000,function  () {
							$(this).remove();
						});
			$('#search').focus()
						.css({'border-color':'red'},'fast');
			return;
		}
		
		
		/**
		 * 字符串过滤，
		 * @param  {integer} var i 临时循环变量
		 * @return {none}     含有特殊字符退出
		 */
		var result = false;
		var reg = new RegExp("[a-zA-Z]",'gi');
		for (var i = $('#search').val().length - 1; i >= 0; i--) {
			result = reg.test( $('#search').val() );
			if (!result) {
				// console.log("not match $result is "+result);
				$('<div class="info-reg">请输入英文单词!!!</div>')
				.appendTo($(".entry"))
				.animate({"opacity":1,"top":0},'slow');
				return;
			}
		};	
	});

	$('#search').focus(function  () {
		if ($(this).text() == "") {
			$(this).css({'borderColor':'rgb(146,51,51)',
					'border-right-width': 0,
					 'color':'initial'
					});
		};
	}).blur(function  () {
		$(this).css({'borderColor':'#ccc','border-right-width': 0});
	})
})



