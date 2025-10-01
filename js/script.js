(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-NLM0CA3YQKIW-2");

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
        "levi@apt.in","luffy@op.in","itachi@got.in", "veerupotpally2003@gmail.com","veeruortungaming99@gmail.com"
  ];


