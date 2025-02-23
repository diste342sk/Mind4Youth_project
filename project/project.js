window.open('https://www.example.com', '_blank'); 
// Daily Journal Prompts
let prompts = [
    "How am I feeling today?",
    "What is one positive thing that happened today?",
    "What is one thing you’re grateful for right now?",
    "What made you smile today?",
    "What’s something you want to improve about yourself?"
];

function loadNewPrompt() {
    let randomIndex = Math.floor(Math.random() * prompts.length);
    document.getElementById('journal-prompt').textContent = prompts[randomIndex];
}

// Mood Tracker
function setMood(mood) {
    document.getElementById('mood-display').textContent = mood;
}

// Goal Setting
let goals = [];

function saveGoal() {
    let goal = document.getElementById('goal-input').value;
    if (goal) {
        goals.push(goal);
        document.getElementById('goal-input').value = '';
        displayGoals();
    }
}

function displayGoals() {
    let goalList = document.getElementById('goal-list');
    goalList.innerHTML = '';
    goals.forEach(function(goal) {
        let li = document.createElement('li');
        li.textContent = goal;
        goalList.appendChild(li);
    });
}

// Positive Affirmations
let affirmations = [
    "You are amazing!",
    "You are worthy of love and respect.",
    "You are capable of achieving your dreams.",
    "You are stronger than you think.",
    "You are enough, just as you are."
];

function getNewAffirmation() {
    let randomIndex = Math.floor(Math.random() * affirmations.length);
    document.getElementById('affirmation-text').textContent = affirmations[randomIndex];
}

// Save Journal Entry to Local Storage
function saveJournal() {
    let journalText = document.getElementById('journal-entry').value;
    if (journalText) {
        let savedJournals = JSON.parse(localStorage.getItem('journals')) || [];
        savedJournals.push(journalText);
        localStorage.setItem('journals', JSON.stringify(savedJournals));
        document.getElementById('journal-entry').value = '';
        loadPreviousJournals();
    }
}

// Load Previous Journals from Local Storage
function loadPreviousJournals() {
    let savedJournals = JSON.parse(localStorage.getItem('journals')) || [];
    let previousJournalsDiv = document.getElementById('previous-journals');
    previousJournalsDiv.innerHTML = '';
    savedJournals.forEach(function(journal, index) {
        let p = document.createElement('p');
        p.textContent = `Journal #${index + 1}: ${journal}`;
        previousJournalsDiv.appendChild(p);
    });
}

// Load the initial prompt and previous journals on page load
window.onload = function() {
    loadNewPrompt();
    loadPreviousJournals();
};
