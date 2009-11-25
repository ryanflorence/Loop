var Loop = new Class({

	loopCount: 0,
	isStopped: true,
	isLooping: false,
	loopMethod: $empty,

	setLoop: function(fn,delay){
		if(this.isLooping) this.stopLoop();
		this.loopMethod = fn;
		this.loopDelay = delay || 3000;
		return this;
	},

	stopLoop: function() {
		this.isStopped = true;
		this.isLooping = false;
		$clear(this.periodical);
		return this;
	},

	startLoop: function(delay) {
		if(this.isStopped){
			var delay = (delay) ? delay : this.loopDelay;
			this.isStopped = false;
			this.isLooping = true;
			this.periodical = this.looper.periodical(delay,this);
		};
		return this;
	},

	resetLoop: function(){
		this.loopCount = 0;
		return this;
	},

	looper: function(){
		this.loopCount++;
		this.loopMethod(this.loopCount);
		return this;
	}

});
