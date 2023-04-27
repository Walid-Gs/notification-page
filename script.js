"use strict";
// selecting Dom elements that we need:
const markRead = document.querySelector(".mark-read");
const notifications = document.querySelectorAll(".notification");
const notificationsContainer = document.querySelector(
  ".notifications-container"
);

// an event handler omn the mark as red
markRead.addEventListener("click", function (e) {
  e.preventDefault();
  //lopping over every notification:
  notifications.forEach(function (notif) {
    if (notif.classList.contains("not-read")) {
      notif.classList.remove("not-read");
      notif.querySelector(".notif-button").classList.remove("notif-button");
    }
  });
});

// anevent to handel clicking on the notification:
notificationsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.closest(".notification").classList.contains("not-read")) {
    e.target.closest(".notification").classList.remove("not-read");
    e.target
      .closest(".notification")
      .querySelector(".notif-button")
      .classList.remove("notif-button");
  }
});
