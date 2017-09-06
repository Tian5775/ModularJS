// JavaScript Document
define(

	function($){
		var num = 22;
		var ale = function(){
			console.log("b");	
			console.log($("p").text());
		}
	
		return{
			ale:ale	,
			num:num
		}
	}
);