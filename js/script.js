// Aptrinsic SDK loader
(function(n, t, a, e, co) {
    var i = "aptrinsic";
    n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    };
    n[i].p = e;
    n[i].c = co;
    var r = t.createElement("script");
    r.async = true;
    r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(r, c);
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-4YCPERINHU7C-2");

// Identify wrapper with retry logic
function identifyWithRetry(email) {
    const tryIdentify = () => {
        if (typeof aptrinsic !== 'undefined') {
            aptrinsic("identify",
                {
                    id: email.split("@")[0],
                    email: email,
                    firstName: "Veeru",
                    lastName: "Kumar",
                    signUpDate: Date.now()
                },
                {
                    id: "account001",
                    name: "Small Website",
                    Program: "Test"
                }
            );
            console.log("✅ Aptrinsic identify sent");
        } else {
            console.warn("⏳ Waiting for Aptrinsic to load...");
            setTimeout(tryIdentify, 300);
        }
    };

    tryIdentify();
}

document.addEventListener("DOMContentLoaded", () => {
    // Login Form Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (
                (email === "veerupotpally2003@gmail.com" ||
                 email === "veeru@gmail.com" ||
                 email === "pshetty@gmail.com" ||
                 email === "kumar@gmail.com") && password
            ) {
                console.log('Login attempted with:', email);

                identifyWithRetry(email); // Track user

                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
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
