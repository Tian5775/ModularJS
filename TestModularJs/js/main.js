// JavaScript Document
require.config({
	paths: {
		"jquery": "../plugins/jquery.min",
		"a":"a"
	}
});

require(["a","b"],function(a,b){
	a.ale();
	a.ab();
	b.ale();
});