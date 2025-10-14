(function(n,t,a,e,co){
  var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0;r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-AABOV4O8K47Q-2");

//------------------------------------
// Testing snippet: page type tracking
//------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const fullUrl = window.location.href;
  const currentPageType = fullUrl.includes("contact.html") ? "contact" : "other";

  if (typeof aptrinsic === "function") {
    aptrinsic("set", "user", { pageType: currentPageType });
    console.log("Aptrinsic user attribute set with pageType:", currentPageType);
  }
});

//------------------------------------
// Main Logic
//------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;

  //------------------------------------
  // LOGIN PAGE LOGIC
  //------------------------------------
  if (currentPage.includes("login.html")) {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const allowedEmails = [
          "Veeru123@gmail.com",
          "Aryansh123@gmail.com",
          "Rahul123@gmail.com",
          "Abhinay123@gmail.com",
          "Travis123@gmail.com",
          "levi@apt123.in",
          "luffy123@op.in",
          "itachi123@got.in",
          "veerupotpally2003@gmail.com",
          "veeruortungaming99@gmail.com"
        ];

        if (allowedEmails.includes(email) && password) {
          console.log('Login attempted with:', email);
          localStorage.setItem("loggedInUser", email); // save for dashboard

          if (typeof aptrinsic !== 'undefined') {
            switch (email) {
              case "Veeru123@gmail.com":
                const user = { id: "1a10", email, firstName: "Veeru", role: "Admin" };
                const accounts = [
                  { id: "11120", name: "Sony" },
                  { id: "11121", name: "Apple" },
                  { id: "11122", name: "Google" }
                ];
                aptrinsic("identify", user, accounts[0]);
                aptrinsic('set', 'globalContext', { "package": "standard" });
                console.log("Default account: Sony");
                // Define switchAccount (only temporarily available before redirect)
                window.switchAccount = (accountId) => {
                  const account = accounts.find(a => a.id === accountId);
                  if (account) {
                    aptrinsic("identify", user, account);
                    console.log("Switched account to:", account.name);
                  } else {
                    console.warn("Account ID not found:", accountId);
                  }
                };
                break;

              case "Aryansh123@gmail.com":
                aptrinsic("identify", { id: "1a11", email, firstName: "Aryansh", role:"Admin", Preferedlanguage:"ja-JP"}, { id: "11121", name: "Apple" });
                aptrinsic('set', 'globalContext', { "package": "premium" });
                break;

              case "Rahul123@gmail.com":
                aptrinsic("identify", { id: "1a12", email, firstName: "Rahul", role:"Admin"}, { id: "11122", name: "Google" });
                aptrinsic('set', 'globalContext', { "package": "business" });
                break;

              case "Abhinay123@gmail.com":
                aptrinsic("identify", { id: "1a13", email, firstName: "Abhinay", role:"Admin"}, { id: "11123", name: "Microsoft" });
                aptrinsic('set', 'globalContext', { "package": "enterprise" });
                break;

              case "levi@apt123.in":
                aptrinsic("identify", { id: "1a14", email, firstName: "Levi", role:"Admin"}, { id: "11124", name: "AOT" });
                aptrinsic('set', 'globalContext', { "package": "enterprise" });
                break;

              case "luffy123@op.in":
                aptrinsic("identify", { id: "1a15", email, firstName: "Luffy", role:"Admin"}, { id: "11125", name: "Microsoft" });
                aptrinsic('set', 'globalContext', { "package": "enterprise" });
                break;

              case "itachi123@got.in":
                aptrinsic("identify", { id: "1a16", email, firstName: "Itachi", role:"Admin"}, { id: "11126", name: "Sony" });
                aptrinsic('set', 'globalContext', { "package": "enterprise" });
                break;

              case "Travis123@gmail.com":
                aptrinsic("identify", { id: "1a17", email, firstName: "Travis", role:"Admin" }, { id: "11127", name: "Volkswagen" });
                aptrinsic('set', 'globalContext', { "package": "basic" });
                break;

              case "veerupotpally2003@gmail.com":
                aptrinsic("identify", { id: "1a18", email, firstName: "Veerendra", role:"Admin" }, { id: "11128", name: "Suzuki" });
                aptrinsic('set', 'globalContext', { "package": "basic" });
                break;

              case "veeruortungaming99@gmail.com":
                aptrinsic("identify", { id: "1a19", email, firstName: "Veerendra Kumar", role:"Admin" }, { id: "11129", name: "Toyota" });
                aptrinsic('set', 'globalContext', { "package": "basic" });
                break;
            }
          }

          // Redirect to dashboard
          setTimeout(() => {
            window.location.href = 'dashboard.html';
          }, 500);
        } else {
          alert('Please enter both email and password');
        }
      });
    }
  }

  //------------------------------------
  // DASHBOARD PAGE LOGIC (switchAccount)
  //------------------------------------
  if (currentPage.includes("dashboard.html")) {
    setTimeout(() => {
      if (typeof aptrinsic !== "undefined") {
        const email = localStorage.getItem("loggedInUser");
        if (email === "Veeru123@gmail.com") {

          const user = { id: "1a10", email, firstName: "Veeru", role: "Admin" };
          const accounts = [
            { id: "11120", name: "Sony" },
            { id: "11121", name: "Apple" },
            { id: "11122", name: "Google" }
          ];

          aptrinsic("identify", user, accounts[0]);
          aptrinsic('set', 'globalContext', { "package": "standard" });
          console.log("✅ Default account: Sony");

          // Global account switch function
          window.switchAccount = (accountId) => {
            const account = accounts.find(a => a.id === accountId);
            if (account) {
              aptrinsic("identify", user, account);
              console.log("✅ Switched account to:", account.name);
            } else {
              console.warn("⚠️ Account ID not found:", accountId);
            }
          };

          console.log("✅ switchAccount loaded globally on dashboard.");
        }
      }
    }, 1500);
  }

  //------------------------------------
  // Other UI Logic (unchanged)
  //------------------------------------

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
