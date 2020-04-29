// function scrollToCenter()
// {
//   let keyWidth = window.screen.width / 10;
//   let c4Position = keyWidth * 23
//   document.getElementById('keyboard').scrollLeft = c4Position;
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