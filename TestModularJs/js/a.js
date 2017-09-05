// JavaScript Document
define(['b'],function(b){
	var ale = function(){
		console.log("a");
	}
	
	var ab = function(){
		b.ale();	
	}
	
	return{
		ale:ale	,
		ab:ab
	};
});