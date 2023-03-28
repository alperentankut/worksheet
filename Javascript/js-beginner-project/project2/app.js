// Clock Function

function startTime() {
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  minute = checkTime(minute);
  second = checkTime(second);
  document.getElementById("clock").innerHTML =
    hour + ":" + minute + ":" + second;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i;
}

//Button Event Listeners
let button = document.getElementsByClassName("btn")
let firstCity = document.getElementById("city1") //İstanbul
let secondCity = document.getElementById("city2") //Ankara
let thirdCity = document.getElementById("city3")  //İzmir
let fourthCity = document.getElementById("city4")  //Gaziantep

function addTime (city){
    
}
