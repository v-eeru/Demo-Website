document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Simple validation
    if (email && password) {
        // Track login event
        console.log('Login attempted with:', email);
        // Redirect to dashboard
        window.location.href='dashboard.html';
    } else {
        alert('Please enter both email and password');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Display Jersey Number
    const displayJerseyBtn = document.getElementById('displayJersey');
    if (displayJerseyBtn) {
        displayJerseyBtn.addEventListener('click', function() {
            document.getElementById('jerseyNumber').textContent = '28';
        });
    }
    // Special Salary Buttons
    const specialSalaryBtns = document.querySelectorAll('.special-salary-btn');
    specialSalaryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const method = this.getAttribute('data-method');
            let message = '';
            switch(method) {
                case 'css':
                    message = 'Salary added using CSS selector method';
                    break;
                case 'attribute':
                    message = 'Salary added using data attribute method';
                    break;
                case 'event':
                    message = 'Salary added using custom event method';
                    // Trigger custom event
                    const event = new CustomEvent('salaryAdded', {
                        detail: { method: 'custom' }
                    });
                    document.dispatchEvent(event);
                    break;
                default:
                    message = 'Salary added';
            }
            console.log(message);
            alert(message);
        });
    });
    // Listen for custom salary event
    document.addEventListener('salaryAdded', function(e) {
        console.log('Custom salary event detected:', e.detail);
    });
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
// Color change on key press
document.addEventListener('keydown', function(e) {
    if (e.key === 'v' || e.key === 'V') {
        document.body.style.backgroundColor = 'violet';
    } else if (e.key === 'q' || e.key === 'Q') {
        document.body.style.backgroundColor = 'green';
    }
});
document.addEventListener('keyup', function() {
    document.body.style.backgroundColor = '';
});
// Form Submissions
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Contact form submitted');
    alert('Thank you for your message!');
});
document.getElementById('dataLoaderForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Data loader form submitted');
    document.getElementById('executionResponse').textContent = 'Operation completed successfully';
    document.getElementById('fileContent').textContent = 'Sample file content would appear here';
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






