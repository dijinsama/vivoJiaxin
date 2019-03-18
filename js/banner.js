<script type="text/javascript">
	//定义全局变量  时间 和当前图片下标  第一张图 =0
	var myTimer; 
	var currIndex=0;
	//1、自动播放
	function autoPlay(){
		//一、数据处理
		//1、改变数据
		myTimer=setInterval(()=>{
			currIndex++;
		//2、处理边界
			if(currIndex>4){
				currIndex=0;
			}
		//二、改变外观
		//1、改图片
			for(let i=0;i<$("img").length;i++){
				$("img")[i].style.zIndex=1;
			}
			$("img")[currIndex].style.zIndex=2;
		//2、改豆豆
			let liDoms=$("#doudouBox").children;
			for(let i=0;i<liDoms.length;i++){
				liDoms[i].style.backgroundColor="pink";
			}
			liDoms[currIndex].style.backgroundColor="red";
		},1000);	
	}
	//2、鼠标划上去停止
	function stopPlay(){
		window.clearInterval(myTimer);
	}
	//3、鼠标移开继续自动播放

	//4、点击小豆豆跳转到相对应的图片
	function goImg(index){
		//一、数据处理
		//1、改变数据
			currIndex=index;
		//2、处理边界
			if(currIndex>4 || currIndex<0){
				currIndex=0;
			}
		//二、改变外观
		//1、改图片
			for(let i=0;i<$("img").length;i++){
				$("img")[i].style.zIndex=1;
			}
			$("img")[currIndex].style.zIndex=2;
		//2、改豆豆
			let liDoms=$("#doudouBox").childern;
			for(var i=0;i<liDoms.length;i++){
				liDoms[i].style.backgroundColor="pink";
			}
			liDoms[currIndex].style.backgroundColor="red";	
	}
// 调用
window.onload=function(){
		autoPlay();

	$("#box").onmouseenter=function(){
			stopPlay();
	}
	$("#box").onmouseleave=function(){
			autoPlay();
	}
	let liDoms=$("#doudouBox").children;
	for(let i=0;i<liDoms.length;i++){
		liDoms[i].onclick=function(){
			goImg(this.getAttribute("index"));
		}
	}
}
//获取
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
} 
</script>