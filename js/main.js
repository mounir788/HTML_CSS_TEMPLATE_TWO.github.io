let numbers = document.querySelectorAll(".number");
let statsSection = document.querySelector(".stats");
let skillsSection = document.querySelector(".our-skills");
let progress = document.querySelectorAll(".the-progress span");
let toTop = document.querySelector(".toTop");

// Set timer
let counter = setInterval(() => {
  let currentDate = new Date();
  let date = new Date("Dec 31 2022 23:59:59");
  let dateDiff = date - currentDate;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = mins < 10 ? `0${mins}` : mins;
  document.querySelector(".seconds").innerHTML = sec < 10 ? `0${sec}` : sec;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// Back to top function
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let started = false;

window.onscroll = function () {
  // Scroll TO top Button
  this.scrollY >= 600
    ? toTop.classList.add("show")
    : toTop.classList.remove("show");

  // Show Progress bar on scroll
  if (this.scrollY >= skillsSection.offsetTop) {
    progress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  //  Counter on scroll
  if (this.scrollY >= statsSection.offsetTop - 300) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};

// Counter function
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
