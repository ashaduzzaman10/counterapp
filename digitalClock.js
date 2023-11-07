let number = 0;

document.getElementById("start-btn").addEventListener("click", () => {
  let interval = setInterval(() => {
    number++;
    document.getElementById("display-text").innerText = number;
  }, 1000);
  document.getElementById("end-btn").addEventListener("click", () => {
    clearInterval(interval);
  });
  document.getElementById("reset-btn").addEventListener("click", () => {
    document.getElementById("display-text").innerText = number;
    number = 0;
    clearInterval(interval);
  });
});
