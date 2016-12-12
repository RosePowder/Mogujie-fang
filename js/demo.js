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
	
