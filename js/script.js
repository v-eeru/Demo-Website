// PX snippet — keep this exactly once on all pages, ideally at top of your main JS file
(function(n,t,a,e,co){
  var i="aptrinsic";
  n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)
  };
  n[i].p=e;
  n[i].c=co;
  var r=t.createElement("script");
  r.async=!0;
  r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];
  c.parentNode.insertBefore(r,c);
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-NLM0CA3YQKIW-2");

document.addEventListener("DOMContentLoaded", () => {
  // Login Form Handler
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      const allowedEmails = [
        "Veeru@gmail.com",
        "Aryansh@gmail.com",
        "Rahul@gmail.com",
        "Abhinay@gmail.com",
        "Travis@gmail.com"
      ];

      if (allowedEmails.includes(email) && password) {
        console.log('Login attempted with:', email);

        if (typeof aptrinsic !== 'undefined') {
          // Your existing switch for identify + globalContext
          switch (email) {
            case "Veeru@gmail.com":
              aptrinsic("identify",
                {
                  id: email.substring(0, email.indexOf('@')),
                  email: email,
                  firstname: "Veeru"
                },
                {
                  id: "1123",
                  name: "Sony"
                }
              );
              aptrinsic('set', 'globalContext', { "package": "standard" });
              break;

            case "Aryansh@gmail.com":
              aptrinsic("identify",
                {
                  id: email.substring(0, email.indexOf('@')),
                  email: email,
                  firstname: "Aryansh"
                },
                {
                  id: "1124",
                  name: "Apple"
                }
              );
              aptrinsic('set', 'globalContext', { "package": "premium" });
              break;

            case "Rahul@gmail.com":
              aptrinsic("identify",
                {
                  id: email.substring(0, email.indexOf('@')),
                  email: email,
                  firstname: "Rahul"
                },
                {
                  id: "1125",
                  name: "Google"
                }
              );
              aptrinsic('set', 'globalContext', { "package": "business" });
              break;

            case "Abhinay@gmail.com":
              aptrinsic("identify",
                {
                  id: email.substring(0, email.indexOf('@')),
                  email: email,
                  firstname: "Abhinay"
                },
                {
                  id: "1126",
                  name: "Microsoft"
                }
              );
              aptrinsic('set', 'globalContext', { "package": "enterprise" });
              break;

            case "Travis@gmail.com":
              aptrinsic("identify",
                {
                  id: email.substring(0, email.indexOf('@')),
                  email: email,
                  firstname: "Travis"
                },
                {
                  id: "1127",
                  name: "Volkswagen"
                }
              );
              aptrinsic('set', 'globalContext', { "package": "basic" });
              break;

            default:
              break;
          }

          // Wait for PX commands to send before redirect
          aptrinsic('fetchCommands', () => {
            console.log("PX commands fetched, redirecting to dashboard...");
            window.location.href = 'dashboard.html';
          });

          // Fallback redirect if fetchCommands hangs
          setTimeout(() => {
            console.warn("Redirect timeout reached, redirecting anyway");
            window.location.href = 'dashboard.html';
          }, 3000);

        } else {
          // PX not loaded? Just redirect immediately
          console.warn("PX SDK not defined, redirecting immediately");
          window.location.href = 'dashboard.html';
        }
      } else {
        alert('Please enter both email and password');
      }
    });
  }

  // Your existing Data Loader Page Logic (no change)
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
  if (dropdown) {
    const selected = dropdown.querySelector('.dropdown-selected');
    const options = dropdown.querySelector('.dropdown-options');

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
    draggable.addEventListener('mousedown', function(e) {
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

      draggable.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        draggable.onmouseup = null;
      };
    });

    draggable.ondragstart = function() {
      return false;
    };
  });

  // Initialize draggable positions on widget page
  window.addEventListener('DOMContentLoaded', function() {
    const draggables = document.querySelectorAll('.draggable');
    draggables?.forEach((draggable, index) => {
      draggable.style.position = 'absolute';
      draggable.style.left = `${100 + index * 220}px`;
      draggable.style.top = `${100 + index * 120}px`;
    });
  });
});

// Logout function - reset PX
function logout(){
  if(typeof aptrinsic !== 'undefined'){
    aptrinsic('reset');
  }
}
