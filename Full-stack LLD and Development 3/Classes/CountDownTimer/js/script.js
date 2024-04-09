class Timer {
    constructor(minMSB,
        minLSB,
        secMSB,
        secLSB,
        start,
        stop,
        reset,
        display) {
        // Your constructor logic here
        this.minMSB = document.getElementById('minMSB');
        this.minLSB = document.getElementById('minLSB');
        this.secMSB = document.getElementById('secMSB');
        this.secLSB = document.getElementById('secLSB');

        this.start = document.getElementById('start');
        this.stop = document.getElementById('stop');
        this.reset = document.getElementById('reset');

        this.display = document.getElementById('display');

        this.minutes = 0;
        this.seconds = 0;

        this.start.addEventListener('click', this.onStart);
        this.stop.addEventListener('click', this.onStop);
        this.reset.addEventListener('click', this.onReset);

    }

    onStart(e) {
        console.log(e.target);
        this.setTime();
        this.startTimer();
    }

    setTime() {
        this.minutes = parseInt(this.minMSB.value) * 10 + parseInt(this.minLSB.value);
        console.log(this.minutes);
    }
    startTimer() {

    }
    onStop(e) {
        console.log(e.target);
    }

    onReset(e) {
        console.log(e.target);
    }
}

new Timer('minMSB',
    'minLSB',
    'secMSB',
    'secLSB',
    'start',
    'stop',
    'reset',
    'display'); // Corrected the typo in "Timer"