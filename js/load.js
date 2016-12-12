var tab1 = document.getElementById('tab1'),
	sign = document.getElementById('signform'),
	tab2 = document.getElementById('tab2'),
	nosign = document.getElementById('nosignform');
	
	
tab1.onclick=function(){
	nosign.style.display = "none";
	sign.style.display = "block";
	tab2.style.color="aaa";
	tab2.style.height="43px";
	tab2.style.borderBottom="none";	
	tab1.style.color="#333";
	tab1.style.height="41px";
	tab1.style.borderBottom="2px solid #ff4066";	
}
tab2.onclick=function(){
	sign.style.display = "none";
	nosign.style.display = "block";
	tab1.style.color="aaa";
	tab1.style.height="43px";
	tab1.style.borderBottom="none";	
	tab2.style.color="#333";
	tab2.style.height="41px";
	tab2.style.borderBottom="2px solid #ff4066";	
}
//获取cookie
function getCookie(name){
    var arr1 = document.cookie.split(';');
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].split('=');
        if (arr2[0] === name) {
            return arr2[1];
        };
    };
    return '';
}
var ema = document.getElementById('ema'),
    msg1 = document.getElementById('msg1'),
    pwd = document.getElementById('pwd'),
    msg2 = document.getElementById('msg2'),
    btn = document.getElementById('btn');
var open1 = false,open2=false;
ema.onblur = function () {
    var req =  /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(req.test(ema.value)){        //邮箱格式正确
        msg1.innerHTML = "输入正确"
        msg1.style.color = "#0f0"
        open1 = true;
    }else{
        msg1.innerHTML = "请输入正确的邮箱格式"
        msg1.style.color = "#f00"
        open1 = false
    }
}
pwd.onblur = function(){
    var reg = /^\w{6,16}$/;
    if(reg.test(pwd.value)){
        msg2.innerHTML = "输入正确"
        msg2.style.color = "#0f0"
        open2 = true;
    }else{
        msg2.innerHTML = "请输入6~16位密码"
        msg2.style.color = "#f00"
        open2 = false;
    }
}

btn.onclick = function(){   //注册按钮
    if(open1 && open2){
        window.location.href="not-found.html"; 
        setCookie('email',ema.value,30);
        //alert(document.cookie)
    }else{
    	alert('请确认填入相关信息')
    }
}
function init(){
    //alert(getCookie('user'))
    if(getCookie('email')){
        ema.value = getCookie('email');
    }
}
init();


















