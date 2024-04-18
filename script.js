const terminalBody = document.getElementById('terminal-body');
const terminalHeader = document.getElementById('current-time');

// Function to get current time
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Update time every second
function updateTime() {
    terminalHeader.textContent = getCurrentTime();
}

// Initial call to display time
updateTime();

// Update time every second
setInterval(updateTime, 1000);

function createTerminalInput() {
    const terminalInputContainer = document.createElement('div');
    terminalInputContainer.className = 'terminal-input';

    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = '@dev\'sportfolio $';

    const terminalInput = document.createElement('input');
    terminalInput.type = 'text';
    terminalInput.id = 'terminal-input';
    terminalInput.autofocus = true;

    // Set black background and green text color for the input field
    terminalInput.style.backgroundColor = '#000'; // Set to black
    terminalInput.style.color = '#00ff00'; // Set to green
    terminalInput.addEventListener('focus', function() {
    terminalInput.style.outline = 'none'; // Remove blue outline on focus
    });


    terminalInputContainer.appendChild(prompt);
    terminalInputContainer.appendChild(terminalInput);

    terminalInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const command = terminalInput.value;
            executeCommand(command);
            terminalInput.value = '';
        }
    });

    return terminalInputContainer;
}

function executeCommand(command) {
    const output = document.createElement('p');
    output.textContent = '$ ' + command;

    const response = document.createElement('p');
    const response1 = document.createElement('p');
    const response2 = document.createElement('p');
    const response3 = document.createElement('p');
    const response4 = document.createElement('p');
    // Example commands
    if (command.toLowerCase() === 'projects') {
        response.textContent = 'Project 1: AGNet: Age and Gender Predicator | Python, Flask, Deep Learning, HTML';
        response1.textContent = 'Project 2: Stock Pulse: Stock Visualizer and Forecaster | Python, Dash, Machine Learning';
        response2.textContent = 'Project 3: GeoQuest: Exploratory Analysis of Geolocation Data | Python, API, K means clustering';
        response3.textContent = 'Project 4: Cryptex: A trading market place for crypto, forex and stocks | HTML, CSS, React, Javascript';
    } else if (command.toLowerCase() === 'about') {
        response.textContent = 'My name is Dev Rathore. I am a student in Thapar Institute of Engineering and Technology, Patiala';
        response1.textContent ='I am passionate and avid about Data Science and Web Development';
        response2.textContent =''
    } else if (command.toLowerCase() === 'ls -l') {
        response.textContent = 'about';
        response1.textContent = 'projects';
        response2.textContent = 'contact';
        response3.textContent = 'skills';
    } else if (command.toLowerCase()==='contact'){
        response.textContent = 'In case you need me , drop a message via devr05120@gmail.com.';
        response1.textContent = 'I assure you to get back to you as soon as I can.';
        response2.textContent = 'github: SuperDev12';
        response3.textContent = 'linkedin: Dev Rathore';
        response4.textContent = 'instagram: devrgram';
    } else if (command.toLowerCase()==='skills'){
        response.textContent = 'HTML, CSS, JavaScript, React, Node'
        response1.textContent = 'C, C++, Python, Django, Dash, Flask';
        response2.textContent = 'SQL, MongoDB';
        response3.textContent = 'Selenium, Bugzilla';
        response4.textContent = 'Figma, AdobeXD';
    } else {
        response.textContent = 'The term enterred is not recognized as the name of a cmdlet, function, script file, or operable program.';
        response1.textContent= 'Type "ls -l" assistance.';
    }

    terminalBody.appendChild(output);
    terminalBody.appendChild(response);
    if (response1.textContent !== '') {
        terminalBody.appendChild(response1);
    }
    if (response2.textContent !== '') {
        terminalBody.appendChild(response2);
    }
    if (response3.textContent !== '') {
        terminalBody.appendChild(response3);
    }
    if (response4.textContent !== '') {
        terminalBody.appendChild(response4);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;

    // Remove the previous input field and $ sign
    const previousInput = document.querySelector('.terminal-input');
    if (previousInput) {
        terminalBody.removeChild(previousInput);
    }

    // Create and append a new input field below the response
    terminalBody.appendChild(createTerminalInput());
}

// Initial input field
terminalBody.appendChild(createTerminalInput());
