document.addEventListener("DOMContentLoaded", () => {
    // Login Form Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email && password) {
                console.log('Login attempted with:', email);
                window.location.href = 'dashboard.html';
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
});


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






