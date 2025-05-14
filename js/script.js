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

// Dataloader Page
select=document.getElementById("option")
display=document.getElementById("label1")
input=document.getElementById("i1")

select.addEventListener("change",()=>{
    if(select.value=="Account"){
        display.innerHTML=`Account ID:`
        input.placeholder=`Enter Account ID`


    }
    else if(select.value=="User"){
        display.innerHTML=`User ID:`
        input.placeholder=`Enter User ID`
    }
})

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










