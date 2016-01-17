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
	    var reg = new RegExp("[a-zA-Z]","gi");
	    detect($("#search").val(),reg,function  () {
	    	$('<div class="info-reg">请输入英文单词!!!</div>')
				.appendTo($(".entry"))
				.animate({"opacity":1,"top":0},'slow');
	    },function  () {
	    	//true
	    	alert("true");
	    })
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

 function detect (inputString, reg, falseCallback, trueCallback) {
	var input = inputString.trim(); //删除前置后置空格
	console.clear();
	console.log(input);
	var result = false;
	var i = input.length;
	do{
		result = reg.test(input);
		console.log( i.toString() + " : " +result);
		if (!result) {
			if (arguments.length >= 3){ falseCallback();}
				console.log("非法字符");
				return;
			};
		i--;
	}while(i>0)
	if (arguments.length == 4) {trueCallback();}
}


