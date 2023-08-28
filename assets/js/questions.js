/*jshint esversion: 8 */

//array for each of the different difficulty levels stored below

const easyQuestions = [{
    question: "When was Halo CE first released?",
    answers: [ 
        {text: "2001", },
        {text: "2004"},
        {text: "2007"},
        {text: "2010"}
    ],
    correctAnswer: "2001"
},
{
    question: "What is the Master Chief's real name",
    answers: [
        {text: "Smith"},
        {text: "Tony"},
        {text: "John"},
        {text: "Bob"}
    ],
    correctAnswer: "John"
},
{
    question: "What is the purpose of the Halo rings",
    answers: [
        {text: "To give free candy"},
        {text: "To give unlimted power to the Grunt Master race"},
        {text: "To wipe out all sentient life in the galaxy"},
        {text: "To only wipe out the Flood from the galaxy"}
    ],
    correctAnswer: "To wipe out all sentient life in the galaxy"
},
{
    question: "In which Halo game was the pistol the most feared weapon known to man",
    answers: [
        {text: "Halo CE"},
        {text: "Halo 3"},
        {text: "Halo Reach"},
        {text: "Halo 5"}
    ],
    correctAnswer: "Halo CE"
},
{
    question: "Which Halo game introduced the ability to dual-wield weapons",
    answers: [
        {text: "Halo 3"},
        {text: "Halo 2"},
        {text: "Halo Reach"},
        {text: "Halo Infinite"}
    ],
    correctAnswer: "Halo 2"
},
{
question: "Which Halo game introduced the concept of armor abilities",
answers: [
    {text: "Halo 2"},
    {text: "Halo 3"},
    {text: "Halo Reach"},
    {text: "Halo 4"}
],
correctAnswer: "Halo Reach"
},
{
    question: "Which Halo game marks the first appearance of the Prometheans as a new enemy faction",
    answers: [
        {text: "Halo 4"},
        {text: "Halo 2"},
        {text: "Halo Infinite"},
        {text: "Halo 5"}
    ],
    correctAnswer: "Halo 4"
},
{
    question: "What are the names of the three Hierarchs",
    answers: [
        {text: "Truth, Anger, Regret"},
        {text: "Truth, Mercy, Regret"},
        {text: "Lies, Mercy, Regret"},
        {text: "Truth, Mercy, Wisdom"}
    ],
    correctAnswer: "Truth, Mercy, Regret"
},
{
    question: "What happens in the beginning of Halo 2 that ends the award ceremony",
    answers: [
        {text: "Station explodes"},
        {text: "Everyone gets their awards"},
        {text: "The Covenant attack"},
        {text: "Yap Yap attacks"}
    ],
    correctAnswer: "The Covenant attack"
},
{
    question: "When did the great Yap Yap first appear",
    answers: [
        {text: "2009"},
        {text: "2021"},
        {text: "2008"},
        {text: "2018"}
    ],
    correctAnswer: "2018"
},
{
    question: "What level in Halo CE was the Flood first encountered",
    answers: [
        {text: "343 Guilty Spark"},
        {text: "Halo"},
        {text: "Silent Cartographer"},
        {text: "The Maw"}
    ],
    correctAnswer: "343 Guilty Spark"
},
{
    question: "What is the name of the Covenant tank",
    answers: [
        {text: "Ghost"},
        {text: "Wraith"},
        {text: "Scorpion"},
        {text: "Warthog"}
    ],
    correctAnswer: "Wraith"
},
{
    question: "Tank beats Ghosts, Tank beats Hunter, Tank beats .....",
    answers: [
        {text: "Nothing"},
        {text: "Your Mum"},
        {text: "Everything"},
        {text: "Scarab"}
    ],
    correctAnswer: "Everything"
},
{
    question: "Who does the Prophet of Truth kill in Halo 3",
    answers: [
        {text: "Master Chief"},
        {text: "The Arbiter"},
        {text: "Sgt Johnson"},
        {text: "Miranda Keys"}
    ],
    correctAnswer: "Miranda Keys"
},
{
    question: "Who would win in a fight Yap Yap or Master Chief",
    answers: [
        {text: "Yap Yap (Obviously)"},
        {text: "The Master Chief (by cheating)"},
        {text: "Draw (ridiculous)"},
        {text: "Yap Yap's cousion Yip Yap (How the hell did he get here)"}
    ],
    correctAnswer: "Yap Yap (Obviously)"
},
{
    question: "When did the great Schism take place",
    answers: [
        {text: "2551"},
        {text: "2499"},
        {text: "2552"},
        {text: "2452"}
    ],
    correctAnswer: "2552"
},
{
    question: "Halo Wars 2 introduced an incredbile vilian to the franchise who was that vilian",
    answers: [
        {text: "Yap Yap (this is the obvious answer)"},
        {text: "Pophet of Truth"},
        {text: "Tartarus"},
        {text: "Atriox"}
    ],
    correctAnswer: "Atriox"
},
{
    question: "What is the name of the Arbiter during Halo 2 onwards",
    answers: [
        {text: "Thel 'Vadam"},
        {text: "Ripa 'Moramee"},
        {text: "Fal 'Chavamee"},
        {text: "Judge-King of Qivro"}
    ],
    correctAnswer: "Thel 'Vadam"
},
{
    question: "The Unggoy and the ..... are natural eniemes",
    answers: [
        {text: "Humans"},
        {text: "Sangheili"},
        {text: "Kig-Yar"},
        {text: "Jiralhanae"}
    ],
    correctAnswer: "Kig-Yar"
},
{
    question: "Who is Master Chiefs Ai?",
    answers: [
        {text: "Yap Yap"},
        {text: "Cortana"},
        {text: "Serina"},
        {text: "Roland"}
    ],
    correctAnswer: "Cortana"
},
{
    question: "Who is the mysterious new alien faction introduced in Infinite",
    answers: [
        {text: "The Banished"},
        {text: "The Flood"},
        {text: "The Endless"},
        {text: "The Covenant"}
    ],
    correctAnswer: "The Endless"
},
{
    question: "Which Spartan team does Atriox go up against at the beginning of Halo Wars 2",
    answers: [
        {text: "Red Team"},
        {text: "Blue Team"},
        {text: "Noble Team"},
        {text: "Fireteam Osiris"}
    ],
    correctAnswer: "Red Team"
},
{
    question: "Who is the main enemy introduced in Halo 4",
    answers: [
        {text: "The Endless"},
        {text: "Prophet of Truth"},
        {text: "Atriox"},
        {text: "The Didact"}
    ],
    correctAnswer: "The Didact"
},
{
    question: "Cortana sadly died in which Halo game",
    answers: [
        {text: "Halo 5"},
        {text: "Halo 4"},
        {text: "Halo CE"},
        {text: "Halo Reach"}
    ],
    correctAnswer: "Halo 4"
},
{
    question: "What is the name of the Spartan armored suit",
    answers: [
        {text: "Power Armor"},
        {text: "Praetor Suit"},
        {text: "Nanosuit"},
        {text: "Mjolnir"}
    ],
    correctAnswer: "Mjolnir"
},
{
    question: "What type of Ammo do most Covenant weapons usually use",
    answers: [
        {text: "Plasma"},
        {text: "Energy"},
        {text: "Balistic"},
        {text: "Electric"}
    ],
    correctAnswer: "Plasma"
},
{ 
    question: "What is the reason that the Arbiter is punished in the beginning of Halo 2",
    answers: [
        {text: "Brought the Master Chief to High Charity"},
        {text: "Blamed for being a Heretic"},
        {text: "Killed his own men"},
        {text: "Tried to take power"}
    ],
    correctAnswer: "Blamed for being a Heretic"
},
{
    question: "What species was in charge of eliminating the Sangheili",
    answers: [
        {text: "Kig-Yar"},
        {text: "Jiralhanae"},
        {text: "Yanme'e"},
        {text: "Mgalekgolo"}
    ],
    correctAnswer: "Jiralhanae"
},
{
    question: "In what game where the Jiralhanae first introduced",
    answers: [
        {text: "Halo 3"},
        {text: "Halo Infinite"},
        {text: "Halo 2"},
        {text: "Halo Reach"}
    ],
    correctAnswer: "Halo 2"
},
{
    question: "Which Halo game was the first to let you play on Zeta Halo",
    answers: [
        {text: "Halo Infinite"},
        {text: "Halo 3"},
        {text: "Halo 5"},
        {text: "Halo Spartan Assault"}
    ],
    correctAnswer: "Halo Infinite"
}
];

