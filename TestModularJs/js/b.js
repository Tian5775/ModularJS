// JavaScript Document
require.config({
	paths: {
		"c":"../plugins/c"
	}
});


define(
	[
		"jquery",
		"c"
	],

	function($,c){
		var num = 11;
		var ale = function(){
			console.log("b");	
			console.log($("p").text());
			console.log(c.num);
		}
	
		return{
			ale:ale	,
			num:num
		}
	}
);