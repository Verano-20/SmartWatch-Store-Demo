var timer = document.getElementById("timer")
var watch = document.getElementById("watch")
var heartRateSection = document.getElementById("heart-rate-section")
var heartRate = document.getElementById("heart-rate")
var heart = document.getElementById("heart")

function twoSF(num) {
    if (num < 10) {
        num = '0' + num
    }
    return num
}
setInterval(function() {
    var time = new Date();
    var hours = twoSF(time.getHours())
    var minutes = twoSF(time.getMinutes())
    var seconds = twoSF(time.getSeconds())
    var currentTime = hours + ':' + minutes + ':' + seconds
    timer.innerHTML = currentTime
}, 1000)

timer.style.fontSize = (watch.clientWidth / 15) + 'px'
timer.style.transform = 'translateX(' +  - watch.clientWidth / 100 + 'px)'
heartRateSection.style.width = watch.clientWidth / 3 + 'px'
heartRateSection.style.height = heartRateSection.style.width
heartRateSection.style.transform = 'translateX(' + (- heartRateSection.clientWidth / 50) + 'px)'
heartRate.style.fontSize = heartRateSection.clientWidth / 3 + 'px'
heart.style.fontSize = heartRateSection.clientWidth / 3 + 'px'

window.addEventListener('resize', function() {
    timer.style.fontSize = (watch.clientWidth / 15) + 'px'
    timer.style.transform = 'translateX(' +  - watch.clientWidth / 100 + 'px)'
    heartRateSection.style.width = watch.clientWidth / 3 + 'px'
    heartRateSection.style.height = heartRateSection.style.width
    heartRateSection.style.transform = 'translateX(' + (- heartRateSection.clientWidth / 50) + 'px)'
    heartRate.style.fontSize = heartRateSection.clientWidth / 3 + 'px'
    heart.style.fontSize = heartRateSection.clientWidth / 3 + 'px'
})

var timeButton = document.getElementById("time-feature")
timeButton.addEventListener('click', function() {
    timer.style.visibility = 'visible'
    heartRateSection.style.visibility = 'hidden'  
})

var heartButton = document.getElementById("heart-rate-feature")
heartButton.addEventListener('click', function() {
    heartRateSection.style.visibility = 'visible'
    timer.style.visibility = 'hidden'
})

var black = document.getElementById("black")
var red = document.getElementById("red")
var blue = document.getElementById("blue")
var pink = document.getElementById("pink")
var purple = document.getElementById("purple")

black.addEventListener('click', function() {watch.src = "/media/black-watch.png"})
red.addEventListener('click', function() {watch.src = "/media/red-watch.png"})
blue.addEventListener('click', function() {watch.src = "/media/blue-watch.png"})
pink.addEventListener('click', function() {watch.src = "/media/pink-watch.png"})
purple.addEventListener('click', function() {watch.src = "/media/purple-watch.png"})

