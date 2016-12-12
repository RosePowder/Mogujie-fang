/*************右侧导航***************/
/****经过变色******/
	var shoppingCar=document.querySelector('#shoppingCar');
	var coupon=document.querySelector('#coupon');
	var wallt=document.querySelector('#wallt');
	var footmark=document.querySelector('#footmark');
	var backT=document.querySelector('.side-bottom');
function onmouseoverR(obj){
	obj.onmouseover=function rightMouseOverShow(){
	obj.style.background="#FF05CB";
	obj.style.borderBottom="0";
	}
	obj.onmouseout=function rightMouseOutShow(){
	obj.style.background="#333";
	obj.style.paddingTop="0";
	}	
}
onmouseoverR(shoppingCar);onmouseoverR(coupon);onmouseoverR(wallt);
onmouseoverR(footmark);onmouseoverR(backT);
/*****backTop*****/
//var backT=document.getElementById('backT');
window.onscroll=function(){
	var scrollT=document.documentElement.scrollTop || document.body.scrollTop;//兼容
	if(scrollT<600){
//		alert(1);
		backT.style.display="none";
	}else{
		backT.style.display="block";
	}
	backT.onclick=function(){
		document.documentElement.scrollTop=0;
		document.body.scrollTop=0;
	}
}
/******header*****/
var headerTop=document.getElementById('headerTop'),
	s13Wrap=headerTop.getElementsByClassName('s1')[3],
	s14Wrap=headerTop.getElementsByClassName('s1')[4],
	s15Wrap=headerTop.getElementsByClassName('s1')[5],
	ol1HideShow=s13Wrap.getElementsByTagName('ol'),
	ol2HideShow=s14Wrap.getElementsByTagName('ol'),
	ol3HideShow=s15Wrap.getElementsByTagName('ol');

	s13Wrap.onmouseenter=function(){
		ol1HideShow[0].style.display="block";
	}
	s13Wrap.onmouseleave=function(){
		ol1HideShow[0].style.display="none";
	}
	s14Wrap.onmouseenter=function(){
		ol2HideShow[0].style.display="block";
	}
	s14Wrap.onmouseleave=function(){
		ol2HideShow[0].style.display="none";
	}
	s15Wrap.onmouseenter=function(){
		ol3HideShow[0].style.display="block";
	}
	s15Wrap.onmouseleave=function(){
		ol3HideShow[0].style.display="none";
	}
	
/********banner-轮播在css中实现了*********/
/*************superday-banner轮播(失败)***************/
//function move(obj,json,fn) {
//	    clearInterval(obj.timer);
//	    var cur = 0;
//	    obj.timer = setInterval(function () {
//	        var isTrue = true;
//	        for(var attr in json){
//	            //如果attr是opacity
//	            if(attr === "opacity"){
//	                cur = Math.round(getStyle(obj,attr)*100);
//	            }else{
//	                cur = parseInt(getStyle(obj,attr));
//	            }
//	
//	            speed = (json[attr] - cur)/8;
//	            //对速度取整
//	            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
//	
//	            if(cur !== json[attr]){
//	                isTrue = false;
//	                if(attr === "opacity"){
//	                    obj.style.opacity = (cur + speed)/100
//	                    obj.style.filter = "alpha(opacity="+(cur+speed)+")";
//	                }else{
//	                    obj.style[attr] = cur + speed + 'px';
//	                }
//	            }
//	        }
////	        console.log(isTrue)
//	        //等所有属性都到达目标值  再结束动画
//	        if(isTrue){
//	            clearInterval(obj.timer);
//	            fn && fn.call(obj);
//	        }
//	    },30)
//}
//function getStyle(obj,attr) {
//  return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
//}
//var banner1Box=document.getElementsByClassName("banner1-box")[0];
////	alert(banner1Box);
//var liActive2=banner1Box.getElementsByTagName('li');
//	
//function bannerChange1(){
//	timer2=setInterval(function(){
//		for(var i=0;i<liActive2.length;i++){
//			move(banner1Box,{marginLeft:-num*1900
//		    })
//		}    
//	},2000)
//}
//bannerChange1();
/********尖货商品title经过变色在css中实现了*********/
/*****topgoods*****/
var TopgoodsClas=document.querySelector('.Topgoods-clas'),
	tdActive3=TopgoodsClas.getElementsByTagName('td');
function onmouseoverSuper(obj){
	obj.onmouseover=function superMouseOverShow(){
	obj.style.background="rgba(255,42,100,1)";
	
	}
	obj.onmouseout=function superMouseOutShow(){
	obj.style.background="rgba(255,255,255,.3)";
	
	}	
}
onmouseoverSuper(tdActive3);





