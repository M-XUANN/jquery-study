$(function(){
	var bigImg='';
	var _index=0;
	$(".popup").click(function(){
		$(".show").hide();
		$(this).hide();
	});
	$(".center img").click(function(){
		$(".popup").show();
		$(".show").show();
		bigImg=$(this).attr("src");//获取点击图片的地址
		//alert(bigImg);
		$(".show img.big").attr("src",bigImg); //更换大图的图片地址
		_index=$(this).index("img");//保存图片的序列号
		//alert(_index);
	});
	$(".right").click(function(){
        _index++; //序列号加1 _index+1
		if(_index>27){_index=0};
		bigImg=$(".center img").eq(_index).attr("src");
		$(".show img.big").attr("src",bigImg);
		
		
		});
	$(".left").click(function(){
		_index--; //序列号加1 _index+1
		if(_index<-1){_index=27};
		bigImg=$(".center img").eq(_index).attr("src");
		$(".show img.big").attr("src",bigImg);
	});
})
$(document).ready(function(){
	  $("#a1").click(function(){  
	    $("#container1").show();   
		 $("#container2").hide();    
		 $("#container3").hide();  });
$("#a2").click(function(){  
   $("#container2").show();    
  $("#container1").hide();   
	 $("#container3").hide();  }); 
 $("#a3").click(function(){    
 $("#container3").show();  
   $("#container2").hide();    
   $("#container1").hide();  }); }); 