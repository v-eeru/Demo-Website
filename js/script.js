
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
  (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-CKALAZKJJKPI-2");


document.addEventListener("DOMContentLoaded", function () {
  const fullUrl = window.location.href;
  const currentPageType = fullUrl.includes("contact.html") ? "contact" : "other";

  if (typeof aptrinsic === "function") {
    aptrinsic("set", "user", { pageType: currentPageType });
    console.log("Aptrinsic user attribute set with pageType:", currentPageType);
  }
});





document.addEventListener("DOMContentLoaded", () => {





// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const allowedEmails = [
    "Veeru@gmail.com",
    "Aryansh@gmail.com",
    "Rahul@gmail.com",
    "Abhinay@gmail.com",
    "Travis@gmail.com",
        "levi@apt.in","luffy@op.in","itachi@got.in"
  ];

  if (allowedEmails.includes(email) && password) {
    console.log('Login attempted with:', email);

    if (typeof aptrinsic !== 'undefined') {
      switch (email) {
        case "Veeru@gmail.com":
          aptrinsic("identify", { id: "Veeru", email, firstName: "Veeru",role:"Admin"},{ id: "1123", name: "Sony" },{custom1:"first" });
          aptrinsic('set', 'globalContext', { "package": "standard" });
          break;

        case "Aryansh@gmail.com":
          aptrinsic("identify", { id: "Aryansh", email, firstName: "Aryansh",role:"Admin", Preferedlanguage:"ja-JP"}, { id: "1124", name: "Apple" },{custom1:"first" });
          aptrinsic('set', 'globalContext', { "package": "premium" });
          break;

        case "Rahul@gmail.com":
          aptrinsic("identify", { id: "Rahul", email, firstName: "Rahul" ,role:"Admin"},{ id: "1125", name: "Google" },{custom1:"first" });
          aptrinsic('set', 'globalContext', { "package": "business" });
          break;

        case "Abhinay@gmail.com":
          aptrinsic("identify", { id: "Abhinay", email, firstName: "Abhinay",role:"Admin"}, { id: "1126", name: "Microsoft" },{custom1:"first" });
          aptrinsic('set', 'globalContext', { "package": "enterprise" });
          break;

        case "levi@apt.in":
          aptrinsic("identify", { id: "Levi", email, firstName: "Levi",role:"Admin"}, { id: "1128", name: "AOT" },{custom1:"first" });
          aptrinsic('set', 'globalContext', { "package": "enterprise" });
          break;

        case "luffy@op.in":
          aptrinsic("identify", { id: "luffy", email, firstName: "Luffy",role:"Admin"}, { id: "1129", name: "Microsoft" },{custom1:"first" });
          aptrinsic('set', 'globalContext', { "package": "enterprise" });
          break;

        case "itachi@got.in":
          aptrinsic("identify", { id: "itachi", email, firstName: "Itachi",role:"Admin"}, { id: "1130", name: "Sony" },{custom1:"first" });
          aptrinsic('set', 'globalContext', { "package": "enterprise" });
          break;

        case "Travis@gmail.com":
          aptrinsic("identify", { id: "Travis", email, firstName: "Travis",role:"Admin" }, { id: "1127", name: "Volkswagen" },{custom1:"first" });
          aptrinsic('set', 'globalContext', { "package": "basic" });
          break;

        default:
          break;
      }
    }

    // Redirect to dashboard
    setTimeout(() => {
      console.warn("Redirect timeout reached, redirecting anyway");
      window.location.href = 'dashboard.html';
    }, 500);

  } else {
    alert('Please enter both email and password');
  }
});
}
//payment logic
const paymentForm = document.getElementById('paymentForm');
paymentForm?.addEventListener('submit', function (e) {
e.preventDefault();
const cardNumber = document.getElementById('cardNumber').value;
const expireyDate = document.getElementById('expireyDate').value;
const cvv = document.getElementById('cvv').value; 
aptrinsic('track', 'paymentSubmitted', {
  cardNumber: cardNumber,
  expireyDate: expireyDate,
  cvv: cvv
});
})
// Data Loader Page Logic
const select = document.getElementById("option");
const display = document.getElementById("label1");
const input = document.getElementById("i1");

if (select && display && input) {
select.addEventListener("change", () => {
  if (select.value === "Account") {
    display.innerHTML = `Account ID:`;
    input.placeholder = `Enter Account ID`;
  } else if (select.value === "User") {
    display.innerHTML = `User ID:`;
    input.placeholder = `Enter User ID`;
  }
});
}

// Dropdown Logic
const dropdown = document.querySelector('.dropdown');
const selected = dropdown?.querySelector('.dropdown-selected');
const options = dropdown?.querySelector('.dropdown-options');

if (dropdown && selected && options) {
selected.addEventListener('click', () => {
  options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

options.addEventListener('click', (event) => {
  if (event.target.classList.contains('dropdown-option')) {
    selected.textContent = event.target.textContent;
    options.style.display = 'none';
  }
});
}

// Draggable Widgets
const draggables = document.querySelectorAll('.draggable');
draggables?.forEach(draggable => {
draggable.addEventListener('mousedown', function (e) {
  const shiftX = e.clientX - draggable.getBoundingClientRect().left;
  const shiftY = e.clientY - draggable.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    draggable.style.left = pageX - shiftX + 'px';
    draggable.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  draggable.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    draggable.onmouseup = null;
  };
});

draggable.ondragstart = function () {
  return false;
};
});

// Initialize draggable positions
const draggableInit = document.querySelectorAll('.draggable');
draggableInit?.forEach((draggable, index) => {
draggable.style.position = 'absolute';
draggable.style.left = `${100 + index * 220}px`;
draggable.style.top = `${100 + index * 120}px`;
});
});
