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
/***************header********************/

/****************banner*********************/
//将速度去掉,速度靠计算得到
	function move(obj,json,fn) {
	    clearInterval(obj.timer);
	    var cur = 0;
	    obj.timer = setInterval(function () {
	        var isTrue = true;
	        for(var attr in json){
	            //如果attr是opacity
	            if(attr === "opacity"){
	                cur = Math.round(getStyle(obj,attr)*100);
	            }else{
	                cur = parseInt(getStyle(obj,attr));
	            }
	
	            speed = (json[attr] - cur)/8;
	            //对速度取整
	            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
	
	            if(cur !== json[attr]){
	                isTrue = false;
	                if(attr === "opacity"){
	                    obj.style.opacity = (cur + speed)/100
	                    obj.style.filter = "alpha(opacity="+(cur+speed)+")";
	                }else{
	                    obj.style[attr] = cur + speed + 'px';
	                }
	            }
	        }
//	        console.log(isTrue)
	        //等所有属性都到达目标值  再结束动画
	        if(isTrue){
	            clearInterval(obj.timer);
	            fn && fn.call(obj);
	        }
	    },30)
	}
	function getStyle(obj,attr) {
	    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
	}
	
	var btnL = document.getElementsByClassName('btn-l')[0],
	    btnR = document.getElementsByClassName('btn-r')[0],
	    bannerBox = document.getElementsByClassName('banner-box')[0],
	    botBox = document.getElementsByClassName('bot-box')[0],
	    bots = botBox.getElementsByTagName('li'),
	    num = 0;
//	    alert(botBox);
/******right******/
	btnR.onclick = function () {
	    num ++;
	    if(num === bots.length){
	        num = 0;
	    }
	    move(bannerBox,{
	        marginLeft: -num*715			//就是不加分号
	    })
	    for (var i=0,len=bots.length;i<len;i++){
	        bots[i].className = "";
	    }
	    bots[num].className = "active";
	}
	/*******left*******/
	btnL.onclick = function () {
//	    console.log(num);
	    num --;
	    if(num < 0){
	        num = bots.length - 1;
	    }
//	    console.log(num)
	    move(bannerBox,{
	        marginLeft:-num*715
	    })
	    for (var i=0,len=bots.length;i<len;i++){
	        bots[i].className = "";
	    }
	    bots[num].className = "active";
	}
	/*******dots*******/
	for(var i=0,len=bots.length;i<len;i++){
	    bots[i].index = i;
	    bots[i].onclick = function () {
	        //alert(this.index)
	        num = this.index;
	        move(bannerBox,{
	            marginLeft: -num*715
	        })
	        for(var j=0;j<bots.length;j++){
	            bots[j].className = "";
	        }
	        this.className = "active";
	    }
	}

/*****banner循环起来******/
function bannerChange(){
	timer1=setInterval(function(){
		num ++;
		if(num == bots.length){
		        num = 0;
		}
		move(bannerBox,{
		    marginLeft:-num*715
		})
		for (var i=0,len=bots.length;i<len;i++){
		    bots[i].className = "";
		}
		    bots[num].className = "active";
	},2000)
}
bannerChange();
bannerBox.onmouseover=function(){
	clearInterval(timer1);
}
bannerBox.onmouseout=function(){
	bannerChange();
}

























