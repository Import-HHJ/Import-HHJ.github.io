const clock = document.querySelector("#clock"); //id = "clock"
clock.innerText = "Clock";

function recvClock() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  if (hours === "00") {
    hours = "12";
  }

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
recvClock();
setInterval(recvClock, 100);
