// function scrollToCenter()
// {
//   let keyWidth = window.screen.width / 10;
//   let c4Pos = keyWidth * 23
//   document.getElementById('kbd-wrapper').scrollLeft = c4Pos;
// }

audio = new(window.AudioContext || window.webkitAudioContext)()

function playNote(frequency, volume, duration) {

    document.getElementById('freq').innerText = frequency + "hz";
    var halfPeriod = 1 / frequency / 2
    if (duration > halfPeriod) duration -= duration % halfPeriod
    else duration = halfPeriod

    var g = audio.createGain()
    var o = audio.createOscillator()
    o.connect(g)
    g.connect(audio.destination)

    o.frequency.value = frequency
    g.gain.value = volume
    o.start(0)
    o.stop(audio.currentTime + duration)
}

// media query event handler
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 500px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {
    if (mq.matches) {
        // window width is at least 500px
        let keyWidth = window.screen.width / 10;
        let c4Pos = keyWidth * 23
        document.getElementById('keyboard').scrollLeft = c4Pos;
    } else {
        // window width is less than 500px
        let keyWidth = window.screen.height / 5.5;
        let c4Pos = keyWidth * 23
        document.getElementById('keyboard').scrollLeft = c4Pos;

    }

}