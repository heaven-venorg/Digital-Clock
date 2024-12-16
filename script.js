setInterval(function clock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  clockView.innerHTML = `
  <h1 class="head-title">CLOCK REAL TIME</h1>
  <p class="clock">${hours} : ${minutes} : ${seconds}</p>`;
}, 1000);
