class Timer {
    constructor(interval=10000){
        this.interval = interval;
        this.isSuspended = false;

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.suspend = this.suspend.bind(this);
        this.resume = this.resume.bind(this);
    }
    start(timedFunction, interval=this.interval) {
        this.timedFunction = timedFunction;

        if(!this.isSuspended){
            clearInterval(this.timerId);
            this.timeStart = Date.now();

            this.timerId = setTimeout(function tick() {
                timedFunction();
            }, interval);
        } else{
            this.timeRemaining = this.interval
        }
    }

    stop(){
        clearInterval(this.timerId);
    }

    suspend(){
        clearInterval(this.timerId);
        this.timeRemaining = this.interval - (Date.now() - this.timeStart);
        this.isSuspended = true;
    }

    resume(){
        this.isSuspended = false;
        this.start(this.timedFunction, this.timeRemaining);
    }
};

export default Timer;
