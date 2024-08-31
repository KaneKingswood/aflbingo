// Example database of current 2024 AFL players with their matching criteria
const playersDatabase = [
    { name: "Rory Laird", criteria: ["50+ goals", "All Australian squad", "Played for Adelaide", "South Australia"] },
    { name: "Taylor Walker", criteria: ["50+ goals", "100+ goals", "Played a finals game", "Played for Adelaide", "South Australia", "All Australian squad"] },
    { name: "Jordan Dawson", criteria: ["Played for Adelaide", "50+ goals", "All Australian squad", "South Australia"] },
    { name: "Ben Keays", criteria: ["Played for Adelaide", "Played for Brisbane", "Victoria"] },
    { name: "Riley Thilthorpe", criteria: ["Top 10 draft pick", "Played for Adelaide", "South Australia"] },
    { name: "Jake Soligo", criteria: ["Played for Adelaide", "Victoria"] },
    { name: "Josh Rachele", criteria: ["Played for Adelaide", "50+ goals", "Victoria"] },
    { name: "Lachie Neale", criteria: ["50+ goals", "100+ goals", "Played for Brisbane Lions", "All Australian squad", "South Australia", "Brownlow medalist", "Played a finals game"] },
    { name: "Charlie Cameron", criteria: ["50+ goals", "100+ goals", "Played for Brisbane Lions", "All Australian squad", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Hugh McCluggage", criteria: ["Top 10 draft pick", "Played for Brisbane Lions", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Dayne Zorko", criteria: ["50+ goals", "100+ goals", "Played for Brisbane Lions", "All Australian squad", "Queensland", "Played a finals game"] },
    { name: "Joe Daniher", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Brisbane Lions", "Victoria", "Played a finals game"] },
    { name: "Harris Andrews", criteria: ["Played for Brisbane Lions", "All Australian squad", "Queensland", "Played a finals game"] },
    { name: "Zac Bailey", criteria: ["Played for Brisbane Lions", "Northern Territory", "Played a finals game"] },
    { name: "Patrick Cripps", criteria: ["50+ goals", "Top 10 draft pick", "Played for Carlton", "All Australian squad", "Brownlow medalist", "Western Australia"] },
    { name: "Sam Walsh", criteria: ["Top 10 draft pick", "Played for Carlton", "50+ goals", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Charlie Curnow", criteria: ["50+ goals", "All Australian squad", "100+ goals", "Top 10 draft pick", "Played for Carlton", "Coleman medal", "Victoria", "Played a finals game"] },
    { name: "Harry McKay", criteria: ["50+ goals", "100+ goals", "All Australian squad", "Top 10 draft pick", "Played for Carlton", "Coleman medal", "Victoria", "Played a finals game"] },
    { name: "Jacob Weitering", criteria: ["Top 10 draft pick", "Played for Carlton", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Adam Saad", criteria: ["Played for Carlton", "Played for Essendon", "Victoria"] },
    { name: "Sam Docherty", criteria: ["Played for Carlton", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Jack Martin", criteria: ["Played for Carlton", "Played for Gold Coast", "Northern Territory"] },
    { name: "Adam Cerra", criteria: ["Played for Carlton", "Played for Fremantle", "Victoria", "Played a finals game"] },
    { name: "Mitch McGovern", criteria: ["Played for Carlton", "South Australia"] },
    { name: "Scott Pendlebury", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Collingwood", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Darcy Moore", criteria: ["Top 10 draft pick", "Played for Collingwood", "All Australian squad", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Jordan De Goey", criteria: ["50+ goals", "100+ goals", "All Australian squad", "Top 10 draft pick", "Played for Collingwood", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Jack Crisp", criteria: ["Played for Collingwood", "50+ goals", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Bobby Hill", criteria: ["Played for Collingwood", "50+ goals", "Won a premiership", "Western Australia", "Played a finals game"] },
    { name: "Jeremy Howe", criteria: ["Played for Collingwood", "Played for Melbourne", "Victoria", "Played a finals game"] },
    { name: "Josh Daicos", criteria: ["Played for Collingwood", "All Australian squad", "50+ goals", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Nick Daicos", criteria: ["Top 10 draft pick", "Won a premiership", "All Australian squad", "Played for Collingwood", "Victoria", "Played a finals game"] },
    { name: "Steele Sidebottom", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Collingwood", "Victoria", "Played a finals game"] },
    { name: "Zach Merrett", criteria: ["50+ goals", "Played for Essendon", "All Australian squad", "Victoria"] },
    { name: "Darcy Parish", criteria: ["Top 10 draft pick", "Played for Essendon", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Jake Stringer", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Essendon", "Played for Western Bulldogs", "Victoria", "Played a finals game"] },
    { name: "Andrew McGrath", criteria: ["Top 10 draft pick", "Played for Essendon", "Victoria"] },
    { name: "Nic Martin", criteria: ["Played for Essendon", "Western Australia"] },
    { name: "Peter Wright", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Essendon", "Played for Gold Coast", "Victoria"] },
    { name: "Sam Draper", criteria: ["Played for Essendon", "South Australia"] },
    { name: "Dylan Shiel", criteria: ["Played for Essendon", "50+ goals", "Played for GWS Giants", "Victoria", "Played a finals game"] },
    { name: "Nat Fyfe", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Fremantle", "All Australian squad", "Western Australia", "Brownlow medalist", "Played a finals game"] },
    { name: "Andrew Brayshaw", criteria: ["Top 10 draft pick", "50+ goals", "Played for Fremantle", "All Australian squad", "Victoria"] },
    { name: "Caleb Serong", criteria: ["Top 10 draft pick", "Played for Fremantle", "All Australian squad", "Victoria"] },
    { name: "Sean Darcy", criteria: ["Played for Fremantle", "Victoria", "Played a finals game"] },
    { name: "Luke Ryan", criteria: ["Played for Fremantle", "50+ goals", "Won a premiership", "Played for Melbourne", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Hayden Young", criteria: ["Top 10 draft pick", "Played for Fremantle", "Victoria"] },
    { name: "Michael Walters", criteria: ["50+ goals", "100+ goals", "All Australian squad", "Played for Fremantle", "Western Australia", "Played a finals game"] },
    { name: "Alex Pearce", criteria: ["Played for Fremantle", "Tasmania", "Played a finals game"] },
    { name: "Lachie Schultz", criteria: ["Played for Fremantle", "Victoria", "50+ goals", "Played a finals game"] },
    { name: "Patrick Dangerfield", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Geelong", "All Australian squad", "Victoria", "Brownlow medalist", "Played a finals game"] },
    { name: "Tom Hawkins", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Geelong", "Coleman medal", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Jeremy Cameron", criteria: ["50+ goals", "Won a premiership", "100+ goals", "Top 10 draft pick", "Played for Geelong", "Played for GWS Giants", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Mitch Duncan", criteria: ["50+ goals", "Played for Geelong", "Victoria", "Played a finals game"] },
    { name: "Cam Guthrie", criteria: ["Played for Geelong", "Won a premiership", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Tom Stewart", criteria: ["Played for Geelong", "Won a premiership", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Gary Rohan", criteria: ["50+ goals", "100+ goals", "Played for Geelong", "Played for Sydney", "Victoria", "Played a finals game"] },
    { name: "Brad Close", criteria: ["Played for Geelong", "50+ goals", "Won a premiership", "South Australia", "Played a finals game"] },
    { name: "Touk Miller", criteria: ["50+ goals", "Played for Gold Coast", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Ben King", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Gold Coast", "Victoria", "Played a finals game"] },
    { name: "Noah Anderson", criteria: ["Top 10 draft pick", "Played for Gold Coast", "Victoria", "Played a finals game"] },
    { name: "Matt Rowell", criteria: ["Top 10 draft pick", "Played for Gold Coast", "Victoria"] },
    { name: "Jarrod Witts", criteria: ["Played for Gold Coast", "New South Wales", "Played a finals game"] },
    { name: "Jack Lukosius", criteria: ["Top 10 draft pick", "Played for Gold Coast", "South Australia"] },
    { name: "Toby Greene", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for GWS Giants", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Josh Kelly", criteria: ["Top 10 draft pick", "Played for GWS Giants", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Stephen Coniglio", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for GWS Giants", "Western Australia", "Played a finals game"] },
    { name: "Lachie Whitfield", criteria: ["Top 10 draft pick", "Played for GWS Giants", "Victoria", "Played a finals game"] },
    { name: "Harry Himmelberg", criteria: ["Played for GWS Giants", "ACT", "Played a finals game"] },
    { name: "Sam Taylor", criteria: ["Played for GWS Giants", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Jesse Hogan", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for GWS Giants", "Played for Melbourne", "Western Australia", "Played a finals game"] },
    { name: "James Sicily", criteria: ["50+ goals", "100+ goals", "Played for Hawthorn", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Luke Breust", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Hawthorn", "New South Wales", "Played a finals game"] },
    { name: "Chad Wingard", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Hawthorn", "South Australia", "Played a finals game"] },
    { name: "Blake Hardwick", criteria: ["Played for Hawthorn", "Victoria"] },
    { name: "Mitch Lewis", criteria: ["Played for Hawthorn", "Victoria"] },
    { name: "Jaeger O'Meara", criteria: ["Top 10 draft pick", "Played for Hawthorn", "Played for Gold Coast", "Western Australia", "Played a finals game"] },
    { name: "Will Day", criteria: ["Played for Hawthorn", "South Australia"] },
    { name: "Dylan Moore", criteria: ["Played for Hawthorn", "50+ goals", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Max Gawn", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Top 10 draft pick", "Played for Melbourne", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Clayton Oliver", criteria: ["50+ goals", "Won a premiership", "100+ goals", "Top 10 draft pick", "Played for Melbourne", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Christian Petracca", criteria: ["50+ goals", "Won a premiership", "100+ goals", "Top 10 draft pick", "Played for Melbourne", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Jake Lever", criteria: ["Top 10 draft pick", "Won a premiership", "Played for Melbourne", "Played for Adelaide", "Victoria", "Played a finals game"] },
    { name: "Steven May", criteria: ["Top 10 draft pick", "Won a premiership", "Played for Melbourne", "Played for Gold Coast", "All Australian squad", "Northern Territory", "Played a finals game"] },
    { name: "Bayley Fritsch", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Melbourne", "Victoria", "Played a finals game"] },
    { name: "Kysaiah Pickett", criteria: ["Played for Melbourne", "50+ goals", "100+ goals", "Won a premiership", "South Australia", "Played a finals game"] },
    { name: "Jack Viney", criteria: ["Played for Melbourne", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Jy Simpkin", criteria: ["Played for North Melbourne", "50+ goals", "Victoria"] },
    { name: "Luke Davies-Uniacke", criteria: ["Top 10 draft pick", "Played for North Melbourne", "Victoria"] },
    { name: "Ben Cunnington", criteria: ["Played for North Melbourne", "Victoria"] },
    { name: "Nick Larkey", criteria: ["50+ goals", "100+ goals", "Played for North Melbourne", "Victoria", "All Australian squad", "Played a finals game"] },
    { name: "Cam Zurhaar", criteria: ["Played for North Melbourne", "50+ goals", "Western Australia"] },
    { name: "Bailey Scott", criteria: ["Played for North Melbourne", "Queensland"] },
    { name: "Jaidyn Stephenson", criteria: ["Top 10 draft pick", "50+ goals", "Played for North Melbourne", "Played for Collingwood", "Victoria", "Played a finals game"] },
    { name: "Travis Boak", criteria: ["50+ goals", "100+ goals", "Played for Port Adelaide", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Ollie Wines", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Port Adelaide", "All Australian squad", "Victoria", "Brownlow medalist", "Played a finals game"] },
    { name: "Connor Rozee", criteria: ["Top 10 draft pick", "Played for Port Adelaide", "All Australian squad", "South Australia", "Played a finals game"] },
    { name: "Zak Butters", criteria: ["Played for Port Adelaide", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Charlie Dixon", criteria: ["50+ goals", "100+ goals", "Played for Port Adelaide", "Played for Gold Coast", "Queensland", "Played a finals game"] },
    { name: "Dan Houston", criteria: ["Played for Port Adelaide", "Victoria", "Played a finals game"] },
    { name: "Sam Powell-Pepper", criteria: ["Played for Port Adelaide", "Western Australia", "Played a finals game"] },
    { name: "Darcy Byrne-Jones", criteria: ["Played for Port Adelaide", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Dustin Martin", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Richmond", "Brownlow medalist", "Victoria", "Played a finals game"] },
    { name: "Trent Cotchin", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Richmond", "Victoria", "Played a finals game"] },
    { name: "Tom Lynch", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Richmond", "Played for Gold Coast", "Victoria", "Played a finals game"] },
    { name: "Shai Bolton", criteria: ["50+ goals", "Played for Richmond", "Won a premiership", "Western Australia", "Played a finals game"] },
    { name: "Jack Riewoldt", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Richmond", "Tasmania", "Played a finals game"] },
    { name: "Dion Prestia", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Richmond", "Played for Gold Coast", "Victoria", "Played a finals game"] },
    { name: "Daniel Rioli", criteria: ["50+ goals", "Played for Richmond", "Won a premiership", "Northern Territory", "Played a finals game"] },
    { name: "Noah Balta", criteria: ["Played for Richmond", "Victoria", "Won a premiership", "Played a finals game"] },
    { name: "Nick Vlastuin", criteria: ["Played for Richmond", "Victoria", "Won a premiership", "Played a finals game"] },
    { name: "Tim Taranto", criteria: ["Top 10 draft pick", "Played for Richmond", "Played for GWS Giants", "Victoria", "Played a finals game"] },
    { name: "Jack Steele", criteria: ["50+ goals", "Played for St Kilda", "All Australian squad", "New South Wales", "Played a finals game"] },
    { name: "Max King", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for St Kilda", "Victoria", "Played a finals game"] },
    { name: "Rowan Marshall", criteria: ["Played for St Kilda", "Victoria", "Played a finals game"] },
    { name: "Tim Membrey", criteria: ["50+ goals", "100+ goals", "Played for St Kilda", "Victoria", "Played a finals game"] },
    { name: "Brad Crouch", criteria: ["Played for St Kilda", "Played for Adelaide", "Victoria", "Played a finals game"] },
    { name: "Dan Butler", criteria: ["Played for St Kilda", "Played for Richmond", "Victoria", "Played a finals game"] },
    { name: "Lance Franklin", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Sydney", "Played for Hawthorn", "Coleman medal", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Callum Mills", criteria: ["Top 10 draft pick", "Played for Sydney", "All Australian squad", "New South Wales", "Played a finals game"] },
    { name: "Luke Parker", criteria: ["50+ goals", "100+ goals", "Played for Sydney", "All Australian squad", "New South Wales", "Played a finals game"] },
    { name: "Isaac Heeney", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Sydney", "All Australian squad", "New South Wales", "Played a finals game"] },
    { name: "Tom Papley", criteria: ["50+ goals", "100+ goals", "Played for Sydney", "Victoria", "Played a finals game"] },
    { name: "Dane Rampe", criteria: ["Played for Sydney", "New South Wales", "Played a finals game"] },
    { name: "Nick Blakey", criteria: ["Top 10 draft pick", "Played for Sydney", "New South Wales", "Played a finals game"] },
    { name: "James Rowbottom", criteria: ["Played for Sydney", "New South Wales", "Played a finals game"] },
    { name: "Errol Gulden", criteria: ["Played for Sydney", "New South Wales", "All Australian squad", "Played a finals game"] },
    { name: "Chad Warner", criteria: ["Played for Sydney", "Western Australia", "Played a finals game"] },
    { name: "Nic Naitanui", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for West Coast", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Luke Shuey", criteria: ["50+ goals", "100+ goals", "All Australian squad", "Won a premiership", "Played for West Coast", "Victoria", "Played a finals game"] },
    { name: "Tim Kelly", criteria: ["50+ goals", "100+ goals", "Played for West Coast", "Played for Geelong", "Western Australia", "Played a finals game"] },
    { name: "Oscar Allen", criteria: ["50+ goals", "100+ goals", "Played for West Coast", "Western Australia", "Played a finals game"] },
    { name: "Andrew Gaff", criteria: ["Top 10 draft pick", "50+ goals", "All Australian squad", "Played for West Coast", "Victoria", "Played a finals game"] },
    { name: "Jeremy McGovern", criteria: ["Played for West Coast", "Won a premiership", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Jack Darling", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for West Coast", "Western Australia", "Played a finals game"] },
    { name: "Liam Ryan", criteria: ["50+ goals", "100+ goals", "All Australian squad", "Played for West Coast", "Won a premiership", "Western Australia", "Played a finals game"] },
    { name: "Dom Sheed", criteria: ["Played for West Coast", "Won a premiership", "Western Australia", "Played a finals game"] },
    { name: "Shannon Hurn", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for West Coast", "South Australia", "Played a finals game"] },
    { name: "Marcus Bontempelli", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Western Bulldogs", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Jack Macrae", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Top 10 draft pick", "Won a premiership", "Played for Western Bulldogs", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Josh Dunkley", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Western Bulldogs", "Victoria", "Played a finals game"] },
    { name: "Tim English", criteria: ["Played for Western Bulldogs", "All Australian squad", "Western Australia", "Won a premiership", "Played a finals game"] },
    { name: "Aaron Naughton", criteria: ["50+ goals", "100+ goals", "Played for Western Bulldogs", "Western Australia", "Played a finals game"] },
    { name: "Bailey Smith", criteria: ["Played for Western Bulldogs", "Victoria", "Played a finals game"] },
    { name: "Adam Treloar", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Western Bulldogs", "Played for Collingwood", "Victoria", "Played a finals game"] },
    { name: "Caleb Daniel", criteria: ["Played for Western Bulldogs", "Won a premiership", "South Australia", "Played a finals game"] },
    { name: "Tom Liberatore", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Western Bulldogs", "Victoria", "Played a finals game"] }
];


// Shuffle the player database and pick 42 players
const shuffledPlayers = playersDatabase.sort(() => 0.5 - Math.random());
const players = shuffledPlayers.slice(0, 42);

// Criteria for the bingo card
const allCriteria = [
    "50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played a finals game",
    "Played for Richmond", "Played for Carlton", "Played for Geelong", "Played for Fremantle",
    "Played for Hawthorn", "Played for Collingwood", "Played for West Coast", "Played for Sydney",
    "Played for Essendon", "Played for Melbourne", "Played for Gold Coast", "Played for GWS Giants",
    "Played for Adelaide", "Played for Brisbane Lions", "Played for Port Adelaide", "Played for St Kilda",
    "Played for North Melbourne", "Played for Western Bulldogs", 
    "Victoria", "Western Australia", "South Australia", "New South Wales", "Queensland",
    "Coleman medal", "All Australian squad", "Brownlow medalist"
];

// Select 16 random criteria for the bingo card
let bingoCardCriteria = allCriteria.sort(() => 0.5 - Math.random()).slice(0, 16);

// Initialize bingo card
const bingoCard = document.getElementById("bingo-card");
bingoCardCriteria.forEach(criterion => {
    const cell = document.createElement("div");
    cell.classList.add("bingo-cell");
    cell.textContent = criterion;
    cell.addEventListener("click", (event) => checkPlayerAgainstCriterion(cell, event));
    bingoCard.appendChild(cell);
});

// Variables for game state
let currentPlayerIndex = 0;
let attemptsLeft = 42; // This represents the number of players left

// Initialize UI elements
const currentPlayerDiv = document.getElementById("current-player");
const skipPlayerButton = document.getElementById("skip-player");
const remainingPlayersDiv = document.getElementById("remaining-attempts");

// Create and style the "-2" animation element
const minusTwoDiv = document.createElement("div");
minusTwoDiv.id = "minus-two";
minusTwoDiv.textContent = "-2";
minusTwoDiv.style.position = "absolute";
minusTwoDiv.style.fontSize = "24px";
minusTwoDiv.style.color = "#FF4C4C";
minusTwoDiv.style.fontWeight = "bold";
minusTwoDiv.style.opacity = "0";
minusTwoDiv.style.transition = "opacity 0.5s ease-out";
minusTwoDiv.style.textShadow = "2px 2px 8px rgba(0, 0, 0, 0.7)"; // Add drop shadow
document.body.appendChild(minusTwoDiv);

// Display the first player
displayCurrentPlayer();

// Display the number of remaining players
updateRemainingPlayers();

// Add event listener for "Skip Player" button
skipPlayerButton.addEventListener("click", () => {
    if (attemptsLeft > 0) {
        currentPlayerIndex++;
        attemptsLeft--; // Decrease the number of players left
        if (currentPlayerIndex < players.length) {
            displayCurrentPlayer();
            updateRemainingPlayers(); // Update the display
        } else {
            currentPlayerDiv.textContent = "No more players!";
            skipPlayerButton.disabled = true;
        }
    }
});

function displayCurrentPlayer() {
    if (currentPlayerIndex < players.length) {
        currentPlayerDiv.classList.add('fade-out');
        setTimeout(() => {
            const player = players[currentPlayerIndex];
            currentPlayerDiv.textContent = player.name;
            currentPlayerDiv.classList.remove('fade-out');
            currentPlayerDiv.classList.add('fade-in');
        }, 500);
    }
}

function checkPlayerAgainstCriterion(cell, event) {
    const player = players[currentPlayerIndex];
    if (player.criteria.includes(cell.textContent)) {
        cell.classList.add("active");
        currentPlayerIndex++;
        attemptsLeft--; // Decrease the number of players left by 1 for correct answer
        if (currentPlayerIndex < players.length && attemptsLeft > 0) {
            displayCurrentPlayer();
            updateRemainingPlayers(); // Update the display
        } else {
            currentPlayerDiv.textContent = "Game Over!";
            skipPlayerButton.disabled = true;
        }
    } else {
        cell.classList.add("incorrect");
        showMinusTwoAnimation(event); // Pass the event to position the "-2" over the mouse
        setTimeout(() => {
            cell.classList.remove("incorrect");
            currentPlayerIndex++;
            attemptsLeft -= 2; // Decrease the number of players left by 2 for incorrect answer
            if (currentPlayerIndex < players.length && attemptsLeft > 0) {
                displayCurrentPlayer();
                updateRemainingPlayers(); // Update the display
            } else {
                currentPlayerDiv.textContent = "Game Over!";
                skipPlayerButton.disabled = true;
            }
        }, 500); // Flash red for 500ms before moving to the next player
    }
}

function updateRemainingPlayers() {
    remainingPlayersDiv.textContent = `Players left: ${attemptsLeft}`; // Updated text to reflect the correct count
}

function showMinusTwoAnimation(event) {
    minusTwoDiv.style.left = `${event.pageX}px`; // Use pageX for more accurate positioning
    minusTwoDiv.style.top = `${event.pageY - 20}px`; // Adjust slightly above the cursor
    minusTwoDiv.style.opacity = "1";
    minusTwoDiv.style.transform = "scale(1.5)";
    minusTwoDiv.style.textShadow = "4px 4px 10px rgba(0, 0, 0, 1)"; // Increase shadow for clarity

    setTimeout(() => {
        minusTwoDiv.style.opacity = "0";
    }, 1500); // Keep the "-2" visible for 1.5 seconds before fading out
}

// JavaScript for handling the info popup
document.getElementById('info-icon').addEventListener('click', function () {
    document.getElementById('info-popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function () {
    closePopup();
});

document.querySelector('.overlay').addEventListener('click', function () {
    closePopup();
});

document.getElementById('generate-new-card').addEventListener('click', function () {
    location.reload(); // This reloads the page
});

function closePopup() {
    document.getElementById('info-popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

// Lock screen zoom to 100%
document.body.style.zoom = "90%";



















