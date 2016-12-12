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
/*****某一位置出现固定搜索半透明框*****/
var claritySearch=document.querySelector('.clarity-search');
window.onscroll=function backTop1(){
	var scrollT=document.documentElement.scrollTop || document.body.scrollTop;//兼容
	if(scrollT<600){
		backT.style.display="none";
		claritySearch.style.display="none";
	}else{
		backT.style.display="block";
		claritySearch.style.display="block";
	}
	backT.onclick=function backTop2(){
		document.documentElement.scrollTop=0;
		document.body.scrollTop=0;
	}
}
