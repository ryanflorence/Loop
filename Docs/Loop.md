Class: Loop {#Loop}
===================

A Utility Class. Its methods can be implemented with  [Class-implement][1] into any [Class][2]. Used to run a class method on a periodical.

[1]: http://mootools.net/docs/core/Class/Class/#Class:implement
[2]: http://mootools.net/docs/core/Class/Class

### Demo:

* [Simple Counter @ mooshell](http://mooshell.net/rpflo/Abzc4/)
<iframe src="http://mooshell.net/rpflo/Abzc4/embedded/?tabs=result,js,html" style="width: 100%; height:275px"></iframe>

### Syntax:

#### For new classes:

    var MyClass = new Class({Implements: Loop});

#### For existing classes:

    MyClass.implement(Loop);

### Properties:

1. loopCounter - (`number`) The current number of loops.
2. looping - (`boolean`) True if looping, false if stopped.
3. stopped - (`boolean`) True if stopped, false if looping.

### Example:

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

Loop Method: setLoop {#Loop:setLoop}
-------------------------------------

Assigns the class method, with it's delay, to be looped.

### Syntax:

    MyClass.setLoop(this.method, 3000);


### Arguments:

1. fn - (`function`) The function to be called on a periodical.
2. delay - (`number`: defaults to 3000) The time in milliseconds passed to the periodical.

### Returns:

* (`object`) The current Class object.

### Note:

The method assigned to the loop receives the `loopCounter` argument.  As shown in the example above with `update`.

Loop Method: stopLoop {#Loop:stopLoop}
-------------------------------

Stops the periodical.

### Syntax:

    myInstance.stopLoop();

### Returns:

* (`object`) The current Class object. 



Loop Method: startLoop {#Loop:startLoop}
---------------------------------

Starts the periodical.

### Syntax:

    myInstance.startLoop();

### Arguments:

1. delay - (`number`: defaults to the instance delay) The delay for the periodical.  Unless defined when called, it will use whatever was set for delay in `setLoop(fn,delay)`.

### Returns:

* (`object`) The current Class object.



Loop Method: resetLoop {#Loop:resetLoop}
---------------------------------

Resets `loopCount` to `0`.

### Syntax:

    myInstance.resetLoop();

### Returns:

* (`object`) The current Class object.
