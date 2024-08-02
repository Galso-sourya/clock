setInterval(setClock, 1000)//1.we will call the function named setClock in every 1 sec

const hourHand = document.querySelector('[data-hour-hand]')//6.all 3 together
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {//2.
  const currentDate = new Date()//3.it will fetch the current time
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60//4.to move slower than the second arm
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12//5.to move slowest than minute also
  setRotation(secondHand, secondsRatio)//8.
  setRotation(minuteHand, minutesRatio)//9.
  setRotation(hourHand, hoursRatio)//10.
}

function setRotation(element, rotationRatio) {//7.full
  element.style.setProperty('--rotation', rotationRatio * 360)//variable coming from the css.total 
//number of degrees are 360
}

setClock()//11.we are calling the function as soon as the page loads, remove to see what happens.