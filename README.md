Loop
====

![Loop](http://github.com/rpflorence/Loop/raw/master/Assets/logo.png)

A Utility Class. Its methods can be implemented with  Class-implement into any Class. Used to run a class method on a periodical.

Useful in galleries, slideshows, tickers, sprite animations, pulsing, logout scripts, etc.  Anything that needs to run the same function repeatedly.

How to use
----------

### Example:

    #JS
    var Widget = new Class({
      
      Implements: Loop,
      
      initialize: function(log){
        this.setLoop(this.update, 1000);
        this.log = document.id(log);
      },
      
      update: function(count){
        this.log.set('text',"Looped " + count + " times");
      }
      
    });
    
    var myWidget = new Widget('log').startLoop();
    

View the [MooDoc](http://moodocs.net/rpflo/mootools-rpflo/Loop) for usage and examples.