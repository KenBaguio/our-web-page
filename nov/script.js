let display = document.getElementById('display');
let calculator = document.getElementById('calculator');
let header = document.getElementById('header');
let isDragging = false;
let offsetX, offsetY;

header.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - calculator.offsetLeft;
    offsetY = e.clientY - calculator.offsetTop;
});

document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

   
    if (newX >= 0 && newX + calculator.offsetWidth <= window.innerWidth) {
        calculator.style.left = newX + 'px';
    }

    if (newY >= 0 && newY + calculator.offsetHeight <= window.innerHeight) {
        calculator.style.top = newY + 'px';
    }
});

document.addEventListener('mouseup', function () {
    isDragging = false;
});

header.addEventListener('touchstart', function (e) {
    isDragging = true;
    offsetX = e.touches[0].clientX - calculator.offsetLeft;
    offsetY = e.touches[0].clientY - calculator.offsetTop;
});

document.addEventListener('touchmove', function (e) {
    if (!isDragging) return;
    const newX = e.touches[0].clientX - offsetX;
    const newY = e.touches[0].clientY - offsetY;

    
    if (newX >= 0 && newX + calculator.offsetWidth <= window.innerWidth) {
        calculator.style.left = newX + 'px';
    }

    if (newY >= 0 && newY + calculator.offsetHeight <= window.innerHeight) {
        calculator.style.top = newY + 'px';
    }
});

document.addEventListener('touchend', function () {
    isDragging = false;
});

function appendToDisplay(value) {
    
    if (!(display.textContent === '0' && value === '0')) {
       
        if (!(display.textContent === '' && isOperator(value))) {
            display.textContent += value;
        }
    }
}

function clearDisplay() {
    display.textContent = '';
}

function calculateResult() {
    try {
        let expression = display.textContent;

       
        display.textContent = eval(expression);
    } catch (error) {
        display.textContent = 'Error';
    }
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function deleteLastCharacter() {
    let currentValue = display.textContent;
    display.textContent = currentValue.slice(0, -1);
}

function dragStart(e) {
    e.preventDefault();
}

function toggleDarkMode() {
    var darkModeToggle = document.getElementById('darkModeToggle');
    var body = document.body;

    if (darkModeToggle.checked) {
      
        body.classList.add('dark-mode');
    } else {
      
        body.classList.remove('dark-mode');
    }
}