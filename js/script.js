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

// Helper: Retry PX SDK readiness before calling your callback
function callIdentifyWhenReady(callback, retries = 10, delay = 200) {
  if (typeof aptrinsic !== 'undefined' && aptrinsic) {
    callback();
  } else if (retries > 0) {
    setTimeout(() => callIdentifyWhenReady(callback, retries - 1, delay), delay);
  } else {
    console.error("PX SDK not loaded, commands not fired.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Login Form Handler
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const allowedEmails = [
        "Veeru@gmail.com",
        "Aryansh@gmail.com",
        "Rahul@gmail.com",
        "Abhinay@gmail.com",
        "Travis@gmail.com"
      ];

      if (allowedEmails.includes(email) && password) {
        console.log('Login attempted with:', email);

        callIdentifyWhenReady(() => {
          let userPackage = "";
          switch(email) {
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
              userPackage = "standard";
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
              userPackage = "premium";
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
              userPackage = "business";
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
              userPackage = "enterprise";
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
              userPackage = "basic";
              break;

            default:
              break;
          }

          if(userPackage) {
            aptrinsic('set', 'globalContext', { "package": userPackage });
            // Track login event explicitly
            aptrinsic('track', 'User Logged In', { email: email, package: userPackage });
          }
        });

        // Redirect to dashboard after short delay for PX events to send
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 700);

      } else {
        alert('Please enter both email and password');
      }
    });
  }

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
  if (dropdown) {
    const selected = dropdown.querySelector('.dropdown-selected');
    const options = dropdown.querySelector('.dropdown-options');

    if (selected && options) {
      // Toggle dropdown visibility
      selected.addEventListener('click', () => {
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
      });

      // Handle option selection
      options.addEventListener('click', (event) => {
        if (event.target.classList.contains('dropdown-option')) {
          selected.textContent = event.target.textContent;
          options.style.display = 'none';
        }
      });
    }
  }

  // Draggable Widgets
  const draggables = document.querySelectorAll('.draggable');
  draggables?.forEach(draggable => {
    draggable.style.position = 'absolute'; // ensure absolute for dragging

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

  // Initialize draggable positions on widget page load
  window.addEventListener('DOMContentLoaded', function() {
    const draggables = document.querySelectorAll('.draggable');
    draggables?.forEach((draggable, index) => {
      draggable.style.left = `${100 + index * 220}px`;
      draggable.style.top = `${100 + index * 120}px`;
    });
  });
});

// Logout function
function logout(){
  aptrinsic('reset');
}
