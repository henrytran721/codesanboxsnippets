import "./styles.css";

import Calendar from "tui-calendar"; /* ES6 */
// import "tui-calendar/dist/tui-calendar.css";

// If you use the default popups, use this.
// import "tui-date-picker/dist/tui-date-picker.css";
// import "tui-time-picker/dist/tui-time-picker.css";

// references to dom nodes
const viewSelect = document.getElementById("view-select");
const todayBtn = document.getElementById("today-btn");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let currentDate = document.getElementById("current-date");

let todayView = false;

var calendar = new Calendar("#calendar", {
  defaultView: "month",
  taskView: true
});

let current = calendar.getDate();
currentDate.innerHTML = current._date.toString().slice(0, 15);

// change view based on dropdown
viewSelect.onchange = function () {
  let currentView = viewSelect.value;
  if (currentView === "daily") {
    console.log(currentView);
    calendar.changeView("day", true);
  } else if (currentView === "weekly") {
    calendar.changeView("week", true);
  } else {
    calendar.changeView("month", true);
  }
};

todayBtn.addEventListener("click", () => {
  if (!todayView) {
    calendar.changeView("day", true);
    calendar.today();
    todayView = true;
  } else {
    calendar.changeView("month", true);
    todayView = false;
  }
});

prev.addEventListener("click", () => {
  calendar.prev();
  let current = calendar.getDate();
  currentDate.innerHTML = current._date.toString().slice(0, 15);
});

next.addEventListener("click", () => {
  calendar.next();
  let current = calendar.getDate();
  currentDate.innerHTML = current._date.toString().slice(0, 15);
  // currentDate.innerHTML = current;
});

console.log(currentDate);
// console.log(calendar.getDate());
