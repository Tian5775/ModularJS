// JavaScript Document
define(
	[
		"jquery"
	],

	function($){
		var num = 11;
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