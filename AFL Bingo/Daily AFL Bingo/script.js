// Constants
const AEST_OFFSET = 10; // AEST is UTC+10
const MAX_ATTEMPTS = 42; // Maximum attempts allowed
let currentPlayerIndex = 0;
let attemptsLeft = MAX_ATTEMPTS;
let nextResetTime = calculateNextResetTime();

// Example database of current 2024 AFL players with their matching criteria
const playersDatabase = [
    { name: "Rory Laird", criteria: ["50+ goals", "All Australian squad", "Played for Adelaide", "South Australia"] },
    { name: "Taylor Walker", criteria: ["50+ goals", "100+ goals", "Played a finals game", "Played for Adelaide", "South Australia", "All Australian squad"] },
    { name: "Jordan Dawson", criteria: ["Played for Adelaide", "50+ goals", "All Australian squad", "South Australia"] },
    { name: "Ben Keays", criteria: ["Played for Adelaide", "Played for Brisbane", "Victoria"] },
    { name: "Izak Rankine", criteria: ["Played for Adelaide", "Played for Gold Coast", "50+ goals", "100+ goals", "Top 10 draft pick", "South Australia"] },
    { name: "Riley Thilthorpe", criteria: ["Top 10 draft pick", "Played for Adelaide", "South Australia"] },
    { name: "Jake Soligo", criteria: ["Played for Adelaide", "Victoria"] },
    { name: "Josh Rachele", criteria: ["Played for Adelaide", "50+ goals", "Victoria"] },
    { name: "Lachie Neale", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Brisbane Lions", "Played for Fremantle", "All Australian squad", "South Australia", "Brownlow medalist", "Played a finals game"] },
    { name: "Charlie Cameron", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Brisbane Lions", "All Australian squad", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Hugh McCluggage", criteria: ["Top 10 draft pick", "Won a premiership", "Played for Brisbane Lions", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Dayne Zorko", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Brisbane Lions", "All Australian squad", "Queensland", "Played a finals game"] },
    { name: "Joe Daniher", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Top 10 draft pick", "Played for Brisbane Lions", "Victoria", "Played a finals game"] },
    { name: "Cam Rayner", criteria: ["50+ goals", "Top 10 draft pick", "100+ goals", "Won a premiership", "Played for Brisbane Lions", "Victoria", "Played a finals game"] },
    { name: "Kai Lohmann", criteria: ["Played for Brisbane Lions", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Harris Andrews", criteria: ["Played for Brisbane Lions", "Won a premiership", "All Australian squad", "Queensland", "Played a finals game"] },
    { name: "Josh Dunkley", criteria: ["Played for Brisbane Lions", "50+ goals", "Played for Western Bulldogs", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Zac Bailey", criteria: ["Played for Brisbane Lions", "Won a premiership", "South Australia", "Played a finals game"] },
    { name: "Will Ashcroft", criteria: ["Played for Brisbane Lions", "Top 10 draft pick", "Won a premiership", "Queensland", "Played a finals game"] },
    { name: "Patrick Cripps", criteria: ["50+ goals", "Top 10 draft pick", "Played for Carlton", "All Australian squad", "Brownlow medalist", "Western Australia"] },
    { name: "Sam Walsh", criteria: ["Top 10 draft pick", "Played for Carlton", "50+ goals", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Charlie Curnow", criteria: ["50+ goals", "All Australian squad", "100+ goals", "Top 10 draft pick", "Played for Carlton", "Coleman medal", "Victoria", "Played a finals game"] },
    { name: "Harry McKay", criteria: ["50+ goals", "100+ goals", "All Australian squad", "Top 10 draft pick", "Played for Carlton", "Coleman medal", "Victoria", "Played a finals game"] },
    { name: "Jacob Weitering", criteria: ["Top 10 draft pick", "Played for Carlton", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Adam Saad", criteria: ["Played for Carlton", "Played for Essendon", "Victoria"] },
    { name: "Sam Docherty", criteria: ["Played for Carlton", "All Australian squad", "Victoria","50+ goals", "Played a finals game"] },
    { name: "Jack Martin", criteria: ["Played for Carlton", "Played for Gold Coast", "Northern Territory"] },
    { name: "Adam Cerra", criteria: ["Played for Carlton", "Played for Fremantle", "Victoria", "Played a finals game"] },
    { name: "Matthew Owies", criteria: ["50+ goals", "Played for Carlton", "Played for West Coast", "Victoria", "Played a finals game"] },
    { name: "Mitch McGovern", criteria: ["Played for Carlton", "South Australia"] },
    { name: "Matthew Kennedy", criteria: ["Played for Carlton", "Played for Western Bulldogs", "New South Wales"] },
    { name: "Scott Pendlebury", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Collingwood", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Darcy Moore", criteria: ["Top 10 draft pick", "Played for Collingwood", "All Australian squad", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Jordan De Goey", criteria: ["50+ goals", "100+ goals", "All Australian squad", "Top 10 draft pick", "Played for Collingwood", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Jack Crisp", criteria: ["Played for Collingwood", "50+ goals", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Bobby Hill", criteria: ["Played for Collingwood", "Played for GWS Giants", "50+ goals", "Won a premiership", "Western Australia", "Played a finals game"] },
    { name: "Jeremy Howe", criteria: ["Played for Collingwood", "Played for Melbourne","Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Brayden Maynard", criteria: ["Played for Collingwood", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Joe Richards", criteria: ["Played for Collingwood", "Played for Port Adelaide", "Victoria"] },
    { name: "Josh Daicos", criteria: ["Played for Collingwood", "All Australian squad", "50+ goals", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Nick Daicos", criteria: ["Top 10 draft pick", "Won a premiership", "All Australian squad", "Played for Collingwood", "Victoria", "Played a finals game"] },
    { name: "Steele Sidebottom", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Collingwood", "Victoria", "Played a finals game"] },
    { name: "John Noble", criteria: ["Played for Collingwood", "Played for Gold Coast", "South Australia", "Played a finals game"] },
    { name: "Lachie Schultz", criteria: ["50+ goals", "100+ goals", "Played for Collingwood", "Played for Fremantle", "New South Wales", "Played a finals game"] },
    { name: "Zach Merrett", criteria: ["50+ goals", "Played for Essendon", "All Australian squad", "Victoria"] },
    { name: "Darcy Parish", criteria: ["Top 10 draft pick", "Played for Essendon", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Jake Stringer", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for GWS Giants", "Won a premiership", "Played for Essendon", "Played for Western Bulldogs", "Victoria", "Played a finals game"] },
    { name: "Andrew McGrath", criteria: ["Top 10 draft pick", "Played for Essendon", "Victoria"] },
    { name: "Nic Martin", criteria: ["Played for Essendon", "Western Australia"] },
    { name: "Elijah Tsatas", criteria: ["Played for Essendon", "Top 10 draft pick", "Victoria"] },
    { name: "Todd Goldstein", criteria: ["Played for Essendon", "Played for North Melbourne", "Played a finals game", "All Australian squad", "Victoria"] },
    { name: "Kyle Langford", criteria: ["Played for Essendon", "50+ goals", "100+ goals", "Victoria"] },
    { name: "Peter Wright", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Essendon", "Played for Gold Coast", "Victoria"] },
    { name: "Sam Draper", criteria: ["Played for Essendon", "South Australia"] },
    { name: "Dylan Shiel", criteria: ["Played for Essendon", "50+ goals", "Played for GWS Giants", "Victoria", "Played a finals game"] },
    { name: "Nat Fyfe", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Fremantle", "All Australian squad", "Western Australia", "Brownlow medalist", "Played a finals game"] },
    { name: "Andrew Brayshaw", criteria: ["Top 10 draft pick", "50+ goals", "Played for Fremantle", "All Australian squad", "Victoria"] },
    { name: "Caleb Serong", criteria: ["Top 10 draft pick", "Played for Fremantle", "All Australian squad", "Victoria"] },
    { name: "Sean Darcy", criteria: ["Played for Fremantle", "Victoria", "Played a finals game"] },
    { name: "Jeremy Sharp", criteria: ["Played for Fremantle", "Played for Gold Coast", "Victoria"] },
    { name: "Luke Ryan", criteria: ["Played for Fremantle", "50+ goals", "Won a premiership", "Played for Melbourne", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Hayden Young", criteria: ["Top 10 draft pick", "Played for Fremantle", "Victoria"] },
    { name: "Michael Walters", criteria: ["50+ goals", "100+ goals", "All Australian squad", "Played for Fremantle", "Western Australia", "Played a finals game"] },
    { name: "Alex Pearce", criteria: ["Played for Fremantle", "Tasmania", "Played a finals game"] },
    { name: "Lachie Schultz", criteria: ["Played for Fremantle", "Played for Collingwood", "Victoria", "50+ goals", "Played a finals game"] },
    { name: "Patrick Dangerfield", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Geelong", "All Australian squad", "Victoria", "Brownlow medalist", "Played a finals game"] },
    { name: "Tom Hawkins", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Geelong", "Coleman medal", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Jeremy Cameron", criteria: ["50+ goals", "Won a premiership", "100+ goals", "Top 10 draft pick", "Played for Geelong", "Played for GWS Giants", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Mitch Duncan", criteria: ["50+ goals", "Played for Geelong", "Victoria", "Played a finals game"] },
    { name: "Max Holmes", criteria: ["Played for Geelong", "Victoria", "Played a finals game"] },
    { name: "Ollie Dempsey", criteria: ["Played for Geelong", "Victoria", "Played a finals game"] },
    { name: "Gryan Miers", criteria: ["50+ goals", "100+ goals", "Played for Geelong", "Victoria", "Won a premiership", "Played a finals game"] },
    { name: "Sam De Koning", criteria: ["Won a premiership", "Played for Geelong", "Victoria", "Played a finals game"] },
    { name: "Cam Guthrie", criteria: ["Played for Geelong", "Won a premiership", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Tom Stewart", criteria: ["Played for Geelong", "Won a premiership", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Gary Rohan", criteria: ["50+ goals", "100+ goals", "Played for Geelong", "Played for Sydney", "Victoria", "Played a finals game"] },
    { name: "Brad Close", criteria: ["Played for Geelong", "50+ goals", "Won a premiership", "South Australia", "Played a finals game"] },
    { name: "Touk Miller", criteria: ["50+ goals", "Played for Gold Coast", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Ben King", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Gold Coast", "Victoria", "Played a finals game"] },
    { name: "Noah Anderson", criteria: ["Top 10 draft pick", "Played for Gold Coast", "Victoria", "Played a finals game"] },
    { name: "Matt Rowell", criteria: ["Top 10 draft pick", "Played for Gold Coast", "Victoria"] },
    { name: "Mac Andrew", criteria: ["Top 10 draft pick", "Played for Gold Coast", "Victoria"] },
    { name: "Malcom Rosas", criteria: ["Played for Gold Coast", "Northern Territory"] },
    { name: "Jarrod Witts", criteria: ["Played for Gold Coast", "New South Wales", "Played a finals game"] },
    { name: "Jack Lukosius", criteria: ["Top 10 draft pick", "Played for Gold Coast", "Played for Port Adelaide", "South Australia"] },
    { name: "Toby Greene", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for GWS Giants", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Josh Kelly", criteria: ["Top 10 draft pick", "Played for GWS Giants", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Stephen Coniglio", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for GWS Giants", "Western Australia", "Played a finals game"] },
    { name: "Lachie Whitfield", criteria: ["Top 10 draft pick", "Played for GWS Giants", "Victoria", "Played a finals game"] },
    { name: "Harry Himmelberg", criteria: ["Played for GWS Giants", "Played for Collingwood", "New South Wales", "Played a finals game"] },
    { name: "Harry Perryman", criteria: ["Played for GWS Giants", "ACT", "Played a finals game"] },
    { name: "Tom Green", criteria: ["Top 10 draft pick", "Played for GWS Giants", "Victoria", "Played a finals game"] },
    { name: "Finn Callaghan", criteria: ["Top 10 draft pick", "Played for GWS Giants", "ACT", "Played a finals game"] },
    { name: "Callan Ward", criteria: ["Played for GWS Giants", "50+ goals", "100+ goals", "Victoria", "Played a finals game"] },
    { name: "Aaron Cadman", criteria: ["Played for GWS Giants", "Victoria", "Top 10 draft pick", "Played a finals game"] },
    { name: "Sam Taylor", criteria: ["Played for GWS Giants", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Jesse Hogan", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for GWS Giants", "Coleman medal", "Played for Melbourne", "Played for Fremantle", "Western Australia", "Played a finals game"] },
    { name: "James Sicily", criteria: ["50+ goals", "100+ goals", "Played for Hawthorn", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Luke Breust", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Hawthorn", "New South Wales", "Played a finals game"] },
    { name: "Chad Wingard", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Hawthorn", "South Australia", "Played a finals game"] },
    { name: "Blake Hardwick", criteria: ["Played for Hawthorn", "Victoria"] },
    { name: "Mitch Lewis", criteria: ["Played for Hawthorn", "Victoria"] },
    { name: "Josh Weddle", criteria: ["Played for Hawthorn", "Victoria"] },
    { name: "Jack Ginnivan", criteria: ["Played for Hawthorn", "Won a premiership", "Played for Collingwood", "50+ goals", "Victoria"] },
    { name: "Massimo D'Ambrosio", criteria: ["Played for Hawthorn", "Played for Essendon", "Victoria"] },
    { name: "Jaeger O'Meara", criteria: ["Top 10 draft pick", "Played for Hawthorn", "Played for Fremantle", "Played for Gold Coast", "Western Australia", "Played a finals game"] },
    { name: "Will Day", criteria: ["Played for Hawthorn", "South Australia"] },
    { name: "Jai Newcombe", criteria: ["Played for Hawthorn", "Victoria"] },
    { name: "Dylan Moore", criteria: ["Played for Hawthorn", "50+ goals", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Max Gawn", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Top 10 draft pick", "Played for Melbourne", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Clayton Oliver", criteria: ["50+ goals", "Won a premiership", "100+ goals", "Top 10 draft pick", "Played for Melbourne", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Christian Petracca", criteria: ["50+ goals", "Won a premiership", "100+ goals", "Top 10 draft pick", "Played for Melbourne", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Jake Lever", criteria: ["Top 10 draft pick", "Won a premiership", "Played for Melbourne", "Played for Adelaide", "Victoria", "Played a finals game"] },
    { name: "Steven May", criteria: ["Top 10 draft pick", "Won a premiership", "Played for Melbourne", "Played for Gold Coast", "All Australian squad", "Northern Territory", "Played a finals game"] },
    { name: "Bayley Fritsch", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Melbourne", "Victoria", "Played a finals game"] },
    { name: "Kysaiah Pickett", criteria: ["Played for Melbourne", "50+ goals", "100+ goals", "Won a premiership", "South Australia", "Played a finals game"] },
    { name: "Jack Viney", criteria: ["Played for Melbourne", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Alex Neal-Bullen", criteria: ["Played for Melbourne", "50+ goals", "100+ goals", "Played for Adelaide", "Won a premiership", "South Australia", "Played a finals game"] },
    { name: "Jack Billings", criteria: ["Played for Melbourne", "Played for St Kilda", "50+ goals", "100+ goals", "Top 10 draft pick", "Victoria", "Played a finals game"] },
    { name: "Jy Simpkin", criteria: ["Played for North Melbourne", "50+ goals", "Victoria"] },
    { name: "Luke Davies-Uniacke", criteria: ["Top 10 draft pick", "Played for North Melbourne", "Victoria"] },
    { name: "Ben Cunnington", criteria: ["Played for North Melbourne", "Victoria"] },
    { name: "Nick Larkey", criteria: ["50+ goals", "100+ goals", "Played for North Melbourne", "Victoria", "All Australian squad", "Played a finals game"] },
    { name: "Cam Zurhaar", criteria: ["Played for North Melbourne", "50+ goals", "Western Australia"] },
    { name: "Bailey Scott", criteria: ["Played for North Melbourne", "Queensland"] },
    { name: "Tristan Xerri", criteria: ["Played for North Melbourne", "All Australian squad", "Victorian"] },
    { name: "Zac Fisher", criteria: ["50+ goals", "Played for North Melbourne", "Played for Carlton", "Western Australia"] },
    { name: "Harry Sheezel", criteria: ["Played for North Melbourne", "Top 10 draft pick", "All Australian squad", "Victoria"] },
    { name: "Jaidyn Stephenson", criteria: ["Top 10 draft pick", "50+ goals", "Played for North Melbourne", "Played for Collingwood", "Victoria", "Played a finals game"] },
    { name: "Travis Boak", criteria: ["50+ goals", "100+ goals", "Played for Port Adelaide", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Ollie Wines", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Port Adelaide", "All Australian squad", "Victoria", "Brownlow medalist", "Played a finals game"] },
    { name: "Connor Rozee", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Port Adelaide", "All Australian squad", "South Australia", "Played a finals game"] },
    { name: "Zak Butters", criteria: ["50+ goals","Played for Port Adelaide", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Charlie Dixon", criteria: ["50+ goals", "100+ goals", "Played for Port Adelaide", "Played for Gold Coast", "Queensland", "Played a finals game"] },
    { name: "Dan Houston", criteria: ["Played for Port Adelaide", "Played for Collingwood", "Victoria", "Played a finals game"] },
    { name: "Sam Powell-Pepper", criteria: ["Played for Port Adelaide", "Western Australia", "Played a finals game"] },
    { name: "Tom Clurey", criteria: ["Played for Port Adelaide", "Victoria", "Played a finals game"] },
    { name: "Esava Ratugolea", criteria: ["Played for Port Adelaide", "Played for Geelong", "Victoria", "Played a finals game"] },
    { name: "Jason Horne-Francis", criteria: ["Played for Port Adelaide", "Top 10 draft pick", "Played for North Melbourne", "South Australia", "Played a finals game"] },
    { name: "Willie Rioli", criteria: ["Played for Port Adelaide", "Won a premiership", "Played for West Coast", "50+ goals", "100+ goals", "South Australia", "Played a finals game"] },
    { name: "Darcy Byrne-Jones", criteria: ["Played for Port Adelaide", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Dustin Martin", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Richmond", "Brownlow medalist", "Victoria", "Played a finals game"] },
    { name: "Trent Cotchin", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Richmond", "Victoria", "Played a finals game"] },
    { name: "Tom Lynch", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Richmond", "Played for Gold Coast", "Victoria", "Played a finals game"] },
    { name: "Shai Bolton", criteria: ["50+ goals", "Played for Richmond", "Played for Fremantle", "Won a premiership", "Western Australia", "Played a finals game"] },
    { name: "Jack Riewoldt", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Richmond", "Tasmania", "Played a finals game"] },
    { name: "Dion Prestia", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Richmond", "Played for Gold Coast", "Victoria", "Played a finals game"] },
    { name: "Daniel Rioli", criteria: ["50+ goals", "Played for Richmond", "Played for Gold Coast", "Won a premiership", "Northern Territory", "Played a finals game"] },
    { name: "Noah Balta", criteria: ["Played for Richmond", "Victoria", "Won a premiership", "Played a finals game"] },
    { name: "Jack Graham", criteria: ["Played for Richmond", "Played for West Coast", "50+ goals", "South Australia", "Won a premiership", "Played a finals game"] },
    { name: "Liam Baker", criteria: ["Played for Richmond", "Played for West Coast", "50+ goals", "Western Australia", "Won a premiership", "Played a finals game"] },
    { name: "Jacob Hopper", criteria: ["Played for Richmond", "Played for GWS", "50+ goals", "Top 10 draft pick", "New South Wales", "Played a finals game"] },
    { name: "Nick Vlastuin", criteria: ["Played for Richmond", "Victoria", "Won a premiership", "Played a finals game"] },
    { name: "Tim Taranto", criteria: ["Top 10 draft pick", "Played for Richmond", "Played for GWS Giants", "Victoria", "Played a finals game"] },
    { name: "Jack Steele", criteria: ["50+ goals", "100+ goals", "Played for St Kilda", "All Australian squad", "New South Wales", "Played a finals game"] },
    { name: "Max King", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for St Kilda", "Victoria", "Played a finals game"] },
    { name: "Rowan Marshall", criteria: ["Played for St Kilda", "Victoria", "Played a finals game"] },
    { name: "Paddy Dow", criteria: ["Played for St Kilda", "Played for Carlton", "Top 10 draft pick", "Victoria", "Played a finals game"] },
    { name: "Bradley Hill", criteria: ["50+ goals", "100+ goals", "Played for St Kilda", "Played for Hawthorn", "Played for Fremantle", "Western Australia", "Victoria", "Played a finals game"] },
    { name: "Jack Higgins", criteria: ["Played for St Kilda", "Played for Richmond", "50+ goals", "100+ goals", "Victoria", "Played a finals game"] },
    { name: "Brad Crouch", criteria: ["Played for St Kilda", "Played for Adelaide", "Victoria", "Played a finals game"] },
    { name: "Liam Henry", criteria: ["Top 10 draft pick", "Played for St Kilda", "Played for Fremantle", "Western Australia", "Played a finals game"] },
    { name: "Dan Butler", criteria: ["Played for St Kilda", "Played for Richmond", "Victoria", "Played a finals game"] },
    { name: "Tom Campbell", criteria: ["Played for St Kilda", "Played for Melbourne", "Played for North Melbourne", "Played for Western Bulldogs", "Victoria", "Played a finals game"] },
    { name: "Tim Membrey", criteria: ["50+ goals", "100+ goals", "Played for St Kilda", "Played for Sydney", "Victoria", "Played a finals game"] },
    { name: "Josh Battle", criteria: ["Played for St Kilda", "Played for Hawthorn", "Victoria", "Played a finals game"] },
    { name: "Lance Franklin", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Sydney", "Played for Hawthorn", "Coleman medal", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Callum Mills", criteria: ["Top 10 draft pick", "Played for Sydney", "All Australian squad", "New South Wales", "Played a finals game"] },
    { name: "Luke Parker", criteria: ["50+ goals", "100+ goals", "Played for Sydney", "Played for North Melbourne", "All Australian squad", "New South Wales", "Played a finals game"] },
    { name: "Isaac Heeney", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for Sydney", "All Australian squad", "New South Wales", "Played a finals game"] },
    { name: "Tom Papley", criteria: ["50+ goals", "100+ goals", "Played for Sydney", "Victoria", "Played a finals game"] },
    { name: "Dane Rampe", criteria: ["Played for Sydney", "New South Wales", "Played a finals game"] },
    { name: "Brodie Grundy", criteria: ["50+ goals", "All Australian squad", "Played for Sydney", "Played for Melbourne", "Played for Collingwood", "South Australia", "Played a finals game"] },
    { name: "Nick Blakey", criteria: ["Top 10 draft pick", "Played for Sydney", "New South Wales", "Played a finals game"] },
    { name: "James Rowbottom", criteria: ["Played for Sydney", "New South Wales", "Played a finals game"] },
    { name: "Joel Amartey", criteria: ["Played for Sydney", "50+ goals", "Victoria", "Played a finals game"] },
    { name: "James Jordon", criteria: ["Played for Sydney", "Played for Melbourne", "Won a premiership", "Victoria", "Played a finals game"] },
    { name: "Errol Gulden", criteria: ["Played for Sydney", "New South Wales", "All Australian squad", "Played a finals game"] },
    { name: "Chad Warner", criteria: ["50+ goals", "Played for Sydney", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Nic Naitanui", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Played for West Coast", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Luke Shuey", criteria: ["50+ goals", "100+ goals", "All Australian squad", "Won a premiership", "Played for West Coast", "Victoria", "Played a finals game"] },
    { name: "Tim Kelly", criteria: ["50+ goals", "100+ goals", "Played for West Coast", "Played for Geelong", "Western Australia", "Played a finals game"] },
    { name: "Oscar Allen", criteria: ["50+ goals", "100+ goals", "Played for West Coast", "Western Australia", "Played a finals game"] },
    { name: "Harley Reid", criteria: ["Played for West Coast", "Victoria", "Top 10 draft pick",] },
    { name: "Jamie Cripps", criteria: ["50+ goals", "100+ goals", "Played for West Coast", "Won a premiership", "Western Australia", "Played for Hawthorn"] },
    { name: "Tom Barrass", criteria: ["Played for West Coast", "Won a premiership", "Western Australia", "Played for Hawthorn"] },
    { name: "Elliot Yeo", criteria: ["50+ goals", "All Australian squad", "Played for West Coast", "Played for Brisbane", "Won a premiership", "Western Australia", "Played a finals game"] },
    { name: "Jayden Hunt", criteria: ["50+ goals", "Played for West Coast", "Won a premiership", "Played for Melbourne", "Victoria", "Played a finals game"] },
    { name: "Andrew Gaff", criteria: ["Top 10 draft pick", "50+ goals", "All Australian squad", "Played for West Coast", "Victoria", "Played a finals game"] },
    { name: "Jeremy McGovern", criteria: ["Played for West Coast", "Won a premiership", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Jack Darling", criteria: ["50+ goals", "100+ goals", "Played for North Melbourne", "Won a premiership", "Played for West Coast", "Western Australia", "Played a finals game"] },
    { name: "Liam Ryan", criteria: ["50+ goals", "100+ goals", "All Australian squad", "Played for West Coast", "Won a premiership", "Western Australia", "Played a finals game"] },
    { name: "Dom Sheed", criteria: ["Played for West Coast", "Won a premiership", "Western Australia", "Played a finals game"] },
    { name: "Shannon Hurn", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for West Coast", "South Australia", "Played a finals game"] },
    { name: "Marcus Bontempelli", criteria: ["50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played for Western Bulldogs", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Jack Macrae", criteria: ["50+ goals", "100+ goals", "Played for St Kilda", "Won a premiership", "Top 10 draft pick", "Won a premiership", "Played for Western Bulldogs", "All Australian squad", "Victoria", "Played a finals game"] },
    { name: "Josh Dunkley", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Western Bulldogs", "Victoria", "Played a finals game"] },
    { name: "Tim English", criteria: ["Played for Western Bulldogs", "All Australian squad", "Western Australia", "Won a premiership", "Played a finals game"] },
    { name: "Aaron Naughton", criteria: ["50+ goals", "100+ goals", "Played for Western Bulldogs", "Western Australia", "Played a finals game"] },
    { name: "Bailey Smith", criteria: ["Played for Western Bulldogs", "Played for Geelong", "Victoria", "Played a finals game"] },
    { name: "Sam Darcy", criteria: ["Played for Western Bulldogs",  "Top 10 draft pick", "Played for Geelong", "Victoria", "Played a finals game"] },
    { name: "Rory Lobb", criteria: ["Played for Western Bulldogs", "Played for GWS", "Played for Fremantle", "Western Australia", "50+ goals", "100+ goals", "Played a finals game"] },
    { name: "Cody Weightman", criteria: ["50+ goals", "100+ goals", "Played for Western Bulldogs", "Victoria", "Played a finals game"] },
    { name: "Adam Treloar", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Western Bulldogs", "Played for Collingwood", "Victoria", "Played a finals game"] },
    { name: "Caleb Daniel", criteria: ["Played for Western Bulldogs", "Played for North Melbourne", "Won a premiership", "South Australia", "Played a finals game"] },
    { name: "Tim English", criteria: ["50+ goals", "Played for Western Bulldogs", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Leigh Matthews", criteria: ["50+ goals", "100+ goals", "Played for Hawthorn", "Won a premiership", "All Australian squad", "Coleman medal", "Victoria", "Played a finals game"] },
    { name: "Tim English", criteria: ["50+ goals", "Played for Western Bulldogs", "All Australian squad", "Western Australia", "Played a finals game"] },
    { name: "Tom Liberatore", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Western Bulldogs", "Victoria", "Played a finals game"] },
    { name: "Gary Ablett Sr.", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Geelong", "Played for Hawthorn", "Victoria", "Coleman medal", "All Australian squad", "Played a finals game"] },
    { name: "Wayne Carey", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Adelaide", "Played for North Melbourne", "New South Wales", "All Australian squad", "Played a finals game"] },
    { name: "Wayne Carey", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Adelaide", "Played for North Melbourne", "New South Wales", "All Australian squad", "Played a finals game"] },
    { name: "Chris Judd", criteria: ["50+ goals", "100+ goals", "Won a premiership","Top 10 draft pick", "Played for West Coast", "Played for Carlton", "Victoria", "All Australian squad", "Brownlow medalist", "Played a finals game"] },
    { name: "Gary Ablett Jr.", criteria: ["50+ goals", "100+ goals", "Won a premiership", "Played for Geelong", "Played for Gold Coast", "Victoria", "All Australian squad", "Brownlow medalist", "Played a finals game"] },

];

// Shuffle the players and select 42
const shuffledPlayers = [...playersDatabase].sort(() => Math.random() - 0.5);
const players = shuffledPlayers.slice(0, MAX_ATTEMPTS);

// Bingo card criteria
const allCriteria = [
    "50+ goals", "100+ goals", "Top 10 draft pick", "Won a premiership", "Played a finals game",
    "Played for Richmond", "Played for Carlton", "Played for Geelong", "Played for Fremantle",
    "Played for Hawthorn", "Played for Collingwood", "Played for West Coast", "Played for Sydney",
    "Played for Essendon", "Played for Melbourne", "Played for Gold Coast", "Played for GWS Giants",
    "Played for Adelaide", "Played for Brisbane Lions", "Played for Port Adelaide", "Played for St Kilda",
    "Played for North Melbourne", "Played for Western Bulldogs",
    "Victoria", "Western Australia", "South Australia", "New South Wales", "Queensland",
    "Coleman medal", "All Australian squad", "Brownlow medalist",
];
const bingoCardCriteria = [...allCriteria].sort(() => Math.random() - 0.5).slice(0, 16);

// UI Elements
const bingoCard = document.getElementById("bingo-card");
const currentPlayerDiv = document.getElementById("current-player");
const remainingPlayersDiv = document.getElementById("remaining-attempts");
const skipPlayerButton = document.getElementById("skip-player");

// Create a reset timer
const resetTimerDiv = document.createElement("div");
resetTimerDiv.id = "reset-timer";
resetTimerDiv.style.textAlign = "center";
resetTimerDiv.style.fontWeight = "bold";
resetTimerDiv.style.margin = "20px 0";
resetTimerDiv.style.fontSize = "24px";
document.querySelector(".container").insertBefore(resetTimerDiv, bingoCard);

// Create and style the "-2" animation element
const minusTwoDiv = document.createElement("div");
minusTwoDiv.id = "minus-two";
minusTwoDiv.textContent = "-2";
minusTwoDiv.style.position = "absolute";
minusTwoDiv.style.fontSize = "32px";
minusTwoDiv.style.color = "#FF4C4C";
minusTwoDiv.style.fontWeight = "bold";
minusTwoDiv.style.opacity = "0";
minusTwoDiv.style.transition = "opacity 0.5s ease-out";
minusTwoDiv.style.textShadow = "2px 2px 8px rgba(0, 0, 0, 0.7)";
document.body.appendChild(minusTwoDiv);

// Generate the bingo card
function generateBingoCard() {
    bingoCard.innerHTML = "";
    bingoCardCriteria.forEach((criterion) => {
        const cell = document.createElement("div");
        cell.classList.add("bingo-cell");
        cell.textContent = criterion;
        cell.addEventListener("click", (event) => checkPlayerAgainstCriterion(cell, event));
        bingoCard.appendChild(cell);
    });
}

// Calculate the next reset time (6 AM AEST)
function calculateNextResetTime() {
    const now = new Date();
    const nextReset = new Date(now);
    nextReset.setUTCHours(20, 0, 0, 0); // 6 AM AEST = 20:00 UTC
    if (now.getUTCHours() >= 20) {
        nextReset.setUTCDate(nextReset.getUTCDate() + 1);
    }
    return nextReset;
}

// Update the countdown timer
function updateResetTimer() {
    const now = new Date();
    const timeLeft = nextResetTime - now;

    if (timeLeft <= 0) {
        resetGame();
        return;
    }

    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    resetTimerDiv.textContent = `Next Reset: ${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Display the current player
function displayCurrentPlayer() {
    if (currentPlayerIndex < players.length) {
        currentPlayerDiv.textContent = players[currentPlayerIndex].name;
    } else {
        currentPlayerDiv.textContent = "Game Over!";
        skipPlayerButton.disabled = true;
    }
}
// Handle "Skip Player" button
skipPlayerButton.addEventListener("click", () => {
    if (attemptsLeft > 0 && currentPlayerIndex < players.length - 1) {
        currentPlayerIndex++; // Move to the next player
        attemptsLeft--; // Deduct one attempt for skipping
        displayCurrentPlayer(); // Update the current player display
        updateRemainingPlayers(); // Update the attempts left display
    } else {
        gameOver(); // End the game if no attempts remain or players run out
    }
});


// Check if a criterion matches the current player
function checkPlayerAgainstCriterion(cell, event) {
    const player = players[currentPlayerIndex];
    if (player.criteria.includes(cell.textContent)) {
        cell.classList.add("active");
        attemptsLeft--; // Decrease attempts for a correct guess
    } else {
        cell.classList.add("incorrect");
        showMinusTwoAnimation(event); // Trigger the "-2" animation on incorrect guess
        setTimeout(() => cell.classList.remove("incorrect"), 500);
        attemptsLeft -= 2; // Decrease attempts for an incorrect guess
    }

    updateRemainingPlayers(); // Update the attempts UI
    advanceToNextPlayer(); // Ensure the player cycles to the next one

    if (attemptsLeft <= 0 || currentPlayerIndex >= players.length) {
        endGame(); // End the game if no attempts or players remain
    }
}

// Show "-2" animation
function showMinusTwoAnimation(event) {
    const minusTwoDiv = document.createElement("div");
    minusTwoDiv.textContent = "-2";
    minusTwoDiv.style.position = "absolute";
    minusTwoDiv.style.left = `${event.pageX}px`;
    minusTwoDiv.style.top = `${event.pageY - 20}px`;
    minusTwoDiv.style.fontSize = "32px";
    minusTwoDiv.style.color = "#FF4C4C";
    minusTwoDiv.style.fontWeight = "bold";
    minusTwoDiv.style.opacity = "1";
    minusTwoDiv.style.transition = "opacity 0.5s ease-out";
    minusTwoDiv.style.textShadow = "2px 2px 8px rgba(0, 0, 0, 0.7)";
    document.body.appendChild(minusTwoDiv);

    // Fade out and remove the "-2" element
    setTimeout(() => {
        minusTwoDiv.style.opacity = "0";
        setTimeout(() => minusTwoDiv.remove(), 500); // Remove after fade-out
    }, 500);
}

function gameOver() {
    // Disable skip button
    skipPlayerButton.disabled = true;

    // Disable all cells on the bingo board
    disableBingoBoard();

    // Create the popup container
    const popup = document.createElement("div");
    popup.id = "game-over-popup";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px";
    popup.style.backgroundColor = "#FFFFFF";
    popup.style.border = "2px solid #FF4500";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
    popup.style.textAlign = "center";
    popup.style.zIndex = "1000";
    
    // Add the Game Over message
    const gameOverText = document.createElement("h2");
    gameOverText.textContent = "Game Over!";
    gameOverText.style.color = "#FF4500";
    gameOverText.style.marginBottom = "20px";
    popup.appendChild(gameOverText);

    // Add the return to play message
    const returnText = document.createElement("p");
    returnText.textContent = "Return to play again tomorrow";
    returnText.style.fontSize = "18px";
    returnText.style.color = "#333";
    returnText.style.marginBottom = "20px";
    popup.appendChild(returnText);

    // Add the countdown
    const countdownText = document.createElement("p");
    countdownText.id = "popup-countdown";
    countdownText.style.fontSize = "16px";
    countdownText.style.color = "#555";
    countdownText.textContent = "Next Reset: Updating...";
    popup.appendChild(countdownText);

    // Add a button to close the popup
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.marginTop = "20px";
    closeButton.style.padding = "10px 20px";
    closeButton.style.backgroundColor = "#FF4500";
    closeButton.style.color = "#FFFFFF";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
    closeButton.addEventListener("click", () => {
        popup.remove(); // Remove the popup
    });
    popup.appendChild(closeButton);

    // Append the popup to the body
    document.body.appendChild(popup);

    // Update the countdown every second
    const interval = setInterval(() => {
        const now = new Date();
        const timeLeft = nextResetTime - now;
        if (timeLeft <= 0) {
            clearInterval(interval);
            countdownText.textContent = "Next Reset: 00:00:00";
        } else {
            const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
            const seconds = Math.floor((timeLeft / 1000) % 60);
            countdownText.textContent = `Next Reset: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        }
    }, 1000);
}

function disableBingoBoard() {
    const cells = document.querySelectorAll(".bingo-cell");
    cells.forEach((cell) => {
        cell.removeEventListener("click", checkPlayerAgainstCriterion); // Remove click events
        cell.style.pointerEvents = "none"; // Prevent interaction
        cell.style.opacity = "0.5"; // Dim the cells to indicate they're disabled
    });
}

function resetGame() {
    // Reset game variables
    currentPlayerIndex = 0;
    attemptsLeft = MAX_ATTEMPTS;
    nextResetTime = calculateNextResetTime();

    // Re-enable the bingo board
    const cells = document.querySelectorAll(".bingo-cell");
    cells.forEach((cell) => {
        cell.addEventListener("click", (event) => checkPlayerAgainstCriterion(cell, event)); // Re-add click events
        cell.style.pointerEvents = "auto"; // Re-enable interaction
        cell.style.opacity = "1"; // Restore opacity
        cell.classList.remove("active", "incorrect"); // Clear cell states
    });

    // Reset UI elements
    displayCurrentPlayer();
    updateRemainingPlayers();
    generateBingoCard();
}

// Advance to the next player
function advanceToNextPlayer() {
    currentPlayerIndex++; // Increment to the next player
    if (currentPlayerIndex < players.length && attemptsLeft > 0) {
        displayCurrentPlayer(); // Update the displayed player
    } else {
        endGame(); // End the game if no players or attempts remain
    }
}

// Update the remaining players display
function updateRemainingPlayers() {
    remainingPlayersDiv.textContent = `Attempts Left: ${attemptsLeft}`;
}

// Reset the game
function resetGame() {
    attemptsLeft = MAX_ATTEMPTS;
    currentPlayerIndex = 0;
    nextResetTime = calculateNextResetTime();
    generateBingoCard();
    displayCurrentPlayer();
    updateRemainingPlayers();
}

// Handle "Skip Player" button
skipPlayerButton.addEventListener("click", () => {
    if (attemptsLeft > 0) {
        advanceToNextPlayer();
    }
});

// Initialize the game
generateBingoCard();
displayCurrentPlayer();
updateRemainingPlayers();
setInterval(updateResetTimer, 1000);

// Lock screen zoom to 100%
document.body.style.zoom = "90%";
