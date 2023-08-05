const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');
const timeEl = document.getElementById('time');
let timeMinutes = 0
let timeSeconds = 0
let currentMinutes = 0
let currentSeconds = 0
let min = 0
let sec = 0
let formatedTime = `${timeMinutes.toString().padStart(2, "0")} : ${timeSeconds.toString().padStart(2, "0")}`;
timeEl.innerHTML = formatedTime

const value = document.querySelector("#value");
const input = document.querySelector("#range");


value.textContent = textifyTime(input.value)
input.addEventListener("input", (event) => {
        let timeValue = event.target.value
    textifyTime(timeValue)
    
    
});
    
function setBackgroundColor(value) { 
    document.body.style.opacity = value
    

}

function textifyTime(timeValue) {
    min = timeValue / 60
    sec = min % 100
    min = Math.floor(min)
    sec = Math.floor((sec-min)*60)
    value.textContent = min.toString().padStart(2,"0") +" : " +sec.toString().padStart(2,"0")
    return value.textContent
}

startEl.addEventListener('click', () => {
    startEl.disabled = true
    currentMinutes = min
    currentSeconds = sec
    interval = setInterval(() => { 
        if (currentSeconds > 0) {
            currentSeconds -=1
        } else if(currentMinutes > 0) {
            currentSeconds = 59
            currentMinutes-=1
        } else {
            document.body.style.backgroundColor = 'rgba(144,144,144,0.8)'
            document.querySelector('h1').innerText = "TIME IS UP"
            timeEl.style.color = 'white'
            
        }
        formatedTime = `${currentMinutes.toString().padStart(2, "0")}:${currentSeconds.toString().padStart(2, "0")}`;
        timeEl.innerHTML = formatedTime
        setBackgroundColor(1-(0.9/((currentMinutes * 60) + currentSeconds)))
    },1000)
})

stopEl.addEventListener('click', () => { 
    startEl.disabled = false
    clearInterval(interval)
})

resetEl.addEventListener('click', () => { 
    currentMinutes = min
    currentSeconds = sec
    formatedTime = `${currentMinutes.toString().padStart(2, "0")}:${currentSeconds.toString().padStart(2, "0")}`;
    timeEl.innerHTML = formatedTime
    document.body.style.backgroundColor = 'rgb(21, 25, 46)'
    document.body.style.opacity=1
})
