
let count = 10;
let interval;

function start() {
  clearInterval(interval); 
  count = 10;
  document.getElementById("timer").textContent = count;

  interval = setInterval(() => {
    count--;
    document.getElementById("timer").textContent = count;
    if (count === 0) {
      count = 10;
    }
  }, 1000);
}
