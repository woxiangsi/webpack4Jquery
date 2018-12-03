import $ from 'jquery';
import router from './router/router.js';
const routerRoot = router.routes;
const main = $(".main");
window.onload = function() {
	var pageIndex = 0;
	setRouter(pageIndex);
	$(".upBnt").click(function(){
		if(pageIndex<=0){
			pageIndex = 0;
		}else{
			pageIndex--;
		}
		
		setRouter(pageIndex);
	})
   	$(".nextBnt").click(function(){
   		if(pageIndex>=(routerRoot.length-1)){
			pageIndex = routerRoot.length-1;
		}else{
			pageIndex++;
		}
   		
   		setRouter(pageIndex);
	})
	$(".menu").click(function(e){
		console.log(e)
		for(var i=0;i<routerRoot.length;i++){
			if(routerRoot[i].name == e.target.id){
				pageIndex = i;
				setRouter(pageIndex);
				return
			}
		}
		
	})
	function setRouter(pageIndex){
		window.location.href = '#'+routerRoot[pageIndex].name;
   		main.html(routerRoot[pageIndex].template);
	}
   
}