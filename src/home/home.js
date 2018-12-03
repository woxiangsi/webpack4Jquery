require('./home.scss');
import $ from 'jquery';
window.onload = function() {
   $(".nextPage").click(function(){
		window.location.href = 'webHome.html';
	})
   
}