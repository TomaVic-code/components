
function toggleNotifications() {
    var button = document.getElementById("widget__notifications");
    button.classList.toggle("nav__main__widget_active");
  }

function toggleOther() {
    var button = document.getElementById("widget__other");
    button.classList.toggle("nav__main__widget_active");
}

let side_not = document.querySelector('.nav__main__widget');
    side_not.addEventListener('click', function(){
  let side_appear = document.querySelector('.nav__side__notification');
      side_appear.classList.toggle('nav__side__notification-active');
});

let closeClick = document.querySelector('.click-close');
    closeClick.addEventListener('click', function(){
  let side_appear = document.querySelector('.nav__side__notification');
      side_appear.classList.remove('nav__side__notification-active');
      var button = document.getElementById("widget__notifications");
          button.classList.remove("nav__main__widget_active");
});