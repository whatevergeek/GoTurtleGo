var raspi = require('raspi-io');
var five = require('johnny-five');
var board =  new five.Board({
        io: new raspi()
});

board.on('ready', function(){
        led1 = new five.Led({
                pin: 'GPIO23'
        });

        led2 = new five.Led({
                pin: 'GPIO24'
        });

        led3 = new five.Led({
                pin: 'GPIO25'
        });
	
        rled1 = new five.Led({
                pin: 'GPIO11'
        });

        rled2 = new five.Led({
                pin: 'GPIO9'
        });

        rled3 = new five.Led({
                pin: 'GPIO10'
        });
				
		function lmove()
		{
			led1.on();
			led2.off();
			led3.on();
		}
		
		function lstop()
		{
			led1.off();
			led2.on();
			led3.off();
		}

		function rmove()
		{
			rled1.on();
			rled2.off();
			rled3.on();
		}
		
		function rstop()
		{
			rled1.off();
			rled2.on();
			rled3.off();
		}
		
		function lBackward()
		{
			led1.off();
			led2.on();
			led3.on();
		}
		
		function rBackward()
		{
			rled1.on();
			rled2.on();
			rled3.off();
		}
		
		function stop()
		{
			lstop();
			rstop();
		}
		
		function forward()
		{
			lmove();
			rmove();
		}
		
		function backward()
		{
			lBackward();
			rBackward();
		}
		
		function forward1()
		{
			forward();
			setTimeout(stop,1000);
		}
		
		function backward1()
		{
			backward();
			setTimeout(stop,1000);
		}
		
		function turnRight()
		{
			lmove();
			rBackward();
			setTimeout(stop,500);
		}
		
		function turnLeft()
		{
			rmove();
			lBackward();
			setTimeout(stop,500);
		}
		
        this.repl.inject({
                l1: led1,
                l2: led2,
                l3: led3,
				lm: lmove,
				ls: lstop,
                r1: rled1,
                r2: rled2,
                r3: rled3,
				rm: rmove,
				rs: rstop,
				fw: forward,
				s: stop,
				fw1: forward1,
				tr: turnRight,
				tl: turnLeft,
				bw1: backward1,
				bw: backward
        });
		
		lstop();
		rstop();
});



