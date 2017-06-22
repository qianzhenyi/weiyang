
//第二屏图片切换////////////////////////////////////////////////////
	  var num=0;
		$(".two .imgb").click(function(){
			num++;
			if(num>3){
				$(".qie").css("left",0);
				num=1;
			}
			$(".qie").animate({
	    		"left":num*(-370)+"px"    		
	    	},1000);	
			
		})
	
	$(".two .imga").click(function(){
			num--;
			if(num<0){
				$(".qie").css("left",-1126);
				num=2;
			}
			$(".qie").animate({
	    		"left":num*(-370)+"px"    		
	    	},1000);	
			
		})
///////头部轮播////////////////////////////////////////////////////////////
	    var q=0;
		var t=setInterval(Fun,1000)
	   function Fun(){
		if(!$(".one ul").is(":animated")){   	
		         q++;
			    if(q==3){				
				 q=1;
				$(".one ul").css("left",0);	
			}

			$(".one ul").stop().animate({
	    		"left":-q*1440+"px"	    		
	    	},2000);	
        }
		}

			
			
  $(".one").mouseover(function(){
 		clearInterval(t);
  })
 
  $(".one").mouseout(function(){
  	t=setInterval(Fun,1000)
  })
 
	$(".imgright").click(function(){	
		clearInterval(t);
		Fun();
	})
	
// $(".imgleft").click(function(){	
//		if(!$(".one ul").is(":animated")){   	
//		         q--;
////			    if(q<0){				
////				 q=2;
////				$(".one ul").css("left",0);	
////			}
//
//			$(".one ul").stop().animate({
//	    		"left":-q*1440+"px"	    		
//	    	},2000);	
//      }
//	})


//头部导航//////////////////////////////////////////////////////////////
 
   $(document).scroll(function(){
	var a=$(document).scrollTop();
	if(a>=1){
		$(".top").css("background","black");
	}else if(a==0){
		$(".top").css("background","rgba(0,0,0,0)");
	}
  })

   $(".hoverli").hover(function(){
	
		$(".hover").slideDown();
		$(".hover2").css("display","none");
		$(".top_center ul .hoverli p").css("display","block");
//		$(".hoverli").siblings().children().css("display","none");
	  $(".top_center ul .hoverli2 p").css("display","none");
   })

	$(".hoverli2").hover(function(){
		
		$(".hover2").slideDown();
		$(".hover").css("display","none");
		$(".top_center ul .hoverli2 p").css("display","block")
//		$(".hoverli2").siblings().children().css("display","none");
	$(".top_center ul .hoverli p").css("display","none");
	})
	
	$(".hover").hover(function(){
		
		$(".hover").css("display","block")
		
	},function(){
		
		$(".hover").css("display","none");
	
		$(".top_center ul .hoverli p").css("display","none")
	})
	
	$(".hover2").hover(function(){
		
		$(".hover2").css("display","block")
		
	},function(){
		
		$(".hover2").css("display","none")
		$(".top_center ul .hoverli2 p").css("display","none")
	})
	
	$(".top_center").click(function(){
		$(".hover").css("display","none");
		$(".hover2").css("display","none");
		
	})

console.log($(window).width())


