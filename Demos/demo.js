var LoopTest = new Class({
	
	Implements: Loop,
	
	initialize: function(log){
		this.setLoop(this.up, 100);
		this.log = document.id(log);
	},
	
	up: function(count){
		this.log.set('text',"Looped up " + count + " times.");
	},

	down: function(count){
		this.loopCount = count - 2;
		this.log.set('text',"Looped down " + this.loopCount + " times.");
	}
  
});

window.addEvent('domready',function(){

	loop = new LoopTest('log');

	$('start').addEvent('click',function(){
		loop.startLoop();
	});
  
	$('stop').addEvent('click',function(){
		loop.stopLoop();
	});

	$('reset').addEvent('click',function(){
		loop.resetLoop();
	});

	$('restart').addEvent('click',function(){
		($('up').checked) ? 
			loop.setLoop(loop.up, $('delay').value) : 
			loop.setLoop(loop.down, $('delay').value);
	});

});